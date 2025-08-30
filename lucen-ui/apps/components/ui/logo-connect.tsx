"use client";

import clsx from 'clsx';

export function ConnectLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={clsx('transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-105', className)}
      aria-hidden
      focusable="false"
    >
      <path
        d="M 45 7 A 8 8 0 0 0 38.90625 20.169922 L 33.279297 29.115234 L 21.707031 29.886719 A 8 8 0 0 0 14 24 A 8 8 0 0 0 14 40 A 8 8 0 0 0 21.714844 34.113281 L 33.279297 34.884766 L 38.90625 43.830078 A 8 8 0 0 0 45 57 A 8 8 0 0 0 45 41 A 8 8 0 0 0 42.550781 41.388672 L 38.287109 32 L 42.552734 22.607422 A 8 8 0 0 0 45 23 A 8 8 0 0 0 45 7 z"
        fill="currentColor"
      />
    </svg>
  );
}


