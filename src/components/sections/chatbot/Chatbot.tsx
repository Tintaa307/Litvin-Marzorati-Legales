"use client"

import { cn } from "@/lib/utils"
import { useChat } from "@ai-sdk/react"
import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Send, X, Loader2 } from "lucide-react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hola, soy el asistente virtual de Lmlegales. Dime en que puedo ayudarte.",
      },
    ],
  })

  const [open, setOpen] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, status])

  return (
    <div
      className={cn(
        "fixed bottom-7 right-7 max-w-[200px] h-12 rounded-xl flex flex-col gap-1 bg-[#FCEFE8] shadow-2xl border border-border z-40 transition-all duration-300 ease-in-out",
        {
          "min-h-[603px] min-w-[465px] chatbot_sm:min-w-[365px] chatbot_sm:min-h-[498px] chatbot_xs:right-4 chatbot_xs:min-w-[280px]":
            open,
        }
      )}
    >
      <header
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full h-12 flex items-center justify-between cursor-pointer px-6 bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% rounded-xl hover:shadow-lg transition-all duration-200",
          {
            "border-b-[1px] border-b-black/20 px-4 py-3 rounded-b-none": open,
          }
        )}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-black font-medium font-poppins">🤖 Chatbot</h4>
        </div>
        {open && (
          <X className="w-5 h-5 text-black hover:scale-110 transition-transform duration-200" />
        )}
      </header>

      <main
        className={cn("relative flex-1 justify-start items-start hidden px-4", {
          block: open,
        })}
      >
        <div className="w-full h-[470px] chatbot_sm:h-[365px] flex flex-col gap-3 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-accent-orange/30 scrollbar-track-transparent">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] h-max flex animate-in slide-in-from-bottom-2 duration-300",
                {
                  "justify-end self-end": m.role === "user",
                  "justify-start self-start": m.role !== "user",
                }
              )}
            >
              <div
                className={cn(
                  "relative w-max h-max px-4 py-3 rounded-2xl shadow-sm",
                  {
                    "bg-[#D9D9D9] text-sm text-black rounded-br-md":
                      m.role === "user",
                    "bg-[#F9AD42] text-black text-sm rounded-bl-md":
                      m.role !== "user",
                  }
                )}
              >
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          ))}

          {/* Loader cuando está cargando */}
          {(status === "streaming" || status === "submitted") && (
            <div className="max-w-[85%] h-max flex justify-start self-start animate-in slide-in-from-bottom-2 duration-300">
              <div className="relative w-max h-max px-4 py-3 rounded-2xl rounded-bl-md bg-[#F9AD42] text-black text-sm shadow-sm">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Pensando...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          className="absolute w-full bottom-0 flex items-center justify-center py-4 border-t-[1px] border-t-black/20 z-30 left-0 bg-[#FCEFE8] rounded-b-xl"
          onSubmit={handleSubmit}
        >
          <div className="w-[90%] flex items-center gap-2 bg-white/50 rounded-full px-4 py-2 border border-black/10 focus-within:border-accent-orange/50 transition-colors duration-200">
            <input
              value={input}
              placeholder="Tu mensaje..."
              className="flex-1 h-8 text-black bg-transparent font-normal text-sm outline-none placeholder:text-black/60"
              onChange={handleInputChange}
              disabled={status === "streaming" || status === "submitted"}
            />
            <button
              type="submit"
              disabled={status === "streaming" || !input.trim()}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
                {
                  "bg-[#F9AD42] hover:bg-[#F9AD42]/80 text-black hover:scale-105":
                    status !== "streaming" &&
                    status !== "submitted" &&
                    input.trim(),
                  "bg-gray-300 text-gray-500 cursor-not-allowed":
                    status === "streaming" ||
                    status === "submitted" ||
                    !input.trim(),
                }
              )}
            >
              {status === "streaming" || status === "submitted" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
