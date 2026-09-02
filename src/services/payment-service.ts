import {
  CreatePreferenceResponse,
  CreatePreferenceValues,
  ErrorResponse,
} from "@/types"
import MercadoPagoConfig, { Preference } from "mercadopago"
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes"
import { v4 as UUIDv4 } from "uuid"

export class PaymentService {
  private readonly client: Preference

  constructor() {
    const accessToken = process.env.ACCESS_TOKEN_MP as string
    if (!accessToken) {
      throw new Error("ACCESS_TOKEN_MP is not set")
    }

    const config = new MercadoPagoConfig({ accessToken })

    this.client = new Preference(config)
  }

  async createPreference(
    body: CreatePreferenceValues
  ): Promise<CreatePreferenceResponse | ErrorResponse> {
    const { price, title, quantity, locale } = body

    if (!price || !title || !quantity) {
      return {
        status: 400,
        message: "Invalid request body",
        userMessage: "Hubo un error al crear el pago.",
      }
    }

    const id = `${title}-${UUIDv4()}-${Date.now()}`

    const request_id = `${id}-${Date.now()}`
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://lmlegales.com.ar"
    try {
      const result = (await this.client.create({
        body: {
          items: [
            {
              id: id,
              title: title,
              quantity: quantity,
              currency_id: "ARS",
              unit_price: price,
            },
          ],
          back_urls: {
            success: `${siteUrl}/${locale}/payment/success`,
            failure: `${siteUrl}/${locale}/payment/failure`,
            pending: `${siteUrl}/${locale}/payment/pending`,
          },
          notification_url: `${siteUrl}/api/webhooks/mercadopago`,
          auto_return: "approved",
          external_reference: request_id,
          metadata: { request_id },
        },
      })) as PreferenceResponse

      if (!result || !result.init_point || !result.id) {
        return {
          status: 500,
          message: "Error al crear la preferencia de pago",
          userMessage: "Hubo un error al crear el pago.",
        }
      }

      return {
        init_point: result.init_point,
      }
    } catch (error) {
      console.log(error)
      return {
        status: 500,
        message: "Error al crear la preferencia de pago",
        userMessage: "Hubo un error al crear el pago.",
      }
    }
  }
}
