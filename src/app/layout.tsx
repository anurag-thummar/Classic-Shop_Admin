'use client'
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import SidebarLayout from "./SidebarLayout";
import BaseHeader from "./components/Header/BaseHeader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname?.startsWith("/login") || pathname?.startsWith("/sign-up") || pathname?.startsWith("/forgot-password") || pathname?.startsWith("/reset-password");

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {isAuthPage ? (
          <div className="flex flex-col w-full">
            <BaseHeader />
            <div>{children}</div>
          </div>
        ) : (
          <SidebarLayout>{children}</SidebarLayout>
        )}

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              color: "#000",
              background: "blue",
              borderRadius: "0px",
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#43916f",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#e55642",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
