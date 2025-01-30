import { BillingEmail } from "@/types"
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

const baseUrl = "https://lmlegales.com.ar"

export const BillingTemplate = ({
  client,
  email,
  enterprisePhone,
  phone,
  registration,
  address,
  enterpriseName,
  instutionalEmail,
  locality,
  name,
  postalCode,
  rent,
  webiste,
}: BillingEmail) => {
  return (
    <Html>
      <Head />
      <Preview>{"Informacion para la factura"}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${baseUrl}/logo.png`} alt="logo" />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              Numero del usuario al que habria que contactarse: {phone}
            </Text>
            <Text style={paragraph}>Nombre del cliente: {name}</Text>
            <Text style={paragraph}>
              Correo electronico del cliente: {email}
            </Text>
            <Text style={paragraph}>
              Telefono de la empresa: {enterprisePhone}
            </Text>
            <Text style={paragraph}>CUIT, CIF o NIF: {registration}</Text>
            <Text style={paragraph}>Direccion: {address}</Text>
            <Text style={paragraph}>
              Nombre de la empresa: {enterpriseName}
            </Text>
            <Text style={paragraph}>
              Email institucional: {instutionalEmail}
            </Text>
            <Text style={paragraph}>Localidad: {locality}</Text>
            <Text style={paragraph}>Codigo postal: {postalCode}</Text>
            <Text style={paragraph}>Registro de renta: {rent}</Text>
            <Text style={paragraph}>Sitio web: {webiste}</Text>
            <Text style={paragraph}>Tipo de persona: {client}</Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2024 LMLegales, Todos los derechos reservados
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  )
}

export default BillingTemplate

const fontFamily = "Poppins,sans-serif"

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
}

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
}

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
}

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
}

const content = {
  padding: "5px 20px 10px 20px",
}

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
}

const sectionsBorders = {
  width: "100%",
  display: "flex",
}

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
}

const sectionCenter = {
  borderBottom: "1px solid rgb(255, 190, 65)",
  width: "102px",
}
