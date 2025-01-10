import Link from "next/link"
import React from "react"

const Connect = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link
        href="/oauth/authorize"
        className="text-white text-xl bg-blue-500 rounded-md p-4"
      >
        Conectar mi Mercado Pago
      </Link>
    </div>
  )
}

export default Connect
