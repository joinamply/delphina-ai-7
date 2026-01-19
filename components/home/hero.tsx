'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export function Hero() {
    return (
        <section className="bg-[#1E1035] text-[#FFFDF7] pt-24 pb-32 px-4 relative overflow-hidden">
            {/* Background Gradients/Effects could go here */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D956A8]/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6EE7B7]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-[#FFFDF7]/20 px-3 py-1 text-sm text-[#FFFDF7]/80">
                        <span className="flex h-2 w-2 rounded-full bg-[#6EE7B7] mr-2"></span>
                        v2.0 Public Beta
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        AI Agent for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D956A8] to-[#C4B5FD]">Data Science</span>
                    </h1>

                    <p className="text-xl text-[#FFFDF7]/70 max-w-lg leading-relaxed">
                        Automate your data workflow, generate insights, and build predictive models in minutes, not weeks.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button size="lg" className="bg-[#6EE7B7] text-[#1E1035] hover:bg-[#6EE7B7]/90 font-semibold h-12 px-8">
                            Start Building <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-[#FFFDF7]/20 text-[#FFFDF7] hover:bg-[#FFFDF7]/10 h-12 px-8">
                            <PlayCircle className="mr-2 w-4 h-4" /> Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Hero Visual/Graphic */}
                <div className="relative hidden lg:block">
                    {/* Abstract visual representation of data/AI */}
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D956A8]/40 to-[#6EE7B7]/40 rounded-full blur-3xl opacity-30 animate-pulse" />
                        <div className="relative border border-[#FFFDF7]/10 bg-[#FFFDF7]/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                            {/* Mock UI inside Hero */}
                            <div className="flex items-center gap-2 mb-4 border-b border-[#FFFDF7]/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="space-y-4 font-mono text-sm text-[#FFFDF7]/80">
                                <div className="flex gap-2">
                                    <span className="text-[#6EE7B7]">$</span>
                                    <span>connect_database("sales_db")</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#6EE7B7]">$</span>
                                    <span>analyze_trends(target="revenue")</span>
                                </div>
                                <div className="p-3 bg-[#1E1035]/50 rounded border border-[#FFFDF7]/10 text-xs">
                                    <span className="text-[#D956A8]">Analysis Complete:</span><br />
                                    Positive correlation found between Q3 marketing spend and user acquisition (+45%).
                                </div>
                                <div className="flex gap-2 animate-pulse">
                                    <span className="text-[#6EE7B7]">$</span>
                                    <span className="w-2 h-4 bg-[#FFFDF7]/50 block"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
