import Link from "next/link";
import Image from "next/image";

import insta from '../../../public/socials/insta.svg';
import linkedin from '../../../public/socials/linkedin.svg';
import logo from '../../../public/logo.svg';

const Footer = () => {
    return (
        <div className="bg-footer text-white md:text-xl text-base flex flex-col gap-20 main-padding py-28">
            <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between items-start">
                <div className="flex flex-col gap-6">
                    <h2 className="font-dmSerif md:text-[2rem] text-[1.75rem]">Servicios</h2>
                    <div className="flex flex-col gap-3">
                        <Link href={'/servicios/propiedad-intelectual'}>Asesoramiento en propiedad intelectual</Link>
                        <Link href={'/servicios/asesoramiento-general'}>Asesoramiento General</Link>
                        <Link href={'/servicios/internet'}>Asesoramiento en Internet</Link>
                        <Link href={'/servicios/emprendedores'}>Emprendedores y nuevos proyectos</Link>
                        <Link href={'/servicios/metaverso-e-ia'}>Asesoramiento legal en el metaverso e IA</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="font-dmSerif md:text-[2rem] text-[1.75rem]">Litvin Marzorati Legales</h2>
                    <div className="flex flex-col gap-3">
                        <Link href={'/'}>Inicio</Link>
                        <Link href={'/'}>Sobre nosotros</Link>
                        <Link href={'/'}>Contacto</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="font-dmSerif md:text-[2rem] text-[1.75rem]">Seguinos</h2>
                    <div className="flex gap-3 invert">
                        <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                            <Image src={insta} alt="instagram link"></Image>
                        </Link>
                        <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
                            <Image src={linkedin} alt="linkedin link"></Image>
                        </Link>
                    </div>
                </div>
            </div>
            <span className="w-full h-[1px] bg-[#868686]"></span>
            <div className="flex md:flex-row flex-col md:gap-0 gap-16 md:items-center justify-between">
                <Image src={logo} alt="Litvin Marzorati Legales logo" width={224} className="invert"></Image>
                <div className="flex flex-col gap-3 text-[1rem]">
                    <h3>Tel: +54 11 4782-9952</h3>
                    <h3>Mail: info@lmlegales.com.ar</h3>
                    <h3>Ubic: -----</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;