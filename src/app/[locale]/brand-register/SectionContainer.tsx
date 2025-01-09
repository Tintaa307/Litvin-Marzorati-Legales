"use client"

import React, { useState } from "react"
import BrandForm from "./BrandForm"
import PaidmentForm from "./PaidmentForm"

const SectionContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="-full h-full mt-28 flex items-center justify-start flex-col gap-24">
      <h1 className="font-meshedDisplay text-5xl font-bold mt-12">
        Registra tu marca online
      </h1>
      <BrandForm setIsOpen={setIsOpen} />
      <PaidmentForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}

export default SectionContainer
