import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-[80px] ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </Tag>
  );
}
