interface CTAButtonProps {
  text?: string;
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
}

const CTAButton = ({ text = "Download Now", variant = "default", size = "lg", className = "" }: CTAButtonProps) => {
  const sizeClasses = size === "lg" ? "px-8 py-3.5 text-base" : size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm";
  
  if (variant === "outline") {
    return (
      <a
        href="#AFFILIATE_LINK_PLACEHOLDER"
        className={`inline-flex items-center justify-center rounded-xl font-semibold border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all ${sizeClasses} ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href="#AFFILIATE_LINK_PLACEHOLDER"
      className={`inline-flex items-center justify-center rounded-xl font-semibold btn-gradient text-foreground blue-glow hover:blue-glow-strong transition-all ${sizeClasses} ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
