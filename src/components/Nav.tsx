import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo.svg';
import Insta from '../../public/socials/insta.svg';
import Linked from '../../public/socials/linkedin.svg';

const Nav = () => {
    return (
        <div className="w-screen h-24 fixed top-0 z-50 px-96 bg-transparent flex items-center justify-between">
            <Link href={'/'}>
                <Image src={Logo} alt="Logo"></Image>
            </Link>
            <div className="flex items-center gap-6">
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
                    <h3 className="text-base font-medium">Contacto</h3>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-2 w-40">
                <h3 className="text-base font-medium">ES</h3>
                <span className="w-[1px] h-7 bg-[#0000004D]"></span>
                <Link href={''}>
                    <Image src={Insta} alt="Instagram socials"></Image>
                </Link>
                <Link href={''}>
                    <Image src={Linked} alt="LinkedIn socials"></Image>
                </Link>
            </div>
        </div>
    )
}

export default Nav;