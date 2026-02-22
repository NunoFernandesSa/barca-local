export type SpinnerLoaderProps = {
  message?: string;
  variant?: "dots" | "spinner" | "pulse";
  fullScreen?: boolean;
};

export type ErrorLoaderProps = {
  message?: string;
  onRetry?: () => void;
  fullScreen?: boolean;
};

export type EmptyStateLoaderProps = {
  title?: string;
  message?: string;
  icon?: "search" | "basket" | "location" | "custom";
  customIcon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};
