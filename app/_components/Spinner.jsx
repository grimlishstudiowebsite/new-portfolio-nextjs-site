function Spinner({ size = "md" }) {
  const sizeClasses = {
    sm: "size-4 border-2",
    md: "size-6 border-2",
    lg: "size-8 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} animate-spin rounded-full border-current border-t-transparent`}
      aria-label="Loading"
    />
  );
}

export default Spinner;
