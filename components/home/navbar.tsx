import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hexagon } from "lucide-react"

export function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    {/* Logo Icon */}
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                        <Hexagon className="w-5 h-5 fill-current" />
                    </div>
                    <span>Delphina</span>
                </Link>

                <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Platform</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Solutions</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Resources</Link>
                    <Link href="/styleguide" className="hover:text-foreground transition-colors">Styleguide</Link>
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </div>
        </nav>
    )
}
