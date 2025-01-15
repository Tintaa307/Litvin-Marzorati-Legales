import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
  name: string
  message: string
  email: string
  subject: string
}

const baseUrl = "https://lmlegales.com.ar"

export const EmailTemplate = ({
  email,
  message,
  name,
  subject,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
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
              Email del usuario al que habria que contactarse: {email}
            </Text>
            <Text style={paragraph}>Hola, soy {name}</Text>
            <Text style={paragraph}>Mensaje: {message}</Text>
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

export default EmailTemplate

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
