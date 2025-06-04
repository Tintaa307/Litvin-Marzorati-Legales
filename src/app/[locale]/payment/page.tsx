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
import { useLocale, useTranslations } from "next-intl"
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

  const preference = useSearchParams().get("preferenceId")

  const handleReady = () => {
    setReady(true)
  }

  const renderCheckoutButton = (preferenceId: string) => {
    if (!preferenceId) return null

    return (
      <Wallet
        initialization={{ preferenceId }}
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
      <div className="absolute top-3 left-3 z-10">
        <Link href={`/${locale}/brand-register`} passHref>
          <Button variant="default" className="shadow-md text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {tPayment("link")}
          </Button>
        </Link>
      </div>
      <Card className="w-full max-w-xl bg-white shadow-lg">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="font-meshedDisplay text-3xl sm:text-4xl font-bold text-black">
            {tPayment("title")}
          </CardTitle>
          <p className="text-gray-500 text-sm sm:text-base">
            {tPayment("subtitle")}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Client Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">
              {tPayment("client-info-title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: "client-name", value: name },
                { label: "client-email", value: email },
                { label: "client-id", value: registration },
                { label: "client-phone", value: enterprisePhone },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-gray-500">{tPayment(item.label)}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#1A1A1A]">
              {tPayment("service-details-title")}
            </h3>
            <div className="bg-[#F5F5F3] p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div className="mb-4 sm:mb-0">
                  <ul className="space-y-2">
                    {["service-item1", "service-item2", "service-item3"].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="h-4 w-4 mr-2 text-[#F4A261] flex-shrink-0" />
                          <span>{tPayment(item)}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="text-left sm:text-right mt-4 sm:mt-0">
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 gap-4 sm:gap-0">
            <div>
              <p className="text-gray-500">{tPayment("total-label")}</p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
                {price}$
              </p>
            </div>
            <div className="text-left sm:text-right text-sm text-gray-500">
              <p>{tPayment("total-note")}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50">
          <div className="w-full">
            {preference ? renderCheckoutButton(preference) : ""}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
