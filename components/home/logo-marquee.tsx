export function LogoMarquee() {
    const logos = [
        "Acme Corp", "Quantum", "Echo", "Nebula", "Vertex", "Horizon"
    ]

    return (
        <section className="bg-background py-10 border-b">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                    Trusted by innovative teams at
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, i) => (
                        <div key={i} className="text-xl font-bold flex items-center gap-2">
                            {/* Placeholder Logo Icon */}
                            <div className="w-6 h-6 bg-foreground/20 rounded-full" />
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
