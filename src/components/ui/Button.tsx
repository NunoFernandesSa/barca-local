import { ButtonProps } from "@/types/ui/button-props";

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading = false,
  disabled = false,
  title = "",
}: ButtonProps) {
  const baseStyles = "rounded-lg font-semibold transition-colors shadow-lg";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10 shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}
      `}
      title={title}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && iconPosition === "left" && icon
      )}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
