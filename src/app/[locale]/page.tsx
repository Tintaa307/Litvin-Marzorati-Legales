import Nav from "@/components/Nav"
import Chat from "@/components/sections/chatbot/Chatbot"
import Eventos from "@/components/sections/eventos/Eventos"
import FAQ from "@/components/sections/faq/FAQ"
import InstagramFeed from "@/components/sections/feed/InstagramFeed"
import FinalCTA from "@/components/sections/landing/FinalCTA"
import Hero from "@/components/sections/landing/Hero"
import LogoMarquee from "@/components/sections/landing/LogoMarquee"
import Media from "@/components/sections/landing/Media"
import Services from "@/components/sections/landing/Services"
import { useLocale, useTranslations } from "next-intl"

export default function Home() {
  const tNav = useTranslations("Nav")
  const tHero = useTranslations("Hero")
  const tMedia = useTranslations("Media")
  const locale = useLocale()
  const tInstagram = useTranslations("InstagramFeed")
  const tFAQ = useTranslations("FAQ")

  return (
    <div>
      <Nav
        locale={locale}
        tInicio={tNav("inicio")}
        tAbout={tNav("sobreNos")}
        tContacto={tNav("contacto")}
        tServicios={tNav("servicios")}
      />
      <Hero
        locale={locale}
        head1={tHero("head1")}
        head2={tHero("head2")}
        type1={tHero("type1")}
        type2={tHero("type2")}
        type3={tHero("type3")}
        type4={tHero("type4")}
        type5={tHero("type5")}
        type6={tHero("type6")}
        fact1={tHero("fact1")}
        fact2={tHero("fact2")}
        fact3={tHero("fact3")}
        cta1={tHero("cta1")}
        cta2={tHero("cta2")}
      />
      <Services />
      <LogoMarquee />
      <Media
        header={{ title: tMedia("title"), subtitle: tMedia("subtitle") }}
      />
      {/* <Eventos /> */}
      {/* <InstagramFeed
        title={tInstagram("title")}
        subtitle={tInstagram("subtitle")}
        cta={tInstagram("cta")}
      /> */}
      <FAQ title={tFAQ("title")} subtitle={tFAQ("subtitle")} questions={tFAQ} />
      <Chat />
      <FinalCTA />
    </div>
  )
}
