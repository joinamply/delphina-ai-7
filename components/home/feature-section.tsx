import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// import Image from "next/image" // Using div placeholders for now

interface FeatureSectionProps {
    badge: string
    title: string
    description: string
    buttonText?: string
    imageSide?: "left" | "right"
    className?: string
    // For placeholder image colors
    accentColor?: string
}

export function FeatureSection({
    badge,
    title,
    description,
    buttonText = "Learn more",
    imageSide = "right",
    className,
    accentColor = "bg-primary"
}: FeatureSectionProps) {
    return (
        <section className={cn("py-20 md:py-32 overflow-hidden", className)}>
            <div className="container mx-auto px-4">
                <div className={cn(
                    "flex flex-col gap-12 lg:gap-20 items-center",
                    imageSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
                )}>
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5">
                            {badge}
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E1035]">
                            {title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            {description}
                        </p>
                        <Button variant="outline" className="group">
                            {buttonText} <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                        </Button>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex-1 w-full relative">
                        <div className={cn(
                            "aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50 relative p-6 flex items-center justify-center bg-white",
                            // subtle background decoration
                        )}>
                            <div className={cn("absolute inset-0 opacity-10", accentColor)} />
                            {/* Abstract Placeholder Visual */}
                            <div className="w-full h-full border-2 border-dashed border-muted-foreground/20 rounded-xl flex items-center justify-center text-muted-foreground/30 font-mono text-sm">
                                {badge} Visual
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
