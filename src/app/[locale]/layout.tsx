import type { Metadata } from "next"
import clsx from "clsx"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/sections/Footer"
import { TagManagerProvider } from "@/context/TagManager"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import FacebookPixel from "@/components/facebook-pixel/facebook-pixel"
import Chat from "@/components/sections/chatbot/Chatbot"
import FloatingButton from "@/components/sections/FloatingButton"

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
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
        <FacebookPixel />

        <NextIntlClientProvider messages={messages}>
          <TagManagerProvider>
            <main className="flex flex-col overflow-hidden">
              {children}
              <Chat />
              <Footer />
              <FloatingButton phoneNumber="5491163606526" />
            </main>
          </TagManagerProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
