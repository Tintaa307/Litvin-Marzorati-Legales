"use server"

import { PaymentService } from "@/services/payment-service"
import { CreatePreferenceValues } from "@/types"

const paymentService = new PaymentService()

export async function createPayment(body: CreatePreferenceValues) {
  try {
    const result = await paymentService.createPreference(body)

    return result
  } catch (error) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Error al crear el pago",
      userMessage: "Hubo un error al crear el pago",
    }
  }
}
