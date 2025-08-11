import Nav from "@/components/Nav"
import AboutCards from "@/components/sections/about/AboutCards"
import Team from "@/components/sections/about/Team"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const tNav = useTranslations("Nav")
  return (
    <>
      <Nav
        locale={useLocale()}
        tInicio={tNav("inicio")}
        tAbout={tNav("sobreNos")}
        tContacto={tNav("contacto")}
        tServicios={tNav("servicios")}
      />
      <AboutCards />
      <Team />
    </>
  )
}
