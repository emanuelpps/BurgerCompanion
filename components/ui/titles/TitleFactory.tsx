import TitleVariants from "./TitleVariants";

interface TitleFactoryProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: TitleVariant;
}

type TitleVariant = "primary" | "secondary" | "tertiary";

export default function TitleFactory({ variant, ...props }: TitleFactoryProps) {
  return <TitleVariants variants={[variant]} {...props} />;
}
