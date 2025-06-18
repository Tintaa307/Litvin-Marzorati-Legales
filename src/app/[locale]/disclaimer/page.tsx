import Nav from "@/components/Nav"
import Heading from "@/components/text/Heading"
import { useTranslations, useLocale } from "next-intl"

const Disclaimer = () => {
  const tNav = useTranslations("Nav")
  const t = useTranslations("Disclaimer")
  const locale = useLocale()
  let txt = {
    txt1: "Our website is provided on an As-Is and As-Available basis. You agree that your use of our site and services will be at your own risk. To the greatest extent permitted by law, we disclaim all warranties, whether express or implied, in connection with the site and their use thereof without limitation.",
    txt2: "We make no warranties in relation to the accuracy or completeness of the site's content or the content of any website linked to the site and will assume no liability or responsibility for any: (1) personal injury or property damage of any nature resulting from your use and/or access to the site; (2) errors, mistakes or inaccuracies of any information or content; (3) bugs or viruses or the like that may be transmitted to/through the site by a third party; (4) any interruption to or from the site; (5), any unauthorised access to our servers and/or any personal or financial information stored within it; (6) any omissions/errors in any content and materials or for any loss or damage incurred as a result of the use of content made available via the site.",
    txt3: "In no event will we or our directors, employees, or agents be liable to you or any third-party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.",
    txt4: "Any unsolicited emails and/or information sent to Litvin Marzorati Legales will not be considered confidential on their receipt, and may be disclosed to others in compliance with our Privacy Policy. We are not obligated to send a response, and an attorney-client relationship will not be formed until Litvin Marzorati Legales has explicitly said as such. If you are not already our client, we advise you to not include any confidential information in any message you may send.",
  }

  return (
    <>
      <Nav
        locale={locale}
        tInicio={tNav("inicio")}
        tAbout={tNav("sobreNos")}
        tContacto={tNav("contacto")}
        tServicios={tNav("servicios")}
      ></Nav>
      <div className="w-full flex flex-col items-center justify-center pt-44 pb-24 main-padding gap-6">
        <Heading title={t("title")} notCentered={true}></Heading>
        <div className="text-justify grid gap-4 text-sm">
          <p>{txt.txt1}</p>
          <p>{txt.txt2}</p>
          <p>{txt.txt3}</p>
          <p>{txt.txt4}</p>
        </div>
      </div>
    </>
  )
}

export default Disclaimer
