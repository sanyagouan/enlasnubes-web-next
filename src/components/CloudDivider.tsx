export default function CloudDivider({ variant }: { variant: 'dark-to-light' | 'light-to-dark' | 'dark-to-dark' }) {
  const colors = {
    'dark-to-light': { top: '#0f0f1a', mid: '#1a1a2e', bottom: '#FBF0E0' },
    'light-to-dark': { top: '#FBF0E0', mid: '#1a1a2e', bottom: '#0f0f1a' },
    'dark-to-dark': { top: '#0f0f1a', mid: '#1a1a2e', bottom: '#0f0f1a' },
  }

  const c = colors[variant]

  return (
    <div className="relative w-full overflow-hidden leading-[0] -mb-1">
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="relative w-full h-20 sm:h-28"
      >
        {/* Cloud-like wave shapes */}
        <path
          d="M0,100 C120,70 240,120 420,85 C540,65 660,110 840,80 C960,60 1080,95 1200,75 C1320,55 1380,80 1440,65 L1440,140 L0,140 Z"
          fill={c.bottom}
          opacity="0.5"
        />
        <path
          d="M0,120 C180,95 360,130 540,105 C720,80 900,120 1080,100 C1200,85 1350,110 1440,95 L1440,140 L0,140 Z"
          fill={c.bottom}
          opacity="0.8"
        />
        <rect x="0" y="120" width="1440" height="20" fill={c.bottom} />
      </svg>
    </div>
  )
}
