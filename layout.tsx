import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K360 Automation | Oklahoma Instrumentation & Process Control",
  description:
    "K360 Automation is an Oklahoma manufacturers' representative for industrial instrumentation, automation, measurement, and control valve solutions for oil & gas and industrial process facilities.",
  metadataBase: new URL("https://k360automation.com"),
  openGraph: {
    title: "K360 Automation",
    description:
      "Oklahoma instrumentation, automation, measurement, and control valve support for oil & gas and industrial process applications.",
    url: "https://k360automation.com",
    siteName: "K360 Automation",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
