import InputLabel from "@/components/sections/contact/InputLabel"
import React, { useEffect, useState } from "react"
import CheckboxGrid from "./CheckboxGrid"
import DialogBrand from "./DialogBrand"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BrandFormSchema } from "@/lib/validations/Forms"
import { ZodError } from "zod"
import { toast } from "react-toastify"
import { useTranslations } from "next-intl"

type BrandFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BrandForm = ({ setIsOpen }: BrandFormProps) => {
  const [numberOfProducts, setNumberOfProducts] = useState(0)
  const [price, setPrice] = useState(145000)
  const tBrandRegister = useTranslations("brand-register")
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    quantity: 1,
  })

  useEffect(() => {
    setPrice(numberOfProducts * 145000 + numberOfProducts * 145000 * 0.21)
  }, [numberOfProducts])

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const values = {
        ...formData,
        quantity: numberOfProducts,
        price: price,
      }

      BrandFormSchema.parse(values)
      localStorage.setItem("brand", JSON.stringify(values))

      return setIsOpen(true)
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors)
        error.errors.map((err) => toast.warning(err.message))
      }
    }
  }

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <article className="w-full lg:w-2/3 mx-auto">
          <form className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <InputLabel
                className="text-base"
                pos="01"
                text={tBrandRegister("label1")}
              />
              <input
                name="name"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <InputLabel
                className="text-base"
                pos="02"
                text={tBrandRegister("label2")}
              />
              <input
                name="type"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <InputLabel
                className="text-base"
                pos="03"
                text={tBrandRegister("label3")}
              />
              <p className="text-sm text-black/60">
                Si no sabes cuántos productos necesitas, puedes acudir a nuestro
                chatbot.
              </p>
              <CheckboxGrid
                numberOfProducts={numberOfProducts}
                setNumberOfProducts={setNumberOfProducts}
              />
            </div>
            <DialogBrand />
          </form>
        </article>
        <article className="w-full lg:w-3/4 mx-auto mt-8 lg:mt-0">
          <Card className="w-full shadow-none border-none">
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-6">
                    {tBrandRegister("checkout-title")}
                  </h3>
                  <Separator className="bg-black/60 mb-6" />
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="space-y-1 mb-2 sm:mb-0">
                        <p className="text-base font-medium">
                          {tBrandRegister("info1")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tBrandRegister("info2")}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-medium text-base">$145.000,00</p>
                        <p className="text-sm text-muted-foreground">
                          {tBrandRegister("info3")}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-base">Subtotal:</p>
                      <p className="font-medium text-base">
                        ${numberOfProducts * 145000}
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="bg-black/60" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2">
                  <p className="text-xl font-medium mb-2 sm:mb-0">
                    {tBrandRegister("pay")}
                  </p>
                  <div className="text-left sm:text-right">
                    <p className="text-xl font-semibold">${price}</p>
                    <p className="text-sm text-muted-foreground">
                      {tBrandRegister("info3")}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleNextStep}
                  className="w-full text-base px-6 py-6 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%"
                >
                  {tBrandRegister("button")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}

export default BrandForm
