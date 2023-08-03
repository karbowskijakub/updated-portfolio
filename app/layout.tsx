import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Jakub Karbowski - strony internetowe",
  description: "Strony i aplikacje internetowe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="zxx">
        <body className="relative">
          <Navbar />
          {children}
          <ToastContainer className="toast-position" />
        </body>
      </html>
    </>
  );
}
