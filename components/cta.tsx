import { Button } from "@/components/ui/button"
import { Download, Monitor } from "lucide-react"

export function CTA() {
  return (
    <section className="border-y border-border/40 bg-card/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Stop overthinking it.{" "}
          <span className="text-primary">Just get ClawDaddy.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
          Join thousands of business owners, creators, and everyday people who
          are already using AI — without the headache.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8 text-base">
            <Download className="h-4 w-4" />
            Download Free
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 text-base">
            <Monitor className="h-4 w-4" />
            Order ClawMini — $1,999
          </Button>
        </div>
      </div>
    </section>
  )
}
