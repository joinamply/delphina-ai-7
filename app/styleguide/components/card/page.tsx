import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CardPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 pb-4 border-b">
                <h2 className="text-3xl font-bold tracking-tight">Card</h2>
                <p className="text-muted-foreground text-lg">Displays a card with header, content, and footer.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Simple Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                        <CardDescription>Overview of the current task.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Cards are versatile containers used to group related content. They can include headers, footers, and various other components.</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-xs text-muted-foreground">Updated 2 minutes ago</p>
                    </CardFooter>
                </Card>

                {/* Interactive Card */}
                <Card className="flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>Interact</CardTitle>
                        <CardDescription>A card with action buttons.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Use cards for actionable content like dashboards, settings, or lists.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save</Button>
                    </CardFooter>
                </Card>

                {/* Secondary styling */}
                <Card className="bg-muted text-muted-foreground border-none shadow-none">
                    <CardHeader>
                        <CardTitle>Muted Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Sometimes you need a card that sits in the background.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
