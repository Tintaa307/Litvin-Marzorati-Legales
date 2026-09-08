import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export type Question = {
  q: string
  a: string
}

interface FAQProps {
  title: string
  subtitle: string
  questions: ReturnType<typeof useTranslations>
}

export default function FAQ({ questions, subtitle, title }: FAQProps) {
  const keys = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
    "question9",
    "question10",
    "question11",
  ] as const

  // Cada columna es independiente: una respuesta abierta solo desplaza a las preguntas de su columna.
  const columns = [keys.slice(0, 5), keys.slice(5, 10)]
  const renderItem = (key: (typeof keys)[number], index: number) => (
    <AccordionItem
              key={key}
              className={cn(
                "border border-border-hairline rounded-lg px-6 py-2 bg-surface-raised hover:border-border-control data-[state=open]:border-border-control motion-safe:transition-colors duration-200",
                {
                  "lg:col-span-2": index === keys.length - 1,
                }
              )}
              value={index.toString()}
            >
              <AccordionTrigger
                className={cn(
                  "text-left hover:no-underline font-medium text-fg-secondary data-[state=open]:text-fg-primary py-4"
                )}
              >
                {questions(`questions.${key}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-fg-secondary leading-relaxed pb-4">
                {questions(`questions.${key}.a`)}
              </AccordionContent>
            </AccordionItem>
  )

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h2
          className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal text-fg-primary`}
        >
          {title}
        </h2>
        <p className="text-fg-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="space-y-2">
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
        >
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-4">
              {column.map((key) => renderItem(key, keys.indexOf(key)))}
            </div>
          ))}
          {renderItem(keys[keys.length - 1], keys.length - 1)}
        </Accordion>
      </div>
    </section>
  )
}
