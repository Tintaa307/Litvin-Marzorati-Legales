import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export type Question = {
  q: string
  a: string
}

interface FAQProps {
  title: string
  subtitle: string
  questions: any
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

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h2
          className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal text-gray-900`}
        >
          {title}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="space-y-2">
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {keys.map((key, index) => (
            <AccordionItem
              key={key}
              className={cn(
                "border border-black/20 shadow-md rounded-lg px-6 py-2 bg-[#fcefe8] hover:shadow-md transition-shadow duration-200",
                {
                  "col-span-2": index === keys.length - 1,
                }
              )}
              value={index.toString()}
            >
              <AccordionTrigger
                className={cn(
                  "text-left hover:no-underline font-medium text-gray-900 py-4"
                )}
              >
                {questions(`questions.${key}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-gray-900 leading-relaxed pb-4">
                {questions(`questions.${key}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
