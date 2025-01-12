"use client"

import { Check } from "lucide-react"
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
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

initMercadoPago("APP_USR-73718d29-a160-48a4-be32-fa8d5fa3196f")

export default function CheckoutSummary() {
  const searchParams = useSearchParams()
  const [preferenceId, setPreferenceId] = useState("")

  const name = searchParams.get("name")
  const email = searchParams.get("email")
  const registration = searchParams.get("registration")
  const enterprisePhone = searchParams.get("enterprisePhone")
  const price = JSON.parse(localStorage.getItem("brand")!).price

  const handlePayment = async () => {
    try {
      await axios
        .post("/api/create-preference", {
          title: "prueba",
          quantity: "1",
          price: "1",
        })
        .then((response) => {
          if (!response.data.id)
            return toast.warning("Error al procesar el pago")

          setPreferenceId(response.data.preference)
        })
        .catch((error) => {
          console.error(error)
          toast.warning("Error al procesar el pago")
        })
    } catch (error) {
      console.error(error)
      toast.warning("Error al procesar el pago")
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl bg-white shadow-lg">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="font-meshedDisplay text-4xl font-bold text-black">
            Confirmar Compra
          </CardTitle>
          <p className="text-gray-500">
            Por favor, revisa los detalles antes de continuar
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Detalles del Usuario */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">
              Información del Cliente
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Nombre</p>
                <p className="font-medium">{name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{email}</p>
              </div>
              <div>
                <p className="text-gray-500">CUIT, CUIL o NIF</p>
                <p className="font-medium">{registration}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{enterprisePhone}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Detalles del Servicio */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#1A1A1A]">
              Detalles del Servicio
            </h3>
            <div className="bg-[#F5F5F3] p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{""}</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      Asesoramiento personalizado
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      Gestión completa del trámite
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-[#F4A261]" />
                      Seguimiento del proceso
                    </li>
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Precio</p>
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
              <p className="text-gray-500">Total a pagar</p>
              <p className="text-3xl font-semibold text-[#1A1A1A]">{price}$</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>IVA incluido</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50">
          <button onClick={handlePayment} className="w-full">
            <Wallet
              initialization={{ preferenceId }}
              customization={{
                visual: {
                  buttonBackground: "black",
                  horizontalPadding: "20px",
                },
                texts: { valueProp: "smart_option" },
              }}
              locale="es-AR"
            />
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
