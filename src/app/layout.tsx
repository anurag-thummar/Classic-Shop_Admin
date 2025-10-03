'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import Header from "./components/Header/Header";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <div className="flex">
          {openSidebar && <Sidebar />}
          <div className=" border-b border-[#e0e0e0] bg-white w-full h-[50px]">
            <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            {children}
          </div>
        </div>
        <Toaster
          {...{
            position: "top-right",
            autoClose: 2000,
            toastClassName: "custom-toast",
            bodyClassName: "custom-toast-body",
            hideProgressBar: true,
            newestOnTop: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            toastOptions: {
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
            },
          }}
        />
      </body>
    </html>
  );
}
