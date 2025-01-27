"use client"

import { ArrowLeft, Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "next/navigation"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { v4 as UUIDv4 } from "uuid"
import Link from "next/link"
import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

initMercadoPago("APP_USR-8a64f5d3-fd86-4481-83d8-308c4bddf649")

export default function CheckoutSummary() {
  const tPayment = useTranslations("confirm-purchase")
  const searchParams = useSearchParams()
  const [preferenceId, setPreferenceId] = useState("")
  const locale = useLocale()
  const name = searchParams.get("name")
  const email = searchParams.get("email")
  const registration = searchParams.get("registration")
  const enterprisePhone = searchParams.get("enterprisePhone")
  const [price, setPrice] = useState("")
  const [ready, setReady] = useState(false)

  const handlePayment = async () => {
    try {
      await axios
        .post("/api/create-preference", {
          id: UUIDv4(),
          title: "prueba",
          quantity: 1,
          price: 1,
        })
        .then((response) => {
          if (!response.data.preference)
            return toast.warning("Error al procesar el pago")

          setPreferenceId(response.data.preference)
        })
        .catch((error) => {
          console.log(error)
          toast.warning("Error al procesar el pago")
        })
    } catch (error) {
      console.error(error)
      toast.warning("Error al procesar el pago")
    }
  }

  const handleReady = () => {
    setReady(true)
  }

  const renderCheckoutButton = (preferenceId: string) => {
    if (!preferenceId) return null

    return (
      <Wallet
        initialization={{ preferenceId }}
        customization={{
          visual: {
            buttonBackground: "black",
            horizontalPadding: "20px",
          },
          texts: { valueProp: "smart_option" },
        }}
        onReady={handleReady}
        locale="es-AR"
      />
    )
  }

  useEffect(() => {
    if (localStorage.getItem("brand")) {
      const price = JSON.parse(localStorage.getItem("brand")!).price

      setPrice(price)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center p-4">
      <div className="absolute top-3 left-3">
        <Link href={`/${locale}/brand-register`} passHref>
          <Button variant="default" className="shadow-md">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {tPayment("link")}
          </Button>
        </Link>
      </div>
      <Card className="w-full max-w-xl bg-white shadow-lg">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="font-meshedDisplay text-4xl font-bold text-black">
            {tPayment("title")}
          </CardTitle>
          <p className="text-gray-500">{tPayment("subtitle")}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Detalles del Usuario */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">
              {tPayment("client-info-title")}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">{tPayment("client-name")}</p>
                <p className="font-medium">{name}</p>
              </div>
              <div>
                <p className="text-gray-500">{tPayment("client-email")}</p>
                <p className="font-medium">{email}</p>
              </div>
              <div>
                <p className="text-gray-500">{tPayment("client-id")}</p>
                <p className="font-medium">{registration}</p>
              </div>
              <div>
                <p className="text-gray-500">{tPayment("client-phone")}</p>
                <p className="font-medium">{enterprisePhone}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Detalles del Servicio */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#1A1A1A]">
              {tPayment("service-details-title")}
            </h3>
            <div className="bg-[#F5F5F3] p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{""}</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      {tPayment("service-item1")}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      {tPayment("service-item2")}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      {tPayment("service-item3")}
                    </li>
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {tPayment("price-label")}
                  </p>
                  <p className="text-2xl font-semibold text-[#1A1A1A]">
                    {price}$
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between items-center pt-4">
            <div>
              <p className="text-gray-500">{tPayment("total-label")}</p>
              <p className="text-3xl font-semibold text-[#1A1A1A]">{price}$</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>{tPayment("total-note")}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50">
          <button
            onClick={handlePayment}
            className={cn("w-full", {
              "shadow-md h-11 border border-gray-500 rounded-md": !ready,
            })}
          >
            {renderCheckoutButton(preferenceId)}
            {ready ? "" : tPayment("button")}
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
