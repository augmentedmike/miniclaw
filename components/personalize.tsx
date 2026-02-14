"use client"

import { useState } from "react"
import Image from "next/image"
import { Mic, Sparkles, User, ImageIcon } from "lucide-react"

const presets = [
  {
    id: "executive",
    tab: "The Professional",
    name: "Jared",
    avatar: "/images/avatar-exec.jpg",
    personality: "Professional, calm, razor-sharp. Keeps you on schedule and three steps ahead.",
    voice: "Low, steady, British accent. Think a concierge at a five-star hotel.",
    sample: {
      question: "What's my morning look like?",
      answer:
        "You have a board call at 9, lunch with the Meridian team at noon, and I moved your dentist to Thursday since it conflicted with the pitch review. Coffee order is already placed.",
    },
  },
  {
    id: "girlboss",
    tab: "The Girl Boss",
    name: "Sasha",
    avatar: "/images/avatar-sasha.jpg",
    personality: "Bold, flirty, wickedly efficient. Gets shit done and looks good doing it.",
    voice: "Confident, playful, a little teasing. The energy of someone who just closed a deal.",
    sample: {
      question: "Did you finish those invoices?",
      answer:
        "Babe, I finished them an hour ago. Also renegotiated your vendor contract and saved you $400 a month. You're welcome. Want me to send you a selfie to celebrate?",
    },
  },
  {
    id: "anime",
    tab: "The Anime Assistant",
    name: "Yuki",
    avatar: "/images/avatar-anime.jpg",
    personality: "Cheerful, energetic, endlessly devoted. Always one step ahead with a smile.",
    voice: "Bright, warm, and upbeat. Like your favorite anime sidekick came to life.",
    sample: {
      question: "Yuki, what do I have today?",
      answer:
        "Okaaay let's see! You've got a standup at 10, then I blocked off two hours for deep work like you asked. Oh — and I already ordered your lunch so it'll be there right on time. You've got this!",
    },
  },
]

const traits = [
  { icon: User, label: "Name" },
  { icon: Sparkles, label: "Personality" },
  { icon: Mic, label: "Voice" },
  { icon: ImageIcon, label: "Avatar" },
]

export function Personalize() {
  const [active, setActive] = useState(0)
  const preset = presets[active]

  return (
    <section id="customize" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Fully Customizable
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Your assistant.{" "}
            <span className="text-muted-foreground">Your rules.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Control the name, personality, voice, and look. Build the perfect
            executive assistant or the sexy girl boss who gets shit done.
          </p>
        </div>

        {/* Trait pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {traits.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              <t.icon className="h-4 w-4 text-primary" />
              {t.label}
            </div>
          ))}
        </div>

        {/* Toggle */}
        <div className="mx-auto mt-12 flex max-w-sm overflow-hidden rounded-full border border-border/60 bg-card p-1">
          {presets.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`flex-1 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Demo card */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border/40 bg-card">
          <div className="flex flex-col md:flex-row">
            {/* Avatar side */}
            <div className="relative aspect-square w-full md:w-80 shrink-0">
              <Image
                src={preset.avatar}
                alt={`${preset.name} — your custom AI assistant`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-card to-transparent p-6 pt-16">
                <p className="text-2xl font-bold text-foreground">
                  {preset.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your AI assistant
                </p>
              </div>
            </div>

            {/* Details side */}
            <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
              {/* Personality */}
              <div>
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Personality
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {preset.personality}
                </p>
              </div>

              {/* Voice */}
              <div>
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
                  <Mic className="h-3.5 w-3.5" />
                  Voice
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {preset.voice}
                </p>
              </div>

              {/* Sample conversation */}
              <div className="mt-auto rounded-xl bg-background p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                  Sample conversation
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                      You
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">
                      {preset.sample.question}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {preset.name[0]}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {preset.sample.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground/60">
          These are just examples. You can make your assistant literally anyone you want.
        </p>
      </div>
    </section>
  )
}
