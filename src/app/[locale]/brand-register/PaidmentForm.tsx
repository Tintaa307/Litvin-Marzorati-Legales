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
import { toast } from "react-toastify"
import { ZodError } from "zod"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const values = {
        ...formData,
        client: personType,
      }

      PaidmentFormSchema.parse(values)

      if (!isChecked) {
        return toast.warning("Por favor acepte los términos y condiciones")
      }

      router.push(
        `/${locale}/payment?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&enterprisePhone=${formData.enterprisePhone}&registration=${formData.registration}&rent=${formData.rent}&address=${formData.address}&postalCode=${formData.postalCode}&locality=${formData.locality}&website=${formData.website}&instutionalEmail=${formData.instutionalEmail}&enterpriseName=${formData.enterpriseName}&client=${personType}`
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
      <CardContent className="p-6 flex items-center justify-center">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="space-y-4 flex items-center justify-center flex-col"
        >
          <CollapsibleContent className="space-y-20">
            <div className="space-y-4">
              <InputLabel
                className="text-base font-medium"
                pos="01"
                text={tBrandRegister("section1-title")}
              />
              <Separator className="bg-black/60 mb-6" />
              <RadioGroup
                defaultValue="fisica"
                onValueChange={setPersonType}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="size-5 border-black/20"
                    value="fisica"
                    id="fisica"
                  />
                  <Label className="text-sm" htmlFor="fisica">
                    {tBrandRegister("option1")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="size-5 border-black/20"
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
                <div className="space-y-2">
                  <Label htmlFor="client-question">
                    {tBrandRegister("label1")}
                  </Label>
                  <input
                    name="name"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signature-email">
                    {tBrandRegister("label2")}
                  </Label>
                  <input
                    name="email"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signature-phone">
                    {tBrandRegister("label3")}
                  </Label>
                  <input
                    name="phone"
                    type="tel"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <InputLabel
                className="text-base font-medium"
                pos="03"
                text={tBrandRegister("section3-title")}
              />
              <Separator className="bg-black/60" />
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">{tBrandRegister("label4")}</Label>
                    <input
                      name="phone"
                      type="tel"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          enterprisePhone: e.target.value,
                        })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registro">{tBrandRegister("label5")}</Label>
                    <input
                      name="registration"
                      type="text"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          registration: e.target.value,
                        })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id-registro">
                      {tBrandRegister("label6")}
                    </Label>
                    <input
                      name="id-registration"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, rent: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="domicilio">
                      {tBrandRegister("label7")}
                    </Label>
                    <input
                      name="address"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="localidad">
                      {tBrandRegister("label8")}
                    </Label>
                    <input
                      name="locality"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, locality: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="codigo-postal">
                      {tBrandRegister("label9")}
                    </Label>
                    <input
                      name="postal-code"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="razon-social">
                      {tBrandRegister("label10")}
                    </Label>
                    <input
                      name="social-reason"
                      type="text"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          enterpriseName: e.target.value,
                        })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pagina-web">
                      {tBrandRegister("label11")}
                    </Label>
                    <input
                      name="website"
                      type="url"
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mail-institucional">
                      {tBrandRegister("label12")}
                    </Label>
                    <input
                      name="email"
                      type="email"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          instutionalEmail: e.target.value,
                        })
                      }
                      className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row space-x-2">
                <Checkbox
                  id="accept-terms"
                  className="border-black/20"
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
                className="text-base px-2 py-6 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%"
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
