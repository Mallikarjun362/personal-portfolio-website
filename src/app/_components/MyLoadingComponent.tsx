import { CSSProperties, ReactNode } from "react";
import Loading from "../loading";

export default function MyLoadingComponent({
  children,
  isLoading,
  style = {},
}: {
  style?: CSSProperties;
  children: ReactNode;
  isLoading: boolean;
}): ReactNode {
  if (isLoading) {
    return <Loading style={{ height: "100%", ...style }} />;
  }
  return <>{children}</>;
}
