import { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className="w-full max-w-[50%]">
      <div
        className={`bg-[#323638] rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm transition hover:border-white/20 hover:shadow-xl p-6 ${className}
        `}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
