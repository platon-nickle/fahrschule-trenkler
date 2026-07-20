interface SimpleIconProps {
  icon: { path: string; title: string };
  className?: string;
}

export default function SimpleIcon({ icon, className }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
