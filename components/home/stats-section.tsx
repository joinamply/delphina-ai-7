export function StatsSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-[#6EE7B7]/20 text-[#6EE7B7] text-sm font-semibold mb-6">
                        Impact at Scale
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        What numbers say about us
                    </h2>
                    <p className="opacity-80 text-lg leading-relaxed">
                        Join thousands of data scientists who are accelerating their workflow with Delphina.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="text-5xl font-bold text-[#6EE7B7] mb-2">50%</div>
                        <div className="text-sm opacity-70">Faster Delivery</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="text-5xl font-bold text-[#D956A8] mb-2">20:1</div>
                        <div className="text-sm opacity-70">ROI within 6 months</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
