"use client"

import type { Dispatch, SetStateAction } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const CheckboxGrid = ({
  numberOfProducts,
  setNumberOfProducts,
}: {
  numberOfProducts: number
  setNumberOfProducts: Dispatch<SetStateAction<number>>
}) => {
  // Create array of numbers from 1 to 45
  const numbers = Array.from({ length: 45 }, (_, i) => i + 1)

  const handleCheckboxChange = (
    checked: boolean | "indeterminate",
    value: number
  ) => {
    setNumberOfProducts(checked ? value : 0)
  }

  return (
    <div className="w-full border rounded-lg p-4">
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-9 gap-2">
        {numbers.map((number) => (
          <Label
            key={number}
            className="flex items-center space-x-2 cursor-pointer hover:bg-black/5 p-1 rounded"
          >
            <Checkbox
              id={`class-${number}`}
              checked={numberOfProducts === number}
              onCheckedChange={(checked) =>
                handleCheckboxChange(checked, number)
              }
              className="border-black/20"
            />
            <span className="text-sm text-black/70">{number}</span>
          </Label>
        ))}
      </div>
    </div>
  )
}

export default CheckboxGrid
