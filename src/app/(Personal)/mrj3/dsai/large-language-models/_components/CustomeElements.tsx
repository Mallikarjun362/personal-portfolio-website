import { CSSProperties, ReactNode } from "react";

interface IHtmlProps {
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
}

export const H1 = ({ children, style, className }: any) => (
  <h1
    style={{
      fontSize: "clamp(70px,10vw,100px)",
      borderBottom: "2px solid black",
      ...style,
    }}
    className={className}
  >
    {children}
  </h1>
);

export const H2 = ({ children, style, className }: any) => (
  <h1
    style={{
      fontSize: "clamp(50px,5vw,75px)",
      borderBottom: "2px solid black",
      ...style,
    }}
    className={className}
  >
    {children}
  </h1>
);
