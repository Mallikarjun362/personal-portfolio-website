"use client";
import { SessionProvider } from "next-auth/react";

const AuthClientSessionProvider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthClientSessionProvider;
