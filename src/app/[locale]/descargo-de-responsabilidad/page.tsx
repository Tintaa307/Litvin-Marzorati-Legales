import Nav from "@/components/Nav"
import Heading from "@/components/text/Heading"
import { useLocale, useTranslations } from "next-intl"

const PrivacyPolicy = () => {
  const tNav = useTranslations("Nav")
  const t = useTranslations("Disclaimer")
  const locale = useLocale()
  let txt = {
    txt1: "Nuestro sitio web se proporciona de forma as-is y as-available. Usted acepta que su uso de nuestro sitio y servicios será bajo su propio riesgo. En la mayor medida permitida por la ley, renunciamos a todas las garantías, ya sean expresas o implícitas, en relación con el sitio y su uso del mismo sin limitación.",
    txt2: "No ofrecemos garantías en relación con la exactitud o integridad del contenido del sitio o el contenido de cualquier sitio web vinculado al sitio y no asumiremos ninguna responsabilidad por: (1) lesiones personales o daños a la propiedad de cualquier naturaleza resultantes de su uso y/o acceso al sitio; (2) errores, errores o inexactitudes de cualquier información o contenido; (3) errores o virus o similares que puedan ser transmitidos a/a través del sitio por un tercero; (4) cualquier interrupción hacia o desde el sitio; (5), cualquier acceso no autorizado a nuestros servidores y/o cualquier información personal o financiera almacenada en él; (6) cualquier omisión/error en cualquier contenido y material o por cualquier pérdida o daño incurrido como resultado del uso del contenido puesto a disposición a través del sitio.",
    txt3: "En ningún caso nosotros o nuestros directores, empleados o agentes seremos responsables ante usted o cualquier tercero por daños directos, indirectos, consecuentes, ejemplares, incidentales, especiales o punitivos, incluyendo pérdida de ganancias, pérdida de ingresos, pérdida de datos u otros daños derivados de su uso del sitio, incluso si hemos sido advertidos de la posibilidad de tales daños.",
    txt4: "Cualquier correo electrónico no solicitado y/o información enviada a Litvin  Marzorati  Legales no se considerará confidencial en su recibo, y puede ser divulgado a otros en cumplimiento de nuestra Política de Privacidad. No estamos obligados a enviar una respuesta, y no se formará una relación abogado-cliente hasta  que Litvin  Marzorati  Legal haya dicho explícitamente como tal. Si aún no es nuestro cliente, le recomendamos que no incluya ninguna información confidencial en ningún mensaje que pueda enviar.",
  }

  if (locale === "en") {
    txt = {
      txt1: "Our website is provided on an As-Is and As-Available basis. You agree that your use of our site and services will be at your own risk. To the greatest extent permitted by law, we disclaim all warranties, whether express or implied, in connection with the site and their use thereof without limitation.",
      txt2: "We make no warranties in relation to the accuracy or completeness of the site's content or the content of any website linked to the site and will assume no liability or responsibility for any: (1) personal injury or property damage of any nature resulting from your use and/or access to the site; (2) errors, mistakes or inaccuracies of any information or content; (3) bugs or viruses or the like that may be transmitted to/through the site by a third party; (4) any interruption to or from the site; (5), any unauthorised access to our servers and/or any personal or financial information stored within it; (6) any omissions/errors in any content and materials or for any loss or damage incurred as a result of the use of content made available via the site.",
      txt3: "In no event will we or our directors, employees, or agents be liable to you or any third-party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.",
      txt4: "Any unsolicited emails and/or information sent to Litvin Marzorati Legales will not be considered confidential on their receipt, and may be disclosed to others in compliance with our Privacy Policy. We are not obligated to send a response, and an attorney-client relationship will not be formed until Litvin Marzorati Legales has explicitly said as such. If you are not already our client, we advise you to not include any confidential information in any message you may send.",
    }
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

export default PrivacyPolicy
