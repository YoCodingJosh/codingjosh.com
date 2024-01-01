'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import { useThemeMode } from 'flowbite-react';

export default function TurnstileClient() {
  const themeMode = useThemeMode();

  return (
    <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} options={{
      theme: themeMode.computedMode === 'dark' ? 'dark' : 'light',
    }} />
  )
};
