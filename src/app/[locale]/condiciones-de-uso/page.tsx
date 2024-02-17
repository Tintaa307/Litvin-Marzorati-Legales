import Nav from "@/components/Nav";
import Heading from "@/components/text/Heading";
import { useLocale, useTranslations } from "next-intl";

export default function Condiciones() {

    const tNav = useTranslations('Nav');
    const t = useTranslations("Terms");
    const locale = useLocale();
    let txt =
    {
      "txt1": "ACUERDO A LOS TÉRMINOS",
      "txt2": "Estos Términos de uso constituyen un acuerdo legalmente vinculante hecho entre usted, ya sea personalmente o en nombre de una entidad, y Litvin Marzorati Legales,en relación con su acceso y uso del sitio web https://www.lmlegales.com.ar/, así como cualquier otro formulario de medios o canal relacionado, vinculado o conectado a los mismos. Usted acepta que al acceder al Sitio, ha leído, entendido y aceptado estar obligado por todos estos Términos de uso. Si no está de acuerdo con todos estos Términos de uso, entonces se le prohíbe usar el Sitio y debe interrumpir el uso inmediatamente.",
      "txt3": "Los términos y condiciones suplementarios o documentos que se pueden publicar en el Sitio de vez en cuando se incorporan expresamente en el presente documento por referencia. Nos reservamos el derecho de realizar cambios o modificaciones en estos Términos en cualquier momento por cualquier motivo. Es su responsabilidad revisar periódicamente estos Términos de uso para mantenerse informado de las actualizaciones. Usted estará sujeto a los cambios en cualquier Términos de uso revisado del sitio después de la fecha en que se publiquen.",
      "txt4": "La información proporcionada en el sitio no está destinada a su distribución o uso por ninguna persona o entidad en ninguna jurisdicción o país donde dicha distribución o uso sería contrario a la ley o regulación o que nos sometería a cualquier requisito de registro. Aquellos que eligen acceder al sitio desde otros lugares lo hacen por iniciativa propia y son los únicos responsables del cumplimiento de las leyes locales.",
      "txt5": "DERECHOS DE PROPIEDAD INTELECTUAL",
      "txt6": "A menos que se indique lo contrario, el sitio es nuestra propiedad y todo el contenido, marcas comerciales, marcas de servicio y logotipos (marcas) son propiedad o están controlados por nosotros o con licencia para nosotros, y están protegidos por leyes de derechos de autor y marcas comerciales y varias otras leyes internacionales de derechos de autor y convenciones internacionales. El contenido y las marcas se proporcionan en el sitio únicamente para su información y uso personal. A excepción de lo expresamente previsto en estos Términos de uso, ninguna parte del sitio y ningún contenido o marcas pueden ser copiados, reproducidos, agregados, reeditados, cargados, publicados, mostrados, codificados, traducidos, distribuidos, vendidos, licenciados o explotados de otro modo para cualquier propósito comercial sin permiso previo por escrito.",
      "txt7": "Siempre que sea elegible para usar el sitio, se le concede una licencia limitada para acceder y utilizar el sitio e descargar o imprimir una copia de cualquier parte del contenido al que haya obtenido acceso únicamente para uso personal y no comercial.",
      "txt8": "REPRESENTACIONES DE USUARIO",
      "txt9": "Al utilizar el sitio, usted declara y garantiza que:(1) tiene la capacidad legal y acepta cumplir con estos Términos de uso; (2) usted no accederá al Sitio a través de medios automatizados o no humanos, ya sea a través de un bot o de otra manera; (3) no utilizará el sitio para ningún propósito ilegal o no autorizado; y (5) su uso del sitio no violará ninguna ley o regulación.",
      "txt10": "ACTIVIDADES PROHIBIDAS",
      "txt11": "Usted no puede acceder ni utilizar el Sitio para ningún otro propósito que no sea aquel para el que el sitio ha sido puesto a disposición. El sitio no puede ser utilizado en relación con ningún esfuerzo comercial, excepto aquellos que están específicamente respaldados / aprobados por nosotros.",
      "txt12": "Como usuario del sitio, usted acepta no:",
      "txt13": "Recuperar datos u otro contenido del sitio para compilar, incluso indirectamente, una recopilación, compilación, base de datos o directorio sin nuestro permiso expreso.",
      "txt14": "Engañarnos, defraudar o engañarnos, especialmente en cualquier intento de aprender información sensible.",
      "txt15": "Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o copia de cualquier contenido o aplican limitaciones del uso del sitio y su contenido.",
      "txt16": "Menosprecio, empañar o dañar, en nuestra opinión, a nosotros y/o al sitio.",
      "txt17": "Utilice cualquier información obtenida del sitio con el fin de acosar, abusar o dañar a otra persona.",
      "txt18": "Haga un uso indebido de nuestros servicios de soporte o envíe informes falsos de abuso o mala conducta.",
      "txt19": "Utilice el sitio de una manera incompatible con las leyes o regulaciones aplicables.",
      "txt20": "Utilice el sitio para anunciar u ofrecer vender bienes y servicios.",
      "txt21": "Participar en el encuadre no autorizado de o enlazar con el sitio.",
      "txt22": "Cargar o transmitir virus, que interfiere con el uso y disfrute ininterrumpido de cualquier parte del sitio o modifica, deteriora, interrumpe o interfiere con el uso, características, funciones, operación o mantenimiento del sitio.",
      "txt23": "Participar en cualquier uso automatizado del sistema, o utilizar cualquier minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
      "txt24": "Eliminar los derechos de autor u otro aviso de derechos de propiedad de cualquier contenido.",
      "txt25": "Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarle cualquier parte del sitio.",
      "txt26": "Intente omitir cualquier medida del sitio diseñada para impedir o restringir el acceso al sitio o a cualquier parte del mismo.",
      "txt27": "Copie o adapte el software del sitio.",
      "txt28": "Descifrar, descompilar, desmontar o realizar ingeniería inversa de cualquiera de los programas informáticos que comprenden o, de cualquier manera, formar parte del sitio.",
      "txt29": "Utilice el sitio como parte de cualquier esfuerzo para competir con nosotros o utilizar el sitio y/o su contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
      "txt30": "GESTIÓN DEL SITIO",
      "txt31": "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear continuamente el sitio por violaciones de estos Términos de uso; (2) emprender las acciones legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos de uso; (3) a nuestra entera discreción y, sin limitación, rechazar, restringir el acceso, limitar la disponibilidad o deshabilitar cualquiera de sus contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, eliminar del sitio o deshabilitar de otro modo todos los archivos y contenidos que sean de alguna manera gravosos para nuestros sistemas; y (5) gestionar el sitio de una manera diseñada para proteger nuestros derechos y propiedades y facilitar el correcto funcionamiento del sitio.",
      "txt32": "CONTRIBUCIONES Y PRESENTACIONES",
      "txt33": "El sitio no ofrece a los usuarios enviar o publicar contenido.",
      "txt34": "Usted y el sitio aceptan que podemos acceder, almacenar, procesar y utilizar cualquier información y datos personales que se nos proporcionen siguiendo los términos de la Política de privacidad y sus opciones. Al enviar sugerencias u otros comentarios con respecto al sitio, usted acepta que podemos usar y compartir dichos comentarios para cualquier propósito sin compensación para usted.",
      "txt35": "Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, retroalimentación con respecto al sitio o sus servicios proporcionados por usted a nosotros no son confidenciales y se convertirán en nuestra única propiedad. Poseeremos derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y difusión sin restricciones de estos envíos para cualquier propósito legal, comercial o de otro tipo, sin reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales a dichos envíos y por la presente garantiza que dichos envíos son originales con usted o que tiene derecho a enviar dichos envíos. Usted acepta que no habrá recurso contra nosotros por cualquier supuesta infracción o apropiación indebida de cualquier derecho de propiedad en sus envíos.",
      "txt36": "PLAZO Y TERMINACIÓN",
      "txt37": "Estos Términos de uso permanecerán en pleno vigor y efecto mientras utiliza el sitio. Sin limitar ninguna otra disposición de estos Términos de uso, nos reservamos el derecho de, a nuestra entera discreción y sin previo aviso o responsabilidad, denegar el acceso y uso del sitio (incluido el bloqueo de una dirección IP), a cualquier persona por cualquier motivo o sin motivo alguno. Podemos terminar su uso o participación en el sitio, sin previo aviso, a nuestra entera discreción.",
      "txt38": "MODIFICACIONES E INTERRUPCIONES",
      "txt39": "Nos reservamos el derecho de cambiar, modificar o eliminar el contenido del Sitio en cualquier momento por cualquier motivo a nuestra entera discreción sin previo aviso. Sin embargo, no tenemos ninguna obligación de actualizar ninguna información en nuestro Sitio. También nos reservamos el derecho de modificar o interrumpir todo o parte del sitio sin previo aviso en cualquier momento. No seremos responsables ante usted ni ante terceros por ninguna modificación, cambio, suspensión o interrupción del sitio.",
      "txt40": "No podemos garantizar que el sitio estará disponible en todo momento. Podemos experimentar hardware, software u otros problemas o necesitados realizar mantenimiento relacionado con el sitio, lo que resulta en interrupciones, retrasos o errores. Nos reservamos el derecho de cambiar, revisar, actualizar, suspender, interrumpir o modificar el sitio en cualquier momento o por cualquier motivo sin previo aviso. Usted acepta que no tenemos ninguna responsabilidad por cualquier pérdida, daño o inconveniente causado por su incapacidad para acceder al sitio durante cualquiera de estas interrupciones. Nada en estos Términos de uso se interpretará para obligarnos a mantener y apoyar el sitio o a proporcionar cualquier corrección, actualización o lanzamiento en conexión con el mismo.",
      "txt41": "LEY DE GOBIERNO",
      "txt42": "Estos Términos se regirán y definirán siguiendo las leyes de la Argentina. Litvin Marzorati Legal y usted mismo consienten irrevocablemente que los tribunales de Argentina tendrán jurisdicción exclusiva para resolver cualquier disputa que pueda surgir en relación con estos términos.",
      "txt43": "RESOLUCIÓN DE DISPUTAS",
      "txt44": "Usted acepta presentar irrevocablemente todas las disputas relacionadas con los Términos de la relación establecida por este Acuerdo a la jurisdicción de los tribunales argentinos. Litvin Marzorati Legal también mantendrá el derecho a iniciar acciones sobre el fondo del asunto en los tribunales del país donde resida o, si estos Términos se introducen en el curso de su oficio o profesión, el estado de su principal lugar de actividad.",
      "txt45": "Correcciones",
      "txt46": "Puede haber información en el sitio que contenga errores, inexactitudes u omisiones, incluidos precios, disponibilidad, descripción u otra información. Nos reservamos el derecho de corregir cualquier cosa como esta y de cambiar o actualizar la información en el sitio en cualquier momento, sin previo aviso.",
      "txt47": "DATOS DEL USUARIO Mantendremos ciertos datos que usted transmita al sitio con el fin de gestionar el rendimiento del sitio, así como los datos relacionados con su uso del sitio. Aunque realizamos copias de seguridad rutinarias regulares de datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado utilizando el sitio. Usted acepta que no tendremos ninguna responsabilidad ante usted por cualquier pérdida o corrupción de dichos datos, y por la presente renuncia a cualquier derecho de acción contra nosotros derivado de dicha pérdida o corrupción de dichos datos.",
      "txt48": "TRANSACCIONES Y FIRMAS",
      "txt49": "Visitar el sitio, enviarnos correos electrónicos y completar formularios en línea constituyen comunicaciones electrónicas. Usted acepta recibir comunicaciones electrónicas, y acepta que todas las comunicaciones que le proporcionamos electrónicamente, por correo electrónico o el sitio, satisfacen cualquier requisito legal de que dicha comunicación sea por escrito. Por la presente, usted acepta el uso de firmas electrónicas, contratos, pedidos y otros registros, así como la entrega electrónica de avisos, políticas y registros de transacciones iniciadas o completadas por nosotros o a través del sitio. Por la presente, usted renuncia a cualquier derecho o requisito en cualquier jurisdicción que requiera una firma original o entrega o retención de registros no electrónicos, o a pagos o concesión de créditos por cualquier medio que no sea electrónico.",
      "txt50": "Misceláneos",
      "txt51": "Estos Términos de uso y cualquier política o reglas de operación publicadas por nosotros en el Sitio o con respecto al sitio constituyen el acuerdo completo y la comprensión entre usted y nosotros. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos de uso no funcionará como una renuncia a dicho derecho o disposición. Estos Términos de uso operan en la máxima medida permitida por la ley. Podemos asignar hormigas o todos nuestros derechos y obligaciones a los demás en cualquier momento. No seremos responsables de ninguna pérdida, daño, retraso o falta de acción causada por nada fuera de nuestro control razonable. Si se determina que alguna disposición o parte de una disposición de estos Términos de uso es ilegal, nula o inaplicable, esa disposición o parte se considera separable de estos Términos de uso y no afecta la validez y aplicabilidad de las disposiciones restantes. No existe ninguna relación de ningún tipo creada entre usted y nosotros como resultado de estos Términos de uso o uso del Sitio, o con cualquier contacto que tenga como objetivo hacer con nosotros. Usted acepta que estos Términos de uso no se interpretarán en nuestra contra en virtud de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basándose en la forma electrónica de estos Términos de uso y la falta de firma por parte de las partes en este caso para ejecutar estos Términos de uso.",
      "txt52": "INFORMACIÓN DE CONTACTO",
      "txt53": "Si hay alguna pregunta/consulta con respecto a esta Política de privacidad o si necesita más información, póngase en contacto con nosotros:",
      "txt54": "Por correo electrónico a info@lmlegales.com.ar",
      "txt55": "En WhatsApp al +54 9 11 6360-6526",
      "txt56": "En persona en nuestra oficina principal ubicada en Libertador 5990, Piso 3, Oficina 308, Ciudad de Buenos Aires."
    }

    if(locale === 'en') {
        txt = 
        {
            "txt1": "AGREEMENT TO TERMS",
            "txt2": "These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Litvin Marzorati Legales, concerning your access and use of the website https://www.lmlegales.com.ar/, as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.",
            "txt3": "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.",
            "txt4": "The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Those who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws.",
            "txt5": "INTELLECTUAL PROPERTY RIGHTS",
            "txt6": "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the \"Content\") and the trademarks, service marks, and logos contained therein (the \"Marks\") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and international conventions. The Content and the Marks are provided on the Site \"AS IS\" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.",
            "txt7": "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.",
            "txt8": "USER REPRESENTATIONS",
            "txt9": "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.",
            "txt10": "PROHIBITED ACTIVITIES",
            "txt11": "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
            "txt12": "As a user of the Site, you agree not to:",
            "txt13": "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
            "txt14": "Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
            "txt15": "Engage in unauthorized framing of or linking to the Site.",
            "txt16": "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
            "txt17": "Make improper use of our support services or submit false reports of abuse or misconduct.",
            "txt18": "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
            "txt19": "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.",
            "txt20": "Attempt to impersonate another user or person or use the username of another user.",
            "txt21": "Sell or otherwise transfer your profile.",
            "txt22": "Use any information obtained from the Site in order to harass, abuse, or harm another person.",
            "txt23": "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.",
            "txt24": "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.",
            "txt25": "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.",
            "txt26": "Delete the copyright or other proprietary rights notice from any Content.",
            "txt27": "Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
            "txt28": "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.",
            "txt29": "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (\"gifs\"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as \"spyware\" or \"passive collection mechanisms\" or \"pcms\").",
            "txt30": "SITE MANAGEMENT",
            "txt31": "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",
            "txt32": "PRIVACY POLICY",
            "txt33": "We care about data privacy and security. Please review our Privacy Policy: www.lmlegales.com.ar/privacy-policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in Argentina. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Argentina, then through your continued use of the Site, you are transferring your data to Argentina, and you agree to have your data transferred to and processed in Argentina.",
            "txt34": "TERM AND TERMINATION",
            "txt35": "These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.",
            "txt36": "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.",
            "txt37": "MODIFICATIONS AND INTERRUPTIONS",
            "txt38": "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.",
            "txt39": "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.",
            "txt40": "GOVERNING LAW",
            "txt41": "These Terms shall be governed by and defined following the laws of Argentina. Litvin Marzorati Legal and yourself irrevocably consent that the courts of Argentina shall have exclusive jurisdiction to resolve any dispute which may arise in relation to these terms.",
            "txt42": "DISPUTE RESOLUTION",
            "txt43": "You agree to present any disputes arising from these Terms of Use or use of the Site, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to arbitration, conducted in Argentina.",
            "txt44": "CORRECTIONS",
            "txt45": "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.",
            "txt47": "USER DATA. We will maintain certain data that you transmit to the site for the purpose of managing the performance of the site, as well as data relating to your use of the site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",
            "txt48": "TRANSACTIONS AND SIGNATURES",
            "txt49": "Visiting the site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and agree that all communications we provide to you electronically, via email or the site, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies and records of transactions initiated or completed by us or via the site. You hereby waive any rights or requirements in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or granting of credits by any means other than electronic.",
            "txt50": "MISCELLANEOUS",
            "txt51": "These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign ant or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay or failure to act caused by anything beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no relationship of any kind created between you and us as a result of these Terms of Use or use of the Site, or with any contact you aim to make with us. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.",
            "txt52": "CONTACT INFORMATION",
            "txt53": "If you have any questions or comments about these Terms of Use, the Privacy Policy, or the Site, please contact us:",
            "txt54": "By email: info@lmlegales.com.ar",
            "txt55": "By WhatsApp: +54 9 11 6360-6526",
            "txt56": "In person: at our main office located at Libertador 5990, Floor 3, Office 308, Buenos Aires City.",
            "txt46": "",
        }       
    }
  
    return (
      <div>
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
                <h3>{txt.txt7}</h3>
                <p>{txt.txt8}</p>
                <h3>{txt.txt9}</h3>
                <p>{txt.txt10}</p>
                <p>{txt.txt11}</p>
                <p>{txt.txt12}</p>
                <ul className="list-disc ml-6">
                    <li>{txt.txt13}</li>
                    <li>{txt.txt14}</li>
                    <li>{txt.txt15}</li>
                    <li>{txt.txt16}</li>
                    <li>{txt.txt17}</li>
                    <li>{txt.txt18}</li>
                    <li>{txt.txt19}</li>
                    <li>{txt.txt20}</li>
                    <li>{txt.txt21}</li>
                    <li>{txt.txt22}</li>
                    <li>{txt.txt23}</li>
                    <li>{txt.txt24}</li>
                    <li>{txt.txt25}</li>
                    <li>{txt.txt26}</li>
                    <li>{txt.txt27}</li>
                    <li>{txt.txt28}</li>
                    <li>{txt.txt29}</li>
                </ul>
                <p>{txt.txt30}</p>
                <p>{txt.txt31}</p>
                <p>{txt.txt32}</p>
                <p>{txt.txt33}</p>
                <p>{txt.txt34}</p>
                <p>{txt.txt35}</p>
                <p>{txt.txt36}</p>
                <p>{txt.txt37}</p>
                <p>{txt.txt38}</p>
                <p>{txt.txt39}</p>
                <p>{txt.txt40}</p>
                <p>{txt.txt41}</p>
                <p>{txt.txt42}</p>
                <p>{txt.txt43}</p>
                <p>{txt.txt44}</p>
                <p>{txt.txt45}</p>
                <p>{txt.txt46}</p>
                <p>{txt.txt47}</p>
                <p>{txt.txt48}</p>
                <p>{txt.txt49}</p>
                <p>{txt.txt50}</p>
                <p>{txt.txt51}</p>
                <p>{txt.txt52}</p>
                <p>{txt.txt53}</p>
                <p>{txt.txt54}</p>
                <p>{txt.txt55}</p>
                <p>{txt.txt56}</p>
            </div>
        </div>
      </div>
    )
  }
