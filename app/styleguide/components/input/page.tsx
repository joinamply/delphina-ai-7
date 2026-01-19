import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// Note: Label is not installed yet, so using standard label for Demo or I should install it.
// Actually, simple input showcase for now.

export default function InputPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 pb-4 border-b">
                <h2 className="text-3xl font-bold tracking-tight">Input</h2>
                <p className="text-muted-foreground text-lg">Displays a form input field or a component that looks like an input.</p>
            </div>

            <div className="grid gap-6 max-w-sm">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="text" className="text-sm font-medium leading-none">Text</label>
                    <Input type="text" id="text" placeholder="Type something..." />
                </div>

                <div className="space-y-2">
                    <label htmlFor="file" className="text-sm font-medium leading-none">File</label>
                    <Input id="file" type="file" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="disabled" className="text-sm font-medium leading-none">Disabled</label>
                    <Input disabled type="email" id="disabled" placeholder="Email" />
                </div>

                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </div>
        </div>
    )
}
