export interface BodyEmail {
  name: string
  email: string
  message: string
  subject: string
}

export interface BillingEmail {
  client: string
  name?: string
  email: string
  phone: string
  enterprisePhone: string
  registration: string
  rent?: string
  address?: string
  postalCode?: string
  locality?: string
  webiste?: string
  instutionalEmail?: string
  enterpriseName?: string
}
