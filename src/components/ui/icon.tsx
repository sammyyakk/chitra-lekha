import { icons } from "lucide-react";

export const Icon = ({
  name,
  color = "currentColor", // Default color to avoid undefined errors
  size = 24,              // Default size
  className = "",         // Default to an empty string
}: {
  name: keyof typeof icons; // Type validation for icon names
  color?: string;           // Optional color prop
  size?: number;            // Optional size prop
  className?: string;       // Optional className
}) => {
  // Fetch the icon component
  const LucideIcon = icons[name];

  // Handle missing icon gracefully
  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in lucide-react.`);
    return null; // Return null or a fallback icon if the icon is not found
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
