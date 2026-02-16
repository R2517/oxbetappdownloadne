import { useGeo } from "@/contexts/GeoContext";

interface CTAButtonProps {
  text?: string;
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
  showBonus?: boolean;
}

const CTAButton = ({ text = "Download Now", variant = "default", size = "lg", className = "", showBonus = false }: CTAButtonProps) => {
  const { country } = useGeo();
  const sizeClasses = size === "lg" ? "px-8 py-3.5 text-base" : size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm";
  
  const displayText = showBonus ? `${text} — ${country.bonusAmount} Bonus` : text;

  if (variant === "outline") {
    return (
      <a
        href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97"
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-xl font-semibold border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all ${sizeClasses} ${className}`}
      >
        {displayText}
      </a>
    );
  }

  return (
    <a
      href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97"
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl font-semibold btn-gradient text-foreground blue-glow hover:blue-glow-strong transition-all ${sizeClasses} ${className}`}
    >
      {displayText}
    </a>
  );
};

export default CTAButton;
