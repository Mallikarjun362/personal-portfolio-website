import AuthClientSessionProvider from "./_components/AuthClientSessionProvider";
import PrimaryMainNavigationBar from "./_components/PrimaryMainNavigationBar";
import GlobalHoverComponent from "./_components/GlobalHoverComponent";
import { GlobalContextProvider } from "./_context/store";
import OnPageLoadLogic from "./_components/OnPageLoad";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indus Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        style={{
          flexDirection: "column",
          overflow: "hidden",
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <AuthClientSessionProvider>
          <GlobalContextProvider>
            <PrimaryMainNavigationBar />
            <div
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                width: "100vw",
                padding: 0,
                margin: 0,
                flex: 1,
              }}
            >
              {children}
            </div>
            <OnPageLoadLogic />
            <GlobalHoverComponent />
          </GlobalContextProvider>
        </AuthClientSessionProvider>
      </body>
    </html>
  );
}
