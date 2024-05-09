import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/auth/SessionProvider";
import { Next13NProgress, Link } from "nextjs13-progress";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// Google font - Poppins
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
//  PWA
const APP_NAME = "JisuCar";
const APP_DEFAULT_TITLE = "JisuCar";
const APP_TITLE_TEMPLATE = "JisuCar";
const APP_DESCRIPTION = "JisuCar App";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#000",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json" />
      </head>
      <body className={poppins.className}>
        <SessionProvider session={session}>
          <main>{children}</main>
          <Next13NProgress color="#01b14f" height={5} />
        </SessionProvider>
      </body>
    </html>
  );
}
