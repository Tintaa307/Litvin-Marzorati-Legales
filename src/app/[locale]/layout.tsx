import type { Metadata } from "next"
import clsx from "clsx"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/sections/Footer"
import { TagManagerProvider } from "@/context/TagManager"

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "./fonts/Poppins-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
})

const meshedDisplay = localFont({
  variable: "--font-meshedDisplay",
  src: [
    {
      path: "./fonts/MeshedDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MeshedDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MeshedDisplay-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
})

const dmSerif = localFont({
  variable: "--font-dmSerif",
  src: [
    {
      path: "./fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
})

export const metadata: Metadata = {
  title: "Litvin Marzorati Legales",
  description: "Estudio de legales",
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body
        className={clsx(
          poppins.variable,
          meshedDisplay.variable,
          dmSerif.variable,
          "bg-background",
          "font-poppins"
        )}
      >
        <TagManagerProvider>
          <main className="flex flex-col overflow-hidden">
            {children}
            <Footer />
          </main>
        </TagManagerProvider>
      </body>
    </html>
  )
}
