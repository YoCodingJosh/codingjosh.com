import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'

/**
 * Runs inline in <head> before first paint so a dark-mode visitor never sees a light flash.
 * Stored preference wins; otherwise follow the OS.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  STORAGE_KEY,
)});var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`

export function toggleTheme(): void {
  const dark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The class still applies for this visit.
  }
}

function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains('dark')
}

function getServerSnapshot(): boolean {
  return false
}

/** Whether dark mode is currently active. Always `false` during SSR; correct after hydration. */
export function useIsDark(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
