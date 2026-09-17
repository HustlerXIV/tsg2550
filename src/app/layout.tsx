import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tsg2550.com"),
  title: {
    default: "บริษัท รักษาความปลอดภัย ที.เอส.จี. 2550 จำกัด",
    template: "%s | ที.เอส.จี. 2550",
  },
  description:
    "บริการรักษาความปลอดภัยและงานทำความสะอาดครบวงจร โดยบริษัท รักษาความปลอดภัย ที.เอส.จี. 2550 จำกัด กรุงเทพมหานคร",
  icons: { icon: "/logo.png" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://tsg2550.com",
    siteName: "บริษัท รักษาความปลอดภัย ที.เอส.จี. 2550 จำกัด",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7A1F2B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
