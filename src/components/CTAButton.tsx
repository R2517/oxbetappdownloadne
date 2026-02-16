import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  text?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "lg" | "sm";
  className?: string;
}

const CTAButton = ({ text = "Download Now", variant = "default", size = "lg", className = "" }: CTAButtonProps) => (
  <Button asChild variant={variant} size={size} className={`rounded-full font-semibold gold-glow ${className}`}>
    <a href="#AFFILIATE_LINK_PLACEHOLDER">{text}</a>
  </Button>
);

export default CTAButton;
