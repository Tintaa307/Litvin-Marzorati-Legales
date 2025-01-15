import { z } from "zod"

export const BrandFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  type: z
    .string()
    .min(2, { message: "El tipo debe tener al menos 2 caracteres" }),
  quantity: z
    .number()
    .int()
    .min(1, { message: "La cantidad debe ser mayor a 0" }),
})

export const PaidmentFormSchema = z.object({
  client: z.string(),
  name: z.string().optional(),
  email: z.string().email(),
  phone: z.string(),
  enterprisePhone: z.string(),
  registration: z
    .string()
    .regex(
      /^([0-9]{2}-[0-9]{8}-[0-9]{1}|[0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/,
      { message: "Ingrese un CUIT, CIF o NIF válido" }
    ),
  rent: z.string().optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  locality: z.string().optional(),
  webiste: z.string().optional(),
  instutionalEmail: z.string().optional(),
  enterpriseName: z.string().optional(),
})

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  subject: z
    .string()
    .min(2, { message: "El asunto debe tener al menos 2 caracteres" }),
})
