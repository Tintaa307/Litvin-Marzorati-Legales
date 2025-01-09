"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const DialogBrand = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-base text-black underline">
          ¿Qué incluye un registro de marca?
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#fff1f1] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center mb-6">
            ¿Qué incluye un registro de marca?
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Tasas oficiales del Instituto Nacional de Propiedad Industrial;
            </li>
            <li>Preparación y presentación de la solicitud;</li>
            <li>Seguimiento del trámite;</li>
            <li>Aviso de publicación de la marca en el boletín oficial;</li>
            <li>
              Avisos de posibles presentaciones de oposiciones a terceros
              durante 10 años;
            </li>
            <li>Custodia de la marca;</li>
            <li>Aviso de declaración de uso de marca y renovación;</li>
            <li>Honorarios profesionales.</li>
          </ul>
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setIsOpen(false)}
              variant="default"
              className="text-sm px-8 py-5 rounded-md bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DialogBrand
