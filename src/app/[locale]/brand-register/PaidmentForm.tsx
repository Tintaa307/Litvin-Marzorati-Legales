"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import InputLabel from "@/components/sections/contact/InputLabel"
import { Separator } from "@/components/ui/separator"
import { PaidmentFormSchema } from "@/lib/validations/Forms"
import { ZodError } from "zod"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import axios from "axios"
import { toast } from "react-toastify"
import { v4 as UUIDv4 } from "uuid"

type PaidmentFormProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PaidmentForm({ isOpen, setIsOpen }: PaidmentFormProps) {
  const [personType, setPersonType] = React.useState("fisica")
  const router = useRouter()
  const tBrandRegister = useTranslations("client-form")
  const locale = useLocale()
  const [isChecked, setIsChecked] = React.useState<boolean>(false)
  const [price, setPrice] = React.useState("")
  const [preferenceId, setPreferenceId] = React.useState("")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    enterprisePhone: "",
    registration: "",
    rent: "",
    address: "",
    postalCode: "",
    locality: "",
    website: "",
    instutionalEmail: "",
    enterpriseName: "",
  })

  React.useEffect(() => {
    if (localStorage.getItem("brand")) {
      const price = JSON.parse(localStorage.getItem("brand")!).price

      setPrice(price)
    }
  }, [])

  const handlePayment = async (): Promise<string | null> => {
    try {
      const response = await axios.post("/api/create-preference", {
        id: UUIDv4(),
        title: "Registro de marca",
        quantity: 1,
        price: price,
      })

      if (!response.data.preference) {
        toast.warning("Error al procesar el pago")
        return null
      }

      return response.data.preference
    } catch (error) {
      console.log(error)
      toast.warning("Error al procesar el pago")
      return null
    }
  }

  const sendBillingData = async (result: any) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/billing"
          : "https://lmlegales.com.ar/api/billing",
        result
      )

      if (res.status === 200) {
        console.log(res)
      } else {
        console.log(res)
      }

      return toast.success("Datos guardados correctamente")
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.map((err) => toast.info(err.message))
      }
      console.log(error)
    }
  }

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const values = {
        ...formData,
        client: personType,
      }

      const result = PaidmentFormSchema.parse(values)

      if (!isChecked) {
        return toast.warning("Por favor acepte los términos y condiciones")
      }

      sendBillingData(result)

      // Obtener preferenceId antes de continuar
      const newPreferenceId = await handlePayment()

      if (!newPreferenceId) {
        return toast.warning("Ha ocurrido un error, intente nuevamente")
      }

      setPreferenceId(newPreferenceId)

      router.push(
        `/${locale}/payment?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&enterprisePhone=${formData.enterprisePhone}&registration=${formData.registration}&rent=${formData.rent}&address=${formData.address}&postalCode=${formData.postalCode}&locality=${formData.locality}&website=${formData.website}&instutionalEmail=${formData.instutionalEmail}&enterpriseName=${formData.enterpriseName}&client=${personType}&preferenceId=${newPreferenceId}`
      )

      return toast.success("Datos guardados correctamente")
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors)
        error.errors.map((err) => toast.warning(err.message))
      }
    }
  }

  return (
    <Card className="w-full max-w-7xl border-none shadow-none">
      <CardContent className="p-4 sm:p-6">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="space-y-6 sm:space-y-8"
        >
          <CollapsibleContent className="space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <InputLabel
                className="text-base font-medium"
                pos="01"
                text={tBrandRegister("section1-title")}
              />
              <Separator className="bg-black/60 mb-4 sm:mb-6" />
              <RadioGroup
                defaultValue="fisica"
                onValueChange={setPersonType}
                className="flex flex-col gap-2 sm:gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="size-4 sm:size-5 border-black/20"
                    value="fisica"
                    id="fisica"
                  />
                  <Label className="text-sm" htmlFor="fisica">
                    {tBrandRegister("option1")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="size-4 sm:size-5 border-black/20"
                    value="juridica"
                    id="juridica"
                  />
                  <Label className="text-sm" htmlFor="juridica">
                    {tBrandRegister("option2")}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <InputLabel
                className="text-base font-medium"
                pos="02"
                text={tBrandRegister("section2-title")}
              />
              <Separator className="bg-black/60" />
              <div className="grid gap-4">
                {["name", "email", "phone"].map((field, index) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field}>
                      {tBrandRegister(`label${index + 1}`)}
                    </Label>
                    <input
                      name={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <InputLabel
                className="text-base font-medium"
                pos="03"
                text={tBrandRegister("section3-title")}
              />
              <Separator className="bg-black/60" />
              <div className="grid gap-6">
                {[
                  ["enterprisePhone", "registration", "rent"],
                  ["address", "locality", "postalCode"],
                  ["enterpriseName", "website", "institutionalEmail"],
                ].map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {row.map((field, index) => (
                      <div key={field} className="space-y-2">
                        <Label htmlFor={field}>
                          {tBrandRegister(`label${rowIndex * 3 + index + 4}`)}
                        </Label>
                        <input
                          name={field}
                          type={
                            field.includes("email")
                              ? "email"
                              : field === "website"
                                ? "url"
                                : field === "enterprisePhone"
                                  ? "tel"
                                  : "text"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field]: e.target.value,
                            })
                          }
                          className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-row space-x-2 items-start">
                <Checkbox
                  id="accept-terms"
                  className="border-black/20 mt-1"
                  onCheckedChange={() => setIsChecked(!isChecked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="accept-terms"
                    className="text-sm text-muted-foreground"
                  >
                    {tBrandRegister("terms")}
                  </Label>
                </div>
              </div>
              <Button
                onClick={handleNextStep}
                className="w-full text-base px-2 py-4 sm:py-6 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%"
                type="submit"
              >
                {tBrandRegister("button")}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
