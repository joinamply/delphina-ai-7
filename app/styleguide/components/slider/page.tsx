'use client'

import { Slider } from "@/components/ui/slider"
// Wrapper to add state
import * as React from "react"
import { cn } from "@/lib/utils"

export default function SliderPage() {
    const [val, setVal] = React.useState([50])

    return (
        <div className="space-y-8">
            <div className="space-y-2 pb-4 border-b">
                <h2 className="text-3xl font-bold tracking-tight">Slider</h2>
                <p className="text-muted-foreground text-lg">An input where the user selects a value from within a given range.</p>
            </div>

            <div className="grid gap-12 max-w-lg">
                <div className="space-y-4">
                    <h3 className="font-semibold">Default</h3>
                    <Slider defaultValue={[33]} max={100} step={1} />
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">Interactive Value: {val}</h3>
                    <Slider
                        value={val}
                        onValueChange={setVal}
                        max={100}
                        step={1}
                        className={cn("w-[60%]")}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">Range (Multiple Thumbs)</h3>
                    <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
            </div>
        </div>
    )
}
