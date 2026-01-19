import { Hexagon } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#1E1035] text-[#FFFDF7] border-t border-white/10 pt-20 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6 md:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-3xl">
                            {/* Logo Icon */}
                            <div className="w-10 h-10 rounded-lg bg-[#DE54A6] text-white flex items-center justify-center">
                                <Hexagon className="w-6 h-6 fill-current" />
                            </div>
                            <span className="text-[#DE54A6]">DELPHINA</span>
                        </div>
                        <p className="max-w-xs opacity-60">
                            The AI infrastructure platform for modern data teams.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-[#6EE7B7]">Product</h4>
                        <ul className="space-y-4 opacity-70 cursor-pointer">
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Features</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Integrations</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Pricing</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Changelog</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-[#6EE7B7]">Company</h4>
                        <ul className="space-y-4 opacity-70 cursor-pointer">
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">About Us</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Careers</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Blog</li>
                            <li className="hover:opacity-100 hover:text-[#D1FAE5]">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between opacity-40 text-sm">
                    <p>© 2026 Delphina AI Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
