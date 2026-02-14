import { Button } from "@/components/ui/button"
import { Check, Download, Monitor, ShieldCheck } from "lucide-react"

const plans = [
  {
    name: "Download",
    price: "Free",
    period: "",
    description: "Get ClawDaddy running on your existing Mac in minutes.",
    icon: Download,
    cta: "Download Now",
    features: [
      "One-click installer for macOS & Windows",
      "Full AI assistant capabilities",
      "Offline mode included",
      "Automatic updates",
      "Private & local by default",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "ClawMini + ClawDaddy",
    price: "$1,999",
    period: "one time",
    description:
      "We install and preconfigure your ClawDaddy AI assistant on a brand new ClawMini and ship it straight to you. Plug in and go.",
    icon: Monitor,
    cta: "Order Now",
    features: [
      "Brand new ClawMini included",
      "ClawDaddy pre-installed & configured",
      "Hardware, labor & shipping included",
      "Plug in, turn on, start talking",
      "Priority support for 1 year",
      "Extended warranty available",
    ],
    highlighted: true,
  },
  {
    name: "ClawDaddy Care",
    price: "$99",
    period: "month",
    description:
      "We keep your AI assistant updated, secure, and running smoothly. If anything goes wrong, we fix it for you.",
    icon: ShieldCheck,
    cta: "Subscribe",
    features: [
      "Automatic updates & security patches",
      "Remote troubleshooting & fixes",
      "Priority email & phone support",
      "Performance monitoring",
      "Configuration changes on request",
      "Peace of mind, hands-free",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Pick what works for you.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Download ClawDaddy for free, order a ready-to-go ClawMini,
            or let us keep everything running smoothly for you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 md:p-10 ${plan.highlighted
                ? "border-primary/40 bg-card shadow-lg shadow-primary/5"
                : "border-border/40 bg-card"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
              )}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <plan.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8"
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
