export default function LogoIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#c0392b" />
      {/* Car silhouette */}
      <path
        d="M11 27 L12 23.5 L15 21 L22 20.5 L29 21 L32 23.5 L33 27"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M11 27 L33 27" stroke="#fff" strokeWidth="1.4" />
      <circle cx="15.5" cy="28.5" r="2.5" fill="#c0392b" stroke="#fff" strokeWidth="1.2" />
      <circle cx="28.5" cy="28.5" r="2.5" fill="#c0392b" stroke="#fff" strokeWidth="1.2" />
      {/* Wrench overlay */}
      <g transform="translate(21,10) rotate(35)">
        <rect x="-2" y="2" width="4" height="13" rx="1.5" fill="#fff" />
        <path d="M-4 2 Q-5 -1 -2 -3 L2 -3 Q5 -1 4 2 Z" fill="#fff" />
        <path d="M-1.5 -0.5 L1.5 -0.5" stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
