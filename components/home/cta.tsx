import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="py-24 px-4 bg-[#C4B5FD] text-[#1E1035]">
            <div className="container mx-auto relative rounded-3xl overflow-hidden bg-white/30 border border-white/50 backdrop-blur-xl p-12 md:p-24 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Ready to unleash your Data?
                    </h2>
                    <p className="text-xl opacity-80">
                        Start your 14-day free trial. No credit card required.
                    </p>
                    <Button size="lg" className="bg-[#1E1035] text-white hover:bg-[#1E1035]/80 h-14 px-8 text-lg">
                        Get Started Now
                    </Button>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
                    <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[200%] bg-gradient-to-r from-transparent via-white to-transparent rotate-12 blur-3xl"></div>
                </div>
            </div>
        </section>
    )
}
