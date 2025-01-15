"use server"

import { NewsletterSchema } from "@/lib/validations/Forms"
import axios from "axios"
import { z } from "zod"

export const handleSubmit = async (formData: FormData) => {
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
        : "https://solutionsas.com.ar/api/newsletter",
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