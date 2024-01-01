'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import { useThemeMode } from 'flowbite-react';

interface TurnstileClientProps {
  siteKey: string;
};

export default function TurnstileClient(props: TurnstileClientProps) {
  const themeMode = useThemeMode();

  return (
    <Turnstile siteKey={props.siteKey} options={{
      theme: themeMode.computedMode === 'dark' ? 'dark' : 'light',
    }} />
  )
};
