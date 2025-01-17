"use client"

import { NewsletterSchema } from "@/lib/validations/Forms"
import axios from "axios"
import { useState } from "react"

import "react-toastify/dist/ReactToastify.css"
import { z } from "zod"

interface Props {
  label: string
  accept: string
  submit: string
  success: string
  emailError: string
  formError: string
}

const Newsletter = ({ label, accept, submit }: Props) => {
  //Use state for checkbox
  const [isChecked, setIsChecked] = useState(false)

  const FormAction = async (formData: FormData) => {
    const email = formData.get("email")

    const values = {
      email: email as string,
    }

    if (Object.values(values).some((value) => value === "")) {
      return { status: 500, message: "Por favor, complete todos los campos" }
    }

    try {
      const result = NewsletterSchema.parse(values)
      const res = await axios.post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/newsletter"
          : "https://lmlegales.com.ar/api/newsletter",
        result
      )

      return res.data
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message)
        return { status: 500, message: errors }
      } else {
        console.log(error)
        return error
      }
    }
  }

  return (
    <form action={FormAction} className="flex flex-col gap-4 text-sm">
      <div className="w-full flex flex-col gap-2">
        <h3>{label}</h3>
        <input
          name="email"
          type="text"
          className="bg-transparent outline-none border-b border-white/30 text-sm p-1"
        />
      </div>
      <div
        onClick={() => {
          setIsChecked(!isChecked)
        }}
        className="flex gap-2 text-xs font-light text-white/70"
      >
        <input
          onChange={() => {}}
          name="check"
          type="checkbox"
          checked={isChecked}
        />
        <h3 className="cursor-default">{accept}</h3>
      </div>
      <div className="w-full flex justify-start">
        <button
          type="submit"
          className={`bg-accent-orange py-2 px-4 rounded-md w-20 text-black text-sm`}
        >
          {submit}
        </button>
      </div>
    </form>
  )
}

export default Newsletter
