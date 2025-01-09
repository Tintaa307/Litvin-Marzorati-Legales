"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import { Slider } from "@/components/ui/slider"

const SliderComponent = ({
  numberOfProducts,
  setNumberOfProducts,
}: {
  numberOfProducts: number
  setNumberOfProducts: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="text-black/70">{numberOfProducts}</span>
      <Slider
        className="bg-black/20 h-1.5"
        defaultValue={[0]}
        max={44}
        step={1}
        onValueChange={(value) => setNumberOfProducts(value[0])}
      />
    </div>
  )
}

export default SliderComponent
