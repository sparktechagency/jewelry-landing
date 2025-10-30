import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Zakee Boxes",
    template: "%s - Zakee Boxes",
  },
  description: "Jewelry",
  keywords: ["Zakee Boxes"],
  openGraph: {
    title: "Zakee Boxes",
    description: "Jewelry",
    images: [
      {
        url: "./opengraph-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    url: "https://zakeeboxes.com/",
    type: "website",
    siteName: "Zakee Boxes",
  },

  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  twitter: {
    card: "summary_large_image",
    title: "Zakee Boxes",
    description: "Jewelry",
    images: ["./opengraph-image.png"],
    creator: "@ZakeeBoxes",
  },

  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  metadataBase: new URL("https://zakeeboxes.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={mainTheme}>
            <div>{children}</div> <Toaster position="top-center" richColors />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
