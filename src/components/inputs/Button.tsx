import { cn } from "@/lib/utils"
import Link from "next/link"

const CtaButton = ({
  text,
  locale,
  url,
  className,
}: {
  text?: string
  locale: string
  url: string
  className?: string
}) => {
  return (
    <Link
      href={"/" + (locale || "") + url}
      className={cn(
        "sm:px-8 sm:py-3 px-6 py-2 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%",
        className
      )}
    >
      <h3 className="font-medium sm:text-lg sm:text-md">{text || "Nada"}</h3>
    </Link>
  )
}

export default CtaButton
