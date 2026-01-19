"use client"

import { cn } from "@/lib/utils"

function Swatch({ color, label, hex }: { color: string, label?: string, hex?: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div
                className="w-24 h-20 rounded-xl border shadow-sm"
                style={{ backgroundColor: color }}
            />
            <div className="flex flex-col">
                {label && <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">{label}</span>}
                {hex && <span className="text-[10px] font-mono opacity-50">{hex}</span>}
            </div>
        </div>
    )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-6">
            <h3 className="text-sm font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-8">
                {children}
            </div>
        </div>
    )
}

export default function StyleguidePage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7] text-[#1E1035] p-12 font-sans">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <div className="space-y-6 border-b border-[#1E1035]/10 pb-8">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1E1035]/70">
                        <span className="text-2xl">❄️</span> DELPHINA
                    </div>
                    <h1 className="text-4xl font-serif tracking-tight">HEX Color Codes</h1>
                </div>

                {/* Background */}
                <Section title="Background">
                    <Swatch color="#FFFDF7" label="Light" hex="#FFFDF7" />
                    <Swatch color="#1E1035" label="Dark" hex="#1E1035" />
                    <Swatch color="#D1FAE5" label="Mint" hex="#D1FAE5" />
                </Section>

                {/* Surface */}
                <Section title="Surface">
                    <Swatch color="#D956A8" label="01" hex="#D956A8" />
                    <Swatch color="#C4B5FD" label="02" hex="#C4B5FD" />
                </Section>

                {/* Pattern */}
                <Section title="Pattern">
                    <Swatch color="#F5D0FE" label="01" hex="#F5D0FE" />
                    <Swatch color="#FFFDF7" label="02" hex="#FFFDF7" />
                    <Swatch color="#C4B5FD" label="03" hex="#C4B5FD" />
                    <Swatch color="#6EE7B7" label="04" hex="#6EE7B7" />
                    <Swatch color="#FDA4AF" label="05" hex="#FDA4AF" />
                </Section>

                {/* Outlines */}
                <Section title="Outlines">
                    <Swatch color="#FFFDF7" label="01" hex="#FFFDF7" />
                    <Swatch color="#1E1035" label="02" hex="#1E1035" />
                    <Swatch color="#9ca3af" label="03" hex="#9CA3AF" />
                    <Swatch color="#6b7280" label="04" hex="#6B7280" />
                </Section>

                {/* Illustrations */}
                <Section title="Illustrations">
                    <Swatch color="#1E1035" label="Primary" hex="#1E1035" />
                    <Swatch color="#6EE7B7" label="Secondary" hex="#6EE7B7" />
                    <Swatch color="#C4B5FD" label="Tertiary" hex="#C4B5FD" />
                    <Swatch color="#FB7185" label="Quaternary" hex="#FB7185" />
                    <Swatch color="#D956A8" label="Quinary" hex="#D956A8" />
                    <Swatch color="#FFFDF7" label="Outline 1" hex="#FFFDF7" />
                    <Swatch color="#1E1035" label="Outline 2" hex="#1E1035" />
                </Section>

                {/* Icons */}
                <Section title="Icons">
                    <Swatch color="#4c1d95" label="01" hex="#4C1D95" />
                    <Swatch color="#451a03" label="02" hex="#451A03" />
                    <Swatch color="#1e1b4b" label="03" hex="#1E1B4B" />
                    <Swatch color="#064e3b" label="04" hex="#064E3B" />
                    <Swatch color="#450a0a" label="05" hex="#450A0A" />
                </Section>

                {/* Text */}
                <Section title="Text">
                    <Swatch color="#4c1d95" label="01" hex="#4C1D95" />
                    <Swatch color="#451a03" label="02" hex="#451A03" />
                    <Swatch color="#1e1b4b" label="03" hex="#1E1B4B" />
                    <Swatch color="#064e3b" label="04" hex="#064E3B" />
                    <Swatch color="#450a0a" label="05" hex="#450A0A" />
                </Section>

                {/* Action */}
                <Section title="Action">
                    <Swatch color="#6EE7B7" label="01" hex="#6EE7B7" />
                    <Swatch color="#1E1035" label="02" hex="#1E1035" />
                    <Swatch color="#FFFDF7" label="03" hex="#FFFDF7" />
                </Section>

            </div>
        </div>
    )
}
