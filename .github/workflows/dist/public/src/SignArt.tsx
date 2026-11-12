/** Minimal SVG plates for common signs; others get a letter badge */
export function SignArt({ id, size = 72 }: { id: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 72 72',
  };

  if (id === 'pare') {
    return (
      <svg {...common}>
        <polygon
          points="36,4 68,20 68,52 36,68 4,52 4,20"
          fill="#b91c1c"
          stroke="#fff"
          strokeWidth="3"
        />
        <text x="36" y="42" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="14">
          PARE
        </text>
      </svg>
    );
  }
  if (id === 'ceda') {
    return (
      <svg {...common}>
        <polygon points="36,8 64,60 8,60" fill="#fff" stroke="#b91c1c" strokeWidth="5" />
        <text x="36" y="48" textAnchor="middle" fill="#111" fontWeight="700" fontSize="9">
          CEDA
        </text>
      </svg>
    );
  }
  if (id.startsWith('vel-')) {
    const n = id.replace('vel-', '');
    return (
      <svg {...common}>
        <circle cx="36" cy="36" r="30" fill="#fff" stroke="#b91c1c" strokeWidth="6" />
        <text x="36" y="42" textAnchor="middle" fill="#111" fontWeight="800" fontSize="20">
          {n}
        </text>
      </svg>
    );
  }
  if (id === 'no-entrar') {
    return (
      <svg {...common}>
        <circle cx="36" cy="36" r="30" fill="#b91c1c" />
        <rect x="16" y="32" width="40" height="8" rx="2" fill="#fff" />
      </svg>
    );
  }
  if (id === 'sentido-obligatorio' || id === 'solo-derecha' || id === 'solo-izquierda') {
    return (
      <svg {...common}>
        <circle cx="36" cy="36" r="30" fill="#1d4ed8" />
        <path d="M36 18 L36 48 M36 18 L26 30 M36 18 L46 30" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (id.includes('curva') || id === 'cruce' || id === 'ninos' || id === 'obras' || id === 'peatones') {
    return (
      <svg {...common}>
        <polygon points="36,8 66,62 6,62" fill="#fff" stroke="#b91c1c" strokeWidth="4" />
        <text x="36" y="48" textAnchor="middle" fill="#111" fontWeight="800" fontSize="16">
          !
        </text>
      </svg>
    );
  }
  if (id === 'no-adelantar' || id === 'no-estacionar' || id === 'no-girar-izq' || id === 'no-u') {
    return (
      <svg {...common}>
        <circle cx="36" cy="36" r="30" fill="#fff" stroke="#b91c1c" strokeWidth="6" />
        <line x1="18" y1="18" x2="54" y2="54" stroke="#b91c1c" strokeWidth="5" />
      </svg>
    );
  }
  // fallback
  const letter = id.slice(0, 2).toUpperCase();
  return (
    <svg {...common}>
      <rect x="6" y="6" width="60" height="60" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
      <text x="36" y="42" textAnchor="middle" fill="#99f6e4" fontWeight="700" fontSize="14">
        {letter}
      </text>
    </svg>
  );
}
