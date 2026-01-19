'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Code, BarChart3, Fingerprint } from "lucide-react"

export function TabsSection() {
    return (
        <section className="py-24 bg-[#1E1035] text-[#FFFDF7]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Unified Platform</h2>
                    <p className="text-[#FFFDF7]/70 text-lg">
                        Everything you need to build, deploy, and monitor AI agents in one place.
                    </p>
                </div>

                <Tabs defaultValue="develop" className="w-full max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-4 bg-[#FFFDF7]/10 p-1 rounded-xl mb-12">
                        <TabsTrigger value="develop" className="data-[state=active]:bg-[#6EE7B7] data-[state=active]:text-[#1E1035]">
                            <Code className="w-4 h-4 mr-2 hidden md:block" /> Develop
                        </TabsTrigger>
                        <TabsTrigger value="deploy" className="data-[state=active]:bg-[#6EE7B7] data-[state=active]:text-[#1E1035]">
                            <Bot className="w-4 h-4 mr-2 hidden md:block" /> Deploy
                        </TabsTrigger>
                        <TabsTrigger value="monitor" className="data-[state=active]:bg-[#6EE7B7] data-[state=active]:text-[#1E1035]">
                            <BarChart3 className="w-4 h-4 mr-2 hidden md:block" /> Monitor
                        </TabsTrigger>
                        <TabsTrigger value="secure" className="data-[state=active]:bg-[#6EE7B7] data-[state=active]:text-[#1E1035]">
                            <Fingerprint className="w-4 h-4 mr-2 hidden md:block" /> Secure
                        </TabsTrigger>
                    </TabsList>

                    {["develop", "deploy", "monitor", "secure"].map((tab) => (
                        <TabsContent key={tab} value={tab}>
                            <Card className="bg-[#FFFDF7]/5 border-[#FFFDF7]/10 text-[#FFFDF7]">
                                <CardContent className="p-8 md:p-12 min-h-[400px] flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-[#D956A8] mx-auto flex items-center justify-center">
                                            {/* Icon based on tab? */}
                                            {tab === 'develop' && <Code className="w-8 h-8 text-white" />}
                                            {tab === 'deploy' && <Bot className="w-8 h-8 text-white" />}
                                            {tab === 'monitor' && <BarChart3 className="w-8 h-8 text-white" />}
                                            {tab === 'secure' && <Fingerprint className="w-8 h-8 text-white" />}
                                        </div>
                                        <h3 className="text-2xl font-bold capitalize">{tab} your Agents</h3>
                                        <p className="max-w-md mx-auto opacity-70">
                                            Advanced tooling to {tab} your AI models with enterprise-grade reliability and speed.
                                        </p>
                                        {/* Visual placeholder */}
                                        <div className="mt-8 rounded-lg bg-black/30 h-40 w-full max-w-lg mx-auto border border-white/10" />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
