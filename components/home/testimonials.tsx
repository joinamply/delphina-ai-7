import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Lead Data Scientist",
            content: "Delphina has completely transformed how we prototype models. What used to take days now takes hours."
        },
        {
            name: "Marcus Johnson",
            role: "CTO at TechFlow",
            content: "The enterprise features are top-notch. Security and monitoring out of the box saved us months of dev time."
        },
        {
            name: "Elena Rodriguez",
            role: "AI Researcher",
            content: "I love the flexibility. Swapping between open source and proprietary models is seamless."
        }
    ]
    return (
        <section className="py-24 bg-[#1E1035] text-[#FFFDF7]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#6EE7B7]">
                    What users say about us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 text-white">
                            <CardContent className="p-8 space-y-6">
                                <p className="text-lg opacity-90 leading-relaxed italic">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="" />
                                        <AvatarFallback className="bg-[#D956A8] text-white">
                                            {t.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold">{t.name}</div>
                                        <div className="text-sm opacity-60">{t.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
