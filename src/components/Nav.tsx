'use client';
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo.svg';
import Insta from '../../public/socials/insta.svg';
import Linked from '../../public/socials/linkedin.svg';
import useScrollPosition from "@/hooks/useScrollPosition";
import { useState } from "react";

interface Props {
    white?: boolean,
}

const Nav = ({white}: Props) => {   
    const scrollPosition = useScrollPosition()
    const [isOpen, setIsOpen] = useState(false);

    //Handles opening and closing of mobile hamburger menu
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-screen h-20 fixed top-0 z-50 main-padding flex items-center justify-between duration-200 ${scrollPosition > 20 ? 'bg-background text-black' : `bg-transparent ${white && 'text-white'}` }`}>
            <Link href={'/'}>
                <Image src={Logo} alt="Logo" className={`w-32 ${scrollPosition > 20 ? 'filter-none' : `${white && 'filter invert-[100%]'}` }`}></Image>
            </Link>
            {/* For Desktop */}
            <div className="md:flex hidden items-center gap-6">
                <Link href={'/'}>
                    <h3 className="text-base font-medium">Inicio</h3>
                </Link>
                <Link href={'/about'}>
                    <h3 className="text-base font-medium whitespace-nowrap">Sobre nosotros</h3>
                </Link>
                <Link href={'/'}>
                    <h3 className="text-base font-medium">Servicios</h3>
                </Link>
                <Link href={'/'}>
                    <h3 className={`text-base font-medium py-1 px-3 rounded-xl ${scrollPosition > 20 ? 'bg-accent-orange' : 'bg-transparent'}`}>Contacto</h3>
                </Link>
            </div>
            <div className="md:flex hidden items-center justify-center gap-2 w-40">
                <h3 className="text-base font-medium">ES</h3>
                <span className={`w-[1px] h-7 ${scrollPosition > 20 ? 'bg-black' : `${white && 'bg-white'}` } `}></span>
                <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
                    <Image src={Insta} alt="Instagram socials" className={`${scrollPosition > 20 ? 'filter-none' : `${white && 'filter invert-[100%]'}` }`}></Image>
                </Link>
                <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                    <Image src={Linked} alt="LinkedIn socials" className={`${scrollPosition > 20 ? 'filter-none' : `${white && 'filter invert-[100%]'}` }`}></Image>
                </Link>
            </div>
            {/* For mobile */}
            <button onClick={handleClick} className="md:hidden flex flex-col justify-center items-center">
                <span className={`bg-black ${scrollPosition > 20 ? 'bg-black' : `${white && 'bg-white'}` } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-black ${scrollPosition > 20 ? 'bg-black' : `${white && 'bg-white'}` } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black ${scrollPosition > 20 ? 'bg-black' : `${white && 'bg-white'}` } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
            </button>
            <div className={`absolute md:hidden h-screen w-[70%] top-0 z-10 bg-background transition-all ease-out duration-300 ${isOpen ? 'left-0' : '-left-[30rem] sm:-left-[36rem]'}`}>
                <div className="w-full h-full flex flex-col p-10 text-black">
                    <Link href={'./'}>Inicio</Link>
                    <Link href={'./about'}>Sobre nosotros</Link>
                </div>
            </div>
            <div onClick={handleClick} className={`absolute md:hidden h-screen w-full z-0 top-0 right-0 bg-neutral-500 duration-200 ${isOpen ? 'opacity-40' : 'opacity-0 hidden'}`}></div>
        </div>
    )
}

export default Nav;