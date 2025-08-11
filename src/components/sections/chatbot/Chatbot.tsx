"use client"

import { cn } from "@/lib/utils"
import { useChat } from "@ai-sdk/react"
import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Send, X, Loader2, User } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Bot } from "@/components/animate-ui/icons/bot"

export default function Chat() {
  const t = useTranslations("chatbot")
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: t("welcome"),
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

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="trigger"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setOpen(true)}
            className="group relative w-16 h-16 bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
          >
            <Bot animateOnHover size={34} className="text-white" />
          </motion.button>
        ) : (
          <motion.div
            key="chat"
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className="w-[480px] h-[680px] chatbot_sm:w-[400px] chatbot_sm:h-[600px] chatbot_xs:w-[360px] chatbot_xs:h-[560px] bg-[#FCEFE8] rounded-3xl shadow-2xl border border-black/5 flex flex-col overflow-hidden backdrop-blur-sm"
          >
            <motion.header
              className="relative bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% px-6 py-5 flex items-center justify-between"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              <div className="flex items-center gap-4">
                <motion.div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot
                    size={24}
                    animation="blink"
                    loop
                    animate
                    loopDelay={1000}
                    className="text-white"
                  />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-base">
                    Asistente Virtual
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-white/90 text-sm">En línea</p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 group backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-200" />
              </motion.button>
            </motion.header>

            <main className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-accent-orange/30 scrollbar-track-transparent">
                {messages.map((m, index) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn("flex flex-col", {
                      "items-end": m.role === "user",
                      "items-start": m.role !== "user",
                    })}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] px-5 py-4 rounded-2xl shadow-lg relative backdrop-blur-sm",
                        {
                          "bg-[#FCEFE8] text-black rounded-br-md border border-black/10":
                            m.role === "user",
                          "bg-[#F9AD42] text-black rounded-bl-md border border-orange-300/20":
                            m.role !== "user",
                        }
                      )}
                    >
                      {m.role !== "user" && (
                        <div className="absolute -left-4 top-2 w-8 h-8 bg-gradient-to-r from-accent-brown to-accent-orange rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {m.role === "user" && (
                        <div className="absolute -right-4 top-2 w-8 h-8 bg-gradient-to-r from-accent-brown to-accent-orange rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="text-sm leading-relaxed font-medium">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                    <div
                      className={cn("text-xs text-black/50 mt-1 px-2", {
                        "text-right": m.role === "user",
                        "text-left": m.role !== "user",
                      })}
                    >
                      {getCurrentTime()}
                    </div>
                  </motion.div>
                ))}

                {(status === "streaming" || status === "submitted") && (
                  <motion.div
                    className="flex flex-col items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="max-w-[80%] px-5 py-4 rounded-2xl rounded-bl-md bg-[#F9AD42] text-black shadow-lg relative backdrop-blur-sm border border-orange-300/20">
                      <div className="absolute -left-4 top-2 w-8 h-8 bg-gradient-to-r from-accent-brown to-accent-orange rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="flex gap-1">
                          <motion.div
                            className="w-2 h-2 bg-black/60 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0,
                            }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-black/60 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0.2,
                            }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-black/60 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0.4,
                            }}
                          />
                        </div>
                        <span className="text-black/70 font-medium">
                          {t("loader")}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-black/50 mt-1 px-2 text-left">
                      {getCurrentTime()}
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <motion.form
                className="p-6 border-t border-black/10 bg-[#FCEFE8]/80 backdrop-blur-sm"
                onSubmit={handleSubmit}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-black/5 focus-within:border-accent-orange/50 focus-within:shadow-xl transition-all duration-300">
                  <input
                    value={input}
                    placeholder={t("placeholder")}
                    className="flex-1 bg-transparent text-black text-sm outline-none placeholder:text-black/50 font-medium"
                    onChange={handleInputChange}
                    disabled={status === "streaming" || status === "submitted"}
                  />
                  <motion.button
                    type="submit"
                    disabled={status === "streaming" || !input.trim()}
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 relative overflow-hidden shadow-md",
                      {
                        "bg-gradient-to-r from-accent-brown to-accent-orange text-white hover:shadow-lg":
                          status !== "streaming" &&
                          status !== "submitted" &&
                          input.trim(),
                        "bg-gray-200 text-gray-400 cursor-not-allowed":
                          status === "streaming" ||
                          status === "submitted" ||
                          !input.trim(),
                      }
                    )}
                    whileHover={{
                      scale: status !== "streaming" && input.trim() ? 1.05 : 1,
                    }}
                    whileTap={{
                      scale: status !== "streaming" && input.trim() ? 0.95 : 1,
                    }}
                  >
                    {status === "streaming" || status === "submitted" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </motion.form>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
