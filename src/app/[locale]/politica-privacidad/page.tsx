import Nav from "@/components/Nav";
import Heading from "@/components/text/Heading";
import { useLocale, useTranslations } from "next-intl";

const PrivacyPolicy = () => {
    const tNav = useTranslations('Nav');
    const t = useTranslations("Privacidad");
    const locale = useLocale();
    let txt = {
        txt1: "En Litvin  Marzorati  Legales, una de nuestras principales prioridades es la privacidad de nuestrosvisitantes. Este documento de política de privacidad contiene tipos de información recopilada y registrada por  Litvin  Marzorati  Legales y cómo la usamos. Esta Política de Privacidad tiene por objeto cumplir con los términos establecidos en el Reglamento General de Protección de Datos (RGPD).",
        txt2: "RECOPILACIÓN DE DATOS",
        txt3: "Datos personales se refiere a la información que lo identifica como individuo, que puede incluir información personal y profesional. Litvin Marzorati  Legales base legal para recopilar y utilizar la información personal descrita en esta Política de Privacidad depende de la Información Personal que recopilamos y del contexto específico a través del cual se ha recopilado la información:",
        txt4: "El sitio web de la Firma y todos los formularios disponibles en el sitio web;",
        txt5: "Plataformas de redes sociales, tanto las de la Firma como las de Terceros;",
        txt6: "A través de correos electrónicos enviados o recibidos por la Firma;",
        txt7: "Solicitudes enviadas a la Empresa;",
        txt8: "Información compartida a través de patrocinadores o colegas;",
        txt9: "Clientes o empresas a los que la Firma sirve o ha servido;",
        txt10: "Bases de datos públicas.",
        txt11: "USO DE DATOS",
        txt12: "La Firma puede utilizar datos personales para cualquiera de los siguientes:",
        txt13: "Mejorar y crecer o modificar los servicios que actualmente ofrece la Firma.",
        txt14: "Identificar los intereses del consumidor para entender qué servicios son de mayor interés.",
        txt15: "Para enviar noticias relacionadas con nuestros servicios y actividad.",
        txt16: "En el caso de una solicitud de empleo, para llevar a cabo las acciones necesarias para seleccionar y reclutar empleados.",
        txt17: "Cumplimiento de las regulaciones.",
        txt18: "Litvin Marzorati Legales conservará su información personal solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad. Conservaremos y usaremos su información en la medida necesaria para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestras políticas. La Firma garantiza la protección de cualquier Dato Personal y adoptará cualquier medida pertinente para evitar el intercambio o acceso no autorizados de estos datos. Si es residente del Espacio Económico Europeo (EEE), tiene ciertos derechos de protección de datos. Si desea que se le informe qué información personal tenemos sobre usted y si desea que se elimine de nuestros sistemas, póngase en contacto con nosotros.",
        txt19: "SUS DERECHOS",
        txt20: "En determinadas circunstancias, tiene los siguientes derechos de protección de datos:",
        txt21: "El derecho a acceder, actualizar o eliminar la información que tenemos sobre usted",
        txt22: "El derecho de rectificación",
        txt23: "El derecho a oponerse",
        txt24: "El derecho de restricción",
        txt25: "El derecho a la portabilidad de los datos",
        txt26: "El derecho a retirar el consentimiento",
        txt27: "SOLO EN LÍNEA",
        txt28: "Nuestra Política de Privacidad se aplica únicamente a nuestras actividades en línea y es válida para los visitantes de nuestro sitio web con respecto a la información que compartieron y/o recopilan en Litvin  Marzorati  Legales. Esta política no es aplicable a ninguna información recopilada sin conexión o a través de canales distintos de este sitio web. Consentimiento. Al utilizar nuestro sitio web, usted acepta nuestra Política de Privacidad y acepta sus términos.",
        txt29: "INFORMACIÓN DE CONTACTO",
        txt30: "Si hay alguna pregunta/consulta con respecto a esta Política de privacidad o si necesita más información, póngase en contacto con nosotros:",
        txt31: "Por correo electrónico a info@lmlegales.com.ar",
        txt32: "En WhatsApp al +54 9 11 6360-6526",
        txt33: "En persona en nuestra oficina principal ubicada en Libertador  5990, Piso 3, Oficina 308, Ciudad de Buenos Aires.",
        txt34: "",
        txt35: "",
        txt36: "",
    };

    if(locale === 'en') {
        txt = {
            txt1: "At Litvin Marzorati Legales, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Litvin Marzorati Legales and how we use it. This Privacy Policy aims to comply with the terms set out in the General Data Protection Regulation (GDPR).",
            txt2: "COLLECTION OF DATA",
            txt3: "Personal Data refers to the information that identifies you as an individual, which can include both personal and professional information.",
            txt4: "Litvin Marzorati Legales legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context through which the information has been collected:",
            txt5: "The Firm’s website and all forms available on the website;",
            txt6: "Social network platforms, both that of the Firm and of Third-Parties;",
            txt7: "Through emails sent from or received by the Firm;",
            txt8: "Applications sent to the Firm;",
            txt9: "Information shared through sponsors or colleagues;",
            txt10: "Clients or businesses that the Firm serves or has served;",
            txt11: "Public databases.",
            txt12: "USE OF DATA",
            txt13: "The Firm may use Personal Data for any of the following:",
            txt14: "To improve and grow or modify the services currently offered by the Firm.",
            txt15: "To identify the interests of the consumer in order to understand which services are of the greatest interest.",
            txt16: "To send news related to our services and activity.",
            txt17: "In the event of a job application, to carry out the actions required for selecting and recruiting employees.",
            txt18: "Compliance with regulations.",
            txt19: "Litvin Marzorati Legales will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. The Firm guarantees the protection of any Personal Data and will adopt any relevant measures to avoid unauthorized sharing or access of this data. If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.",
            txt20: "YOUR RIGHTS",
            txt21: "In certain circumstances, you have the following data protection rights:",
            txt22: "The right to access, update or to delete the information we have on you",
            txt23: "The right of rectification",
            txt24: "The right to object",
            txt25: "The right of restriction",
            txt26: "The right to data portability",
            txt27: "The right to withdraw consent",
            txt28: "ONLINE ONLY",
            txt29: "Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Litvin Marzorati Legales. This policy is not applicable to any information collected offline or via channels other than this website.",
            txt30: "CONSENT",
            txt31: "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
            txt32: "CONTACT INFORMATION",
            txt33: "If there are any questions/queries in regards to this Privacy Policy or you require further information, please contact us:",
            txt34: "By email at info@lmlegales.com.ar",
            txt35: "On WhatsApp at +54 9 11 6360-6526",
            txt36: "In person at our main office located at Libertador 5990, 3rd Floor, Office 308, City of Buenos Aires."
        }
    }

    return (
        <>
            <Nav locale={locale} tInicio={tNav("inicio")} tAbout={tNav("sobreNos")} tContacto={tNav("contacto")} tServicios={tNav("servicios")}></Nav>
            <div className="w-full flex flex-col items-center justify-center pt-44 pb-24 main-padding gap-6">
                <Heading title={t("title")} notCentered={true}></Heading>
                <div className="text-justify grid gap-4 text-sm">
                    <p>{txt.txt1}</p>
                    <h3>{txt.txt2}</h3>
                    <p>{txt.txt3}</p>
                    <ul className="list-disc ml-6">
                        <li>{txt.txt4}</li>
                        <li>{txt.txt5}</li>
                        <li>{txt.txt6}</li>
                        <li>{txt.txt7}</li>
                        <li>{txt.txt8}</li>
                        <li>{txt.txt9}</li>
                        <li>{txt.txt10}</li>
                    </ul>
                    <h3>{txt.txt11}</h3>
                    <p>{txt.txt12}</p>
                    <ul className="list-disc ml-6">
                        <li>{txt.txt13}</li>
                        <li>{txt.txt14}</li>
                        <li>{txt.txt15}</li>
                        <li>{txt.txt16}</li>
                        <li>{txt.txt17}</li>
                    </ul>
                    <p>{txt.txt18}</p>
                    <h3>{txt.txt19}</h3>
                    <p>{txt.txt20}</p>
                    <ul className="list-disc ml-6">
                        <li>{txt.txt21}</li>
                        <li>{txt.txt22}</li>
                        <li>{txt.txt23}</li>
                        <li>{txt.txt24}</li>
                        <li>{txt.txt25}</li>
                        <li>{txt.txt26}</li>
                    </ul>
                    <h3>{txt.txt27}</h3>
                    <p>{txt.txt28}</p>
                    <h3>{txt.txt29}</h3>
                    <p>{txt.txt30}</p>
                    <p>{txt.txt31}</p>
                    <p>{txt.txt32}</p>
                    <p>{txt.txt33}</p>
                    {locale == 'en' && (
                        <>
                            <p>{txt.txt34}</p>
                            <p>{txt.txt35}</p>
                            <p>{txt.txt36}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;