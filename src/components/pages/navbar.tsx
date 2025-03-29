"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { TopNavbar } from "./top-navbar"
import { Header } from "./header"

interface NavbarProps {
    onSubmenuClick: (submenuId: string) => void
}

export function Navbar({ onSubmenuClick }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex flex-col w-full sticky top-0 z-50">
            {/* Header component with university info */}
            <Header onSubmenuClick={onSubmenuClick} />

            {/* Top navbar */}
            <div className="bg-gradient-to-r from-[#003087] to-[#4b0082] shadow-lg border-b border-white/20">
                <div className="container mx-auto">
                    <div className="md:hidden px-4 py-3 flex justify-end">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:bg-white/10"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>

                    <TopNavbar isMenuOpen={isMenuOpen} onSubmenuClick={onSubmenuClick} />
                </div>
            </div>
        </div>
    )
}

