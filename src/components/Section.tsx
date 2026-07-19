import React from "react";

type SectionProps = {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
  description?: string;
};

export default function Section({
  children,
  title,
  description,
}: SectionProps) {
  return (
    <div>
      <div className="line"></div>
      <div className="textrow fs14 description">
        <span className="fs18 font-semibold">{title}</span>
        <br />
        {description?.split("\\n").map((d) => (
          <p>{d}</p>
        ))}
      </div>
      <div className="container">{children}</div>
    </div>
  );
}
