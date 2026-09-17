type IconName = "shield" | "building" | "lines" | "spray" | "person" | "check";

const PATHS: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5l8-3z" />,
  building: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  lines: <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />,
  spray: <path d="M12 3v6M9 6l3-3 3 3M5 12h14l-1.5 8h-11z" />,
  person: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21v-1a7 7 0 0114 0v1" />,
  check: <path d="M9 12l2 2 4-4M21 12c0 5-3.5 9-9 9s-9-4-9-9 3.5-9 9-9 9 4 9 9z" />,
};

export default function Icon({
  name,
  size = 36,
  stroke = "#7A1F2B",
  className,
}: {
  name: IconName;
  size?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
