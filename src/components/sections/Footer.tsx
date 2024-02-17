import Link from "next/link";
import Image from "next/image";

import insta from '../../../public/socials/insta.svg';
import linkedin from '../../../public/socials/linkedin.svg';
import facebook from '../../../public/socials/facebook.svg';

import logo from '../../../public/logo.svg';
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
    const locale = useLocale()
    
    return (
        <div className="bg-footer text-white md:text-xl text-base flex flex-col gap-20 main-padding py-28 pb-12">
            <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between items-start">
                <div className="flex flex-col gap-6">
                    <h2 className="text-[1.75rem] font-medium">{t("services")}</h2>
                    <div className="flex flex-col gap-3 text-sm">
                        <Link href={'/' + (locale || '') + '/servicios/propiedad-intelectual'}>{t("intelectual")}</Link>
                        <Link href={'/' + (locale || '') + '/servicios/asesoramiento-general'}>{t("general")}</Link>
                        <Link href={'/' + (locale || '') + '/servicios/internet'}>{t("internet")}</Link>
                        <Link href={'/' + (locale || '') + '/servicios/emprendedores'}>{t("projects")}</Link>
                        <Link href={'/' + (locale || '') + '/servicios/metaverso-e-ia'}>{t("meta")}</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-[1.75rem] font-medium">Litvin Marzorati Legales</h2>
                    <div className="flex flex-col gap-3 text-sm">
                        <Link href={'/' + (locale || '') + '/' + '#inicio'}>{t("inicio")}</Link>
                        <Link href={'/' + (locale || '') + '/about'}>{t("sobreNos")}</Link>
                        <Link href={'/' + (locale || '') + '/contacto'}>{t("contact")}</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-[1.75rem] font-medium">{t("newsletter")}</h2>
                    <div className="flex flex-col gap-4 text-sm">
                        <div className="w-full flex flex-col gap-2">
                            <h3 className="">{t('enterEmail')}</h3>
                            <input name="name" type="text" className="bg-transparent outline-none border-b border-white/30 text-sm"/>
                        </div>
                        <div className="flex gap-2 text-xs font-light text-white/70">
                            <input type="checkbox" />
                            <h3>{t("accept")}</h3>
                        </div>
                        <div className="w-full flex justify-start">
                            <button type="submit" className={`bg-accent-orange py-2 px-4 rounded-md w-20 text-black text-sm`}>{t("submit")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <span className="w-full h-[1px] bg-[#868686]"></span>
                <div className="flex gap-3 invert w-80 justify-center items-center opacity-70">
                    <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                        <Image src={insta} alt="instagram link"></Image>
                    </Link>
                    <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
                        <Image src={linkedin} alt="linkedin link"></Image>
                    </Link>
                    <Link href={'https://www.facebook.com/Lmlegales'} target="_blank">
                        <Image src={facebook} alt="facebook socials"></Image>
                    </Link>
                </div>
                <span className="w-full h-[1px] bg-[#868686]"></span>
            </div>
            <div className="flex flex-col gap-16">
                <div className="flex md:flex-row flex-col md:gap-0 gap-16 md:items-center justify-between">
                    <Image src={logo} alt="Litvin Marzorati Legales logo" width={224} className="invert"></Image>
                    <div className="flex flex-col gap-3 text-sm w-72">
                        <h3>Tel: +54 11 4782-9952</h3>
                        <h3>Mail: info@lmlegales.com.ar</h3>
                        <h3>Avenida del Libertador 5990, piso 3, Buenos Aires, Argentina</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center text-xs gap-2 text-white/50">
                    <Link href={'/' + (locale || '') + '/condiciones-de-uso'}>{t("condiciones")}</Link>
                    <h3>-</h3>
                    <Link href={'/' + (locale || '') + '/politica-privacidad'}>{t("privacy")}</Link>
                    <h3>-</h3>
                    <Link href={'/' + (locale || '') + '/descargo-de-responsabilidad'}>{t("disclaimer")}</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;