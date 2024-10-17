import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  id: number
  question: string
  answer: string
}

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
    <section className="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
      <h2 className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal`}>
        {title}
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">{subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {keys.map((key, index) => (
          <Accordion key={key} type="single" collapsible className="w-full">
            <AccordionItem
              className="border border-gray-400 px-3 rounded-md"
              value={index.toString()}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {questions(`questions.${key}.q`)}
              </AccordionTrigger>
              <AccordionContent className="w-full text-start ">
                <div className="w-full h-[1px] bg-black mb-4" />
                {questions(`questions.${key}.a`)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
