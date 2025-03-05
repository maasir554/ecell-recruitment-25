import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import Image from "next/image";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex gap-4 flex-col items-center justify-center py-8 border-t border-neutral-800">
              <div className="flex flex-row justify-evenly items-center gap-4 w-full flex-wrap">
                <NextLink
                  className="flex justify-start items-center gap-1"
                  href="https://ecellnitb.in"
                  target="_blank"
                >
                  <Image
                    src="/logo.webp"
                    alt="E-Cell NITB"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <span className="gap-1">
                    <p className="font-bold text-md">Entrepreneurship Cell</p>
                    <p className="text-xs text-neutral-200">
                      ROLTA Incubation Centre
                    </p>
                    <p className="text-xs text-neutral-200">MANIT, Bhopal</p>
                  </span>
                </NextLink>

                {/* contact numbers */}
                <div className="flex flex-col gap-2 py-6">
                  <h3 className="font-semibold text-sm">For queries:</h3>
                  <div className="flex flex-col gap-1 text-xs text-neutral-400">
                    <span>
                      <span>Person One: </span>{" "}
                      <Link
                        className="text-xs text-neutral-600"
                        href="tel:+91 000 000 0000"
                      >
                        +91 000 000 0000
                      </Link>
                    </span>
                    <span>
                      <span>Person Two: </span>{" "}
                      <Link
                        className="text-xs text-neutral-600"
                        href="tel:+91 000 000 0000"
                      >
                        +91 000 000 0000
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-400 px-2">
                Copyright &copy; Entrepreneurship Cell NIT Bhopal, 2025
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
