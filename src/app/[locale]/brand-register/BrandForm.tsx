import InputLabel from "@/components/sections/contact/InputLabel"
import React, { useEffect, useState } from "react"
import SliderComponent from "./Slider"
import DialogBrand from "./DialogBrand"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BrandFormSchema } from "@/lib/validations/Forms"
import { ZodError } from "zod"
import { toast } from "react-toastify"

type BrandFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BrandForm = ({ setIsOpen }: BrandFormProps) => {
  const [numberOfProducts, setNumberOfProducts] = useState(1)
  const [price, setPrice] = useState(145000)
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
    <div className="w-full grid grid-cols-2 space-x-12 place-items-center">
      <article className="w-2/3">
        <form className="space-y-12">
          <div className="space-y-6">
            <InputLabel
              className="text-base"
              pos="01"
              text="¿Cómo es el nombre de la marca?"
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
          <div className="space-y-6">
            <InputLabel
              className="text-base"
              pos="02"
              text="¿Que tipo clase/rubro desea proteger?"
            />
            <input
              name="name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full bg-transparent outline-none border-b border-black/30 focus:border-accent-orange transition-colors duration-150"
            />
          </div>
          <div className="space-y-6">
            <InputLabel
              className="text-base"
              pos="03"
              text="¿Que cantidad de productos/servicios desea proteger?"
            />
            <SliderComponent
              numberOfProducts={numberOfProducts}
              setNumberOfProducts={setNumberOfProducts}
            />
          </div>
          <DialogBrand />
        </form>
      </article>
      <article className="w-3/4 h-full flex items-start justify-start">
        <Card className="w-full max-w-4xl shadow-none border-none">
          <CardContent className="px-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-6">Su solicitud</h3>
                <Separator className="bg-black/60 mb-6" />
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-base font-medium">
                        Informe de Viabilidad en Argentina
                      </p>
                      <p className="text-sm text-muted-foreground">
                        - Tarifa base por 1 clase/s inicial/es
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-base">$145.000,00</p>
                      <p className="text-sm text-muted-foreground">
                        más IVA más TASAS
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
              <div className="flex justify-between items-center pt-2">
                <p className="text-xl font-medium mb-12">Total a pagar:</p>
                <div className="text-right">
                  <p className="text-xl font-semibold">${price}</p>
                  <p className="text-sm text-muted-foreground">
                    más IVA más TASAS
                  </p>
                </div>
              </div>
              <Button
                onClick={handleNextStep}
                className="w-full text-base px-6 py-6 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%"
              >
                Continuar
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}

export default BrandForm
