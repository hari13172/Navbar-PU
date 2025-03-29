"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { TopNavbar } from "./top-navbar"

interface HeaderMenuBarProps {
    onSubmenuClick: (submenuId: string) => void
}

export function HeaderMenuBar({ onSubmenuClick }: HeaderMenuBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        // <div className="bg-gradient-to-r from-[#003087] to-[#4b0082] shadow-lg border-b border-white/20 sticky top-[64px] z-40">
        <div className="container mx-auto mt-4">
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
        // </div>
    )
}

