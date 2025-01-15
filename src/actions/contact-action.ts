"use server"

import { ContactSchema } from "@/lib/validations/Forms"
import axios from "axios"
import { z } from "zod"

export const handleSubmit = async (formData: FormData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  const values = {
    name: name as string,
    email: email as string,
    subject: subject as string,
    message: message as string,
  }

  if (Object.values(values).some((value) => value === "")) {
    return { status: 500, message: "Por favor, complete todos los campos" }
  }

  try {
    const result = ContactSchema.parse(values)
    const res = await axios.post(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/emails"
        : "https://solutionsas.com.ar/api/emails",
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
