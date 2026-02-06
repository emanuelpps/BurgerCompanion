type TitleVariant = "primary" | "secondary" | "tertiary";

interface TitleVariantsProps extends React.ComponentProps<"h1"> {
  variants: TitleVariant[];
}

export default function TitleVariants({
  variants,
  className = "",
  children,
  ...props
}: TitleVariantsProps) {
  const titleVariants: Record<TitleVariant, string> = {
    primary: "text-4xl text-white font-bold text-center",
    secondary: "text-2xl text-white font-bold text-center",
    tertiary: "text-xl text-white font-bold text-center",
  };

  return (
    <>
      {variants.map((variant) => {
        const classes = `${titleVariants[variant]} ${className}`;
        switch (variant) {
          case "primary":
            return (
              <h1 key={variant} className={classes} {...props}>
                {children}
              </h1>
            );
          case "secondary":
            return (
              <h2 key={variant} className={classes} {...props}>
                {children}
              </h2>
            );
          case "tertiary":
            return (
              <h3 key={variant} className={classes} {...props}>
                {children}
              </h3>
            );
        }
      })}
    </>
  );
}
