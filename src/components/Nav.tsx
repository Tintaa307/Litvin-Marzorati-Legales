'use client';
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo.svg';
import Insta from '../../public/socials/insta.svg';
import Linked from '../../public/socials/linkedin.svg';
import useScrollPosition from "@/hooks/useScrollPosition";

const Nav = () => {   
    const scrollPosition = useScrollPosition()

    return (
        <div className={`w-screen h-24 fixed top-0 z-50 main-padding flex items-center justify-between duration-200 ${scrollPosition > 20 ? 'bg-background' : "bg-transparent"}`}>
            <Link href={'/'}>
                <Image src={Logo} alt="Logo"></Image>
            </Link>
            <div className="md:flex hidden items-center gap-6">
                <Link href={'/'}>
                    <h3 className="text-base font-medium">Inicio</h3>
                </Link>
                <Link href={'/'}>
                    <h3 className="text-base font-medium whitespace-nowrap">Sobre nosotros</h3>
                </Link>
                <Link href={'/'}>
                    <h3 className="text-base font-medium">Servicios</h3>
                </Link>
                <Link href={'/'}>
                    <h3 className={`text-base font-medium py-1 px-3 rounded-xl duration-200 ${scrollPosition > 20 ? 'bg-accent-orange' : 'bg-transparent'}`}>Contacto</h3>
                </Link>
            </div>
            <div className="md:flex hidden items-center justify-center gap-2 w-40">
                <h3 className="text-base font-medium">ES</h3>
                <span className="w-[1px] h-7 bg-[#0000004D]"></span>
                <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
                    <Image src={Insta} alt="Instagram socials"></Image>
                </Link>
                <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                    <Image src={Linked} alt="LinkedIn socials"></Image>
                </Link>
            </div>
        </div>
    )
}

export default Nav;