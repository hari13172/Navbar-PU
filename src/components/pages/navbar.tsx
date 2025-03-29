"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { TopNavbar } from "./top-navbar"

interface NavbarProps {
    onSubmenuClick: (submenuId: string) => void
}

export function Navbar({ onSubmenuClick }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex flex-col w-full">
            <div className="border-b">
                <div className="flex h-16 items-center px-4 md:px-6">
                    <div className="flex items-center gap-4">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                L
                            </div>
                            <span className="text-lg font-semibold hidden md:inline-flex">Logo</span>
                        </a>
                    </div>

                    {/* Search bar and button for desktop */}
                    <div className="ml-auto flex items-center gap-4 md:gap-6">
                        <div className="relative hidden md:flex items-center">
                            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search..." className="w-64 pl-8" />
                        </div>
                        <Button>Sign In</Button>

                        {/* Mobile menu toggle */}
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile search bar */}
                <div className={cn("md:hidden px-4 pb-4", isMenuOpen ? "block" : "hidden")}>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search..." className="w-full pl-8" />
                    </div>
                </div>
            </div>

            {/* Top navbar */}
            <TopNavbar isMenuOpen={isMenuOpen} onSubmenuClick={onSubmenuClick} />
        </div>
    )
}

