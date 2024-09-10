"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué es una marca y por qué es importante registrarla?",
    answer:
      "Una marca es un signo distintivo que permite diferenciar un producto o servicio de otros en el mercado. Registrar tu marca es esencial porque te otorga la propiedad y el uso exclusivo de la misma, permitiéndote proteger tu negocio frente a imitaciones o usos no autorizados. En Litvin Marzorati Legales, utilizamos la última tecnología en software de gestión para hacer este proceso rápido, eficiente y con costos reducidos, asegurando la mejor protección para tu marca.",
  },
  {
    id: 2,
    question: "¿Qué tipos de signos pueden registrarse como marca?",
    answer:
      "Se pueden registrar una amplia variedad de signos, siempre que tengan capacidad distintiva: palabras, imágenes, logotipos, combinaciones de colores, entre otros. Nuestro equipo te guiará para identificar el mejor signo distintivo para proteger tus productos o servicios de manera efectiva.",
  },
  {
    id: 3,
    question: "¿Qué derechos obtengo al registrar una marca?",
    answer:
      "Al registrar tu marca, obtienes el derecho exclusivo a usarla y a defenderte contra cualquier uso no autorizado por terceros. Además, puedes licenciar su uso, venderla total o parcialmente, y ejercer todas las acciones legales necesarias para proteger tu propiedad intelectual. Con nuestros servicios innovadores, aseguramos un registro ágil y sin complicaciones.",
  },
  {
    id: 4,
    question:
      "¿Puedo proteger todos mis productos y servicios con una sola solicitud de marca?",
    answer:
      "No, cada solicitud de marca debe estar dirigida a una clase específica de productos o servicios según la Clasificación de Niza. Existen 34 clases de productos y 11 de servicios. En Litvin Marzorati Legales, optimizamos tu registro para que sea lo más eficiente posible, utilizando tecnología avanzada que reduce costos y tiempos de espera.",
  },

  {
    id: 5,
    question: "¿Quién puede solicitar el registro de una marca?",
    answer:
      "Cualquier persona física o jurídica puede solicitar el registro de una marca. Además, ciertos sectores requieren acreditación de registro de marca para operaciones, como la Dirección Nacional de Aduanas en Argentina. Nuestro equipo te asesora para cumplir con todos los requisitos legales necesarios.",
  },
  {
    id: 6,
    question: "¿Cuánto tiempo lleva obtener el registro de una marca? ",
    answer:
      "El proceso de registro, en caso de no haber oposiciones, generalmente toma alrededor de 18 meses. Sin embargo, con nuestra gestión eficiente y el uso de software de última generación, trabajamos para minimizar los tiempos y costos involucrados.",
  },
  {
    id: 7,
    question: "¿Cuánto tiempo dura la protección de una marca registrada?",
    answer:
      "El registro de una marca es válido por 10 años desde la fecha de concesión y puede renovarse indefinidamente en períodos sucesivos de 10 años. Nuestro sistema de gestión automatizado te alertará cuando sea momento de renovar, para que nunca pierdas la protección de tu marca.",
  },
  {
    id: 8,
    question: "¿Cuándo es recomendable comenzar a usar mi marca?",
    answer:
      "Es aconsejable empezar a usar la marca una vez obtenida su registro para asegurar la protección legal total. En Litvin Marzorati Legales, te ayudamos a planificar una estrategia de uso que maximice la protección de tu marca desde el primer día.",
  },
  {
    id: 9,
    question:
      "¿Qué sucede si alguien intenta registrar una marca similar a la mía?",
    answer:
      "Puedes oponerte a cualquier solicitud de registro de una marca similar o idéntica dentro de los 30 días de su publicación. Nosotros te acompañamos en todo el proceso de oposición y en la defensa de tus derechos, utilizando herramientas legales avanzadas para asegurar un resultado favorable.",
  },
  {
    id: 10,
    question: "¿El registro de mi marca es válido en otros países?",
    answer:
      "No, el registro de marcas tiene validez territorial. Si necesitas protección internacional, te ayudamos a gestionar el registro en cada país donde desees proteger tu marca.",
  },
  {
    id: 11,
    question:
      "¿Por qué elegir Litvin Marzorati Legales para registrar mi marca?",
    answer:
      "En Litvin Marzorati Legales, nos destacamos por nuestra innovación y eficiencia en la protección de marcas. Utilizamos las últimas tecnologías para ofrecer soluciones de registro rápidas y económicas, asegurando que tu marca esté protegida de manera efectiva y sin complicaciones.",
  },
]

export default function FAQ() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
      <h2 className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal`}>
        Preguntas Frecuentes
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Encuentra respuestas claras y directas a las consultas más comunes.
        Estamos aquí para ayudarte.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {faqData.map((item) => (
          <Accordion key={item.id} type="single" collapsible className="w-full">
            <AccordionItem
              className="border border-gray-400 px-3 rounded-md"
              value={item.id.toString()}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="w-full text-start ">
                <div className="w-full h-[1px] bg-black mb-4" />
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
