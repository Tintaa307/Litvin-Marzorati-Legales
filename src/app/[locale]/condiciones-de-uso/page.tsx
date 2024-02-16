import Nav from "@/components/Nav";
import Heading from "@/components/text/Heading";
import { useLocale, useTranslations } from "next-intl";

const PrivacyPolicy = () => {
    const tNav = useTranslations('Nav');
    const t = useTranslations("Terms");
    const locale = useLocale();
    let txt = {
            txt1: "ACUERDO A LOS TÉRMINOS",
            txt2: "Estos Términos de uso constituyen un acuerdo legalmente vinculante hecho entre usted, ya sea personalmente o en nombre de una entidad, y Litvin Marzorati Legales, en relación con su acceso y uso del sitio web https://www.lmlegales.com.ar/, así como cualquier otro formulario de medios o canal relacionado, vinculado o conectado a los mismos. Usted acepta que al acceder al Sitio, ha leído, entendido y aceptado estar obligado por todos estos Términos de uso. Si no está de acuerdo con todos estos Términos de uso, entonces se le prohíbe usar el Sitio y debe interrumpir el uso inmediatamente.",
            txt3: "Los términos y condiciones suplementarios o documentos que se pueden publicar en el Sitio de vez en cuando se incorporan expresamente en el presente documento por referencia. Nos reservamos el derecho de realizar cambios o modificaciones en estos Términos en cualquier momento por cualquier motivo. Es su responsabilidad revisar periódicamente estos Términos de uso para mantenerse informado de las actualizaciones. Usted estará sujeto a los cambios en cualquier Términos de uso revisado del sitio después de la fecha en que se publiquen.",
            txt4: "DERECHOS DE PROPIEDAD INTELECTUAL",
            txt5: "A menos que se indique lo contrario, el sitio es nuestra propiedad y todo el contenido, marcas comerciales, marcas de servicio y logotipos (marcas) son propiedad o están controlados por nosotros o con licencia para nosotros, y están protegidos por leyes de derechos de autor y marcas comerciales y varias otras leyes internacionales de derechos de autor y convenciones internacionales. El contenido y las marcas se proporcionan en el sitio únicamente para su información y uso personal. A excepción de lo expresamente previsto en estos Términos de uso, ninguna parte del sitio y ningún contenido o marcas pueden ser copiados, reproducidos, agregados, reeditados, cargados, publicados, mostrados, codificados, traducidos, distribuidos, vendidos, licenciados o explotados de otro modo para cualquier propósito comercial sin permiso previo por escrito.",
            txt6: "Siempre que sea elegible para usar el sitio, se le concede una licencia limitada para acceder y utilizar el sitio e descargar o imprimir una copia de cualquier parte del contenido al que haya obtenido acceso únicamente para uso personal y no comercial.",
            txt7: "REPRESENTACIONES DE USUARIO",
            txt8: "Al utilizar el sitio, usted declara y garantiza que:(1) tiene la capacidad legal y acepta cumplir con estos Términos de uso; (2) usted no accederá al Sitio a través de medios automatizados o no humanos, ya sea a través de un bot o de otra manera; (3) no utilizará el sitio para ningún propósito ilegal o no autorizado; y (5) su uso del sitio no violará ninguna ley o regulación.",
            txt9: "ACTIVIDADES PROHIBIDAS",
            txt10: "Usted no puede acceder ni utilizar el Sitio para ningún otro propósito que no sea aquel para el que el sitio ha sido puesto a disposición. El sitio no puede ser utilizado en relación con ningún esfuerzo comercial, excepto aquellos que están específicamente respaldados / aprobados por nosotros.",
            txt11: "Recuperar datos u otro contenido del sitio para compilar, incluso indirectamente, una recopilación, compilación, base de datos o directorio sin nuestro permiso expreso.",
            txt12: "Engañarnos, defraudar o engañarnos, especialmente en cualquier intento de aprender información sensible.",
            txt13: "Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o copia de cualquier contenido o aplican limitaciones del uso del sitio y su contenido.",
            txt14: "Menosprecio, empañar o dañar, en nuestra opinión, a nosotros y/o al sitio.",
            txt15: "Utilice cualquier información obtenida del sitio con el fin de acosar, abusar o dañar a otra persona.",
            txt16: "Haga un uso indebido de nuestros servicios de soporte o envíe informes falsos de abuso o mala conducta.",
            txt17: "Utilice el sitio de una manera incompatible con las leyes o regulaciones aplicables.",
            txt18: "Utilice el sitio para anunciar u ofrecer vender bienes y servicios.",
            txt19: "Participar en el encuadre no autorizado de o enlazar con el sitio.",
            txt20: "Cargar o transmitir virus, que interfiere con el uso y disfrute ininterrumpido de cualquier parte del sitio o modifica, deteriora, interrumpe o interfiere con el uso, características, funciones, operación o mantenimiento del sitio.",
            txt21: "Participar en cualquier uso automatizado del sistema, o utilizar cualquier minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
            txt22: "Eliminar los derechos de autor u otro aviso de derechos de propiedad de cualquier contenido.",
            txt23: "Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarle cualquier parte del sitio.",
            txt24: "Intente omitir cualquier medida del sitio diseñada para impedir o restringir el acceso al sitio o a cualquier parte del mismo.",
            txt25: "Copie o adapte el software del sitio.",
            txt26: "Descifrar, descompilar, desmontar o realizar ingeniería inversa de cualquiera de los programas informáticos que comprenden o, de cualquier manera, formar parte del sitio.",
            txt27: "Utilice el sitio como parte de cualquier esfuerzo para competir con nosotros o",
            txt28: "",
            txt29: "",
            txt30: "",
            txt31: "",
            txt32: "",
            txt33: "",
            txt34: "",
            txt35: "",
        };

    if(locale === 'en') {
        txt = {
            txt1: "AGREEMENT TO TERMS",
            txt2: "These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Litvin Marzorati Legales, concerning your access to and use of the website https://www.lmlegales.com.ar/ as well as any other media form or channel related, linked, or otherwise connected thereto. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are prohibited from using the Site and must discontinue use immediately.",
            txt3: "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right to make changes or modifications to these Terms at any time for any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to the changes in any revised Terms of Use of the site after the date they are posted.",
            txt4: "The information provided on the site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement. Those who choose to access the site from other locations do so on their own initiative and are solely responsible for compliance with local laws.",
            txt5: "INTELLECTUAL PROPERTY RIGHTS",
            txt6: "Unless otherwise indicated, the site is our proprietary property and all content, trademarks, service marks and logos (marks) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other international copyright laws and international conventions. The content and the marks are provided on the site for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the site and no content or marks may be copied, reproduced, aggregated, republished, uploaded, posted, displayed, encoded, translated, distributed, sold, licensed or otherwise exploited for any commercial purpose without prior written permission.",
            txt7: "Provided that you are eligible to use the site, you are granted a limited license to access and use the site and to download or print a copy of any portion of the content to which you have gained access solely for personal, non-commercial use.",
            txt8: "USER REPRESENTATIONS",
            txt9: "By using the site, you represent and warrant that:(1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you will not access the Site through automated or non-human means, whether through a bot or otherwise; (3) you will not use the site for any illegal or unauthorized purpose; and (5) your use of the site will not violate any law or regulation.",
            txt10: "PROHIBITED ACTIVITIES",
            txt11: "You may not access or use the Site for any purpose other than that for which the site has been made available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed/approved by us.",
            txt12: "As user of the site, you agree not to:",
            txt13: "Retrieve data or other content from the site to compile, even indirectly, a collection, compilation, database or directory without our express permission.",
            txt14: "Trick, defraud, or mislead us, especially in any attempt to learn sensitive information.",
            txt15: "Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any content or enforce limitations of the use of the site and its content.",
            txt16: "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the site.",
            txt17: "Use any information obtained from the site in order to harass, abuse, or harm another person.",
            txt18: "Make improper use of our support services or submit false reports of abuse or misconduct.",
            txt19: "Use the site in a manner inconsistent with any applicable laws or regulations.",
            txt20: "Use the site to advertise or offer to sell goods and services.",
            txt21: "Engage in unauthorized framing of or linking to the site.",
            txt22: "Upload or transmit viruses, that interferes with any party’s uninterrupted use and enjoyment of the site or modifies, impairs, disrupts or interferes with the use, features, functions, operation or maintenance of the site.",
            txt23: "Engage in any automated use of the system, or using any data mining, robots, or similar data gathering and extraction tools.",
            txt24: "Delete the copyright or other proprietary rights notice from any content.",
            txt25: "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the site to you.",
            txt26: "Attempt to bypass any measures of the site designed to prevent or restrict access to the site or any portion of it.",
            txt27: "Copy or adapt the site’s software.",
            txt28: "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the site.",
            txt29: "Use the site as part of any effort to compete with us or otherwise use the site and/or its content for any revenue-generating endeavor or commercial enterprise.",
            txt30: "SITE MANAGEMENT",
            txt31: "We reserve the right, but not the obligation, to: (1) continually monitor the site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your contributions or any portion thereof; (4) in our sole discretion and without limitation, notice or liability, to remove from the site or otherwise disable all files and content that are in any way burdensome to our systems; and (5) otherwise manage the site in a manner designed to protect our rights and property and to facilitate the proper functioning of the site.",
            txt32: "CONTRIBUTIONS AND SUBMISSIONS",
            txt33: "The site does not offer users to submit or post content.",
            txt34: "You and the site agree that we may access, store, process, and use any information and personal data that is provided to us following the terms of the Privacy Policy and your choices. By submitting suggestions or other feedback regarding the site, you agree that we can use and share such feedback for any purpose without compensation to you.",
            txt35: "You acknowledge and agree that any questions, comments, suggestions, ideas, feedback regarding the site or its services provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these submissions for any lawful purpose, commercial or otherwise, without acknowledgement or compensation to you. You hereby waive all moral rights"        
    }

    return (
        <>
            <Nav locale={locale} tInicio={tNav("inicio")} tAbout={tNav("sobreNos")} tContacto={tNav("contacto")} tServicios={tNav("servicios")}></Nav>
            <div className="w-full flex flex-col items-center justify-center pt-44 pb-24 main-padding gap-6">
                <Heading title={t("title")} notCentered={true}></Heading>
                <div className="text-justify grid gap-4 text-sm">
                    <h3>{txt.txt1}</h3>
                    <p>{txt.txt2}</p>
                    <p>{txt.txt3}</p>
                    <p>{txt.txt4}</p>
                    <h3>{txt.txt5}</h3>
                    <p>{txt.txt6}</p>
                </div>
            </div>
        </>
        );
    };
}
export default PrivacyPolicy;