"use client"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import MobileMenu from "./navigation/MobileMenu"

import Logo from "../../public/logo.svg"
import Insta from "../../public/socials/insta.svg"
import Linked from "../../public/socials/linkedin.svg"
import Facebook from "../../public/socials/facebook.svg"
import useScrollPosition from "@/hooks/useScrollPosition"
import { useState } from "react"
import ServicesHoverCard from "./navigation/ServicesHoverCard"
import { usePathname } from "next/navigation"

interface Props {
  white?: boolean
  tInicio: string
  tServicios: string
  tAbout: string
  tContacto: string
  locale: string
}

const Nav = ({
  white,
  tInicio,
  tAbout,
  tContacto,
  tServicios,
  locale,
}: Props) => {
  const scrollPosition = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false)

  //Handles opening and closing of mobile hamburger menu
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  //Handle service option hovering
  const [isHovering, setIsHovering] = useState(false)

  //Handle lang pathname
  const pathname = usePathname()

  return (
    <div
      className={`w-screen h-20 fixed top-0 z-50 main-padding flex items-center justify-between duration-200 border-b ${
        scrollPosition > 20
          ? "bg-background text-black border-transparent"
          : `${white && "text-white"} ${
              isOpen
                ? "bg-background border-[#1E1E1E]/30"
                : "bg-transparent border-transparent"
            }`
      }`}
    >
      <Link href={"/" + (locale || "")}>
        <Image
          src={Logo}
          alt="Logo"
          className={`w-32 ${
            scrollPosition > 20
              ? "filter-none"
              : `${white && !isOpen && "filter invert-[100%]"}`
          }`}
        ></Image>
      </Link>
      {/* For Desktop */}
      <div className="md:flex hidden items-center gap-6">
        <Link href={"/" + (locale || "")}>
          <h3 className="text-base font-medium">{tInicio}</h3>
        </Link>
        <Link href={"/" + (locale || "") + "/#about-us"}>
          <h3 className="text-base font-medium whitespace-nowrap">{tAbout}</h3>
        </Link>
        <div
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          className="group"
        >
          <div className="text-base font-medium cursor-default flex gap-2">
            <h3>{tServicios}</h3>
            <h3
              className={`transition-all ${
                !isHovering ? "rotate-0" : "rotate-90"
              }`}
            >
              {">"}
            </h3>
          </div>
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                className="bg-background shadow-2xl text-black flex flex-col gap-4 p-6 rounded-md absolute"
              >
                <ServicesHoverCard></ServicesHoverCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link href={"/" + (locale || "") + "/contacto"}>
          <h3
            className={`text-base font-medium py-1 px-3 rounded-xl ${
              scrollPosition > 20 ? "bg-accent-orange" : "bg-transparent"
            } ${!white && "duration-200"}}`}
          >
            {tContacto}
          </h3>
        </Link>
      </div>
      <div className="md:flex hidden items-center justify-center gap-2 w-40">
        <div className="flex gap-2 items-center justify-center mr-4">
          <Link
            href={pathname.replace("/en", "/es")}
            className={`${locale === "es" ? "font-semibold" : "font-medium"}`}
          >
            ES
          </Link>
          <span
            className={`w-[1px] h-5 ${
              scrollPosition > 20
                ? "bg-black/70"
                : `${white ? "bg-white/70" : "bg-black/70"}`
            } `}
          ></span>
          <Link
            href={pathname.replace("/es", "/en")}
            className={`${locale === "en" ? "font-semibold" : "font-medium"}`}
          >
            EN
          </Link>
        </div>
        <Link href={"https://www.instagram.com/lmlegales/"} target="_blank">
          <Image
            src={Insta}
            alt="Instagram socials"
            className={`${
              scrollPosition > 20
                ? "filter-none"
                : `${white && "filter invert-[100%]"}`
            }`}
          ></Image>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar"
          }
          target="_blank"
        >
          <Image
            src={Linked}
            alt="LinkedIn socials"
            className={`${
              scrollPosition > 20
                ? "filter-none"
                : `${white && "filter invert-[100%]"}`
            }`}
          ></Image>
        </Link>
        <Link href={"https://www.facebook.com/Lmlegales"} target="_blank">
          <Image
            src={Facebook}
            alt="LinkedIn socials"
            className={`${
              scrollPosition > 20
                ? "filter-none"
                : `${white && "filter invert-[100%]"}`
            }`}
          ></Image>
        </Link>
      </div>
      {/* For mobile */}
      <button
        onClick={handleClick}
        className="md:hidden flex flex-col justify-center items-center"
      >
        <span
          className={`bg-black ${
            scrollPosition > 20
              ? "bg-black"
              : `${white && !isOpen && "bg-white"}`
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-black ${
            scrollPosition > 20
              ? "bg-black"
              : `${white && !isOpen && "bg-white"}`
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black ${
            scrollPosition > 20
              ? "bg-black"
              : `${white && !isOpen && "bg-white"}`
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45" : "translate-y-1"
          }`}
        ></span>
      </button>
      <div
        className={`absolute md:hidden h-screen top-20 z-10 bg-background border-l border-[#1E1E1E]/30 transition-all ease-out duration-300 ${
          isOpen
            ? "right-0 sm:w-[50%] w-[70%]"
            : "-right-[16rem] sm:-right-[26rem] w-[40%]"
        }`}
      >
        <MobileMenu
          scrollPosition={scrollPosition}
          white={white}
          isOpen={isOpen}
          tInicio={tInicio}
          tAbout={tAbout}
          tContacto={tContacto}
          tServicios={tServicios}
          locale={locale}
        ></MobileMenu>
      </div>
      <div
        onClick={handleClick}
        className={`absolute md:hidden h-screen w-full z-0 top-20 right-0 bg-neutral-500 duration-200 ${
          isOpen ? "opacity-40" : "opacity-0 hidden"
        }`}
      ></div>
    </div>
  )
}

export default Nav
