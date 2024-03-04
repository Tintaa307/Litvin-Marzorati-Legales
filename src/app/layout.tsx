import type { Metadata } from 'next'
import clsx from "clsx";
import Footer from '@/components/sections/Footer';


export const metadata: Metadata = {
  title: 'Litvin Marzorati Legales',
  description: 'Estudio de legales',
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string};
}) 

{
  return (
    <html lang={locale}>
      <body className={clsx(
          'bg-background',
        )}>
        <main className="flex flex-col overflow-hidden">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
