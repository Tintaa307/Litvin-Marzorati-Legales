import type { Metadata } from 'next'
import clsx from "clsx";
import localFont from 'next/font/local';
import './globals.css'
import Footer from '@/components/sections/Footer';

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
});

const meshedDisplay = localFont({
  variable: '--font-meshedDisplay',
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
  ]
});

const dmSerif = localFont({
  variable: '--font-dmSerif',
  src: [
    {
      path: "./fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    }
  ]
})

export const metadata: Metadata = {
  title: 'Litvin Marzorati Legales',
  description: 'Estudio de legales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(
          poppins.variable,
          meshedDisplay.variable,
          dmSerif.variable,
          'bg-background',
          'font-poppins',
        )}>
        <main className="flex flex-col overflow-hidden">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
