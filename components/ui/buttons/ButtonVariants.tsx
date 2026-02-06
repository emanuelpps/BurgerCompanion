type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonVariantsProps extends React.ComponentProps<"button"> {
  variant: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonVariants({
  variant,
  className = "",
  children,
  ...props
}: ButtonVariantsProps) {
  const buttonVariants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#FF6500] shadow-md shadow-[#FF6500]/50 hover:bg-[#ff7a26] text-white font-semibold text-xl rounded-3xl px-6 py-5 transition w-full",
    secondary:
      "bg-transparent border-3 border-[#323638] hover:border-white/40 text-white font-semibold text-xl rounded-3xl px-6 py-5 transition w-full",
    tertiary:
      "text-xl text-white font-bold underline underline-offset-4 hover:opacity-80 transition",
  };

  const classes = `${buttonVariants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
