"use client"
import { Home, Map } from "lucide-react"
import { HeaderSearchBar } from "./header-search-bar"

interface HeaderNavigationBarProps {
    onSubmenuClick?: (submenuId: string) => void
}

export function HeaderNavigationBar({ onSubmenuClick }: HeaderNavigationBarProps) {
    return (
        <div className="bg-gradient-to-r from-[#003087] to-[#4b0082] py-4 shadow-lg sticky top-[calc(var(--university-info-height,_152px))] z-30">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="/images/university-logo.png"
                                alt="Periyar University Logo"
                                className="h-10 w-10 object-contain filter drop-shadow-md"
                            />
                        </a>
                    </div>

                    <div className="flex items-center gap-4 flex-1 justify-center">
                        <a
                            href="#"
                            className="bg-[#6a0dad] text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#8a2be2] hover:shadow-md hover:-translate-y-0.5 min-w-[100px] justify-center"
                        >
                            <Home className="h-4 w-4" />
                            <span className="text-sm font-medium">Home</span>
                        </a>

                        <HeaderSearchBar onSubmenuClick={onSubmenuClick} />

                        <a
                            href="#"
                            className="bg-[#6a0dad] text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#8a2be2] hover:shadow-md hover:-translate-y-0.5 min-w-[100px] justify-center"
                        >
                            <Map className="h-4 w-4" />
                            <span className="text-sm font-medium">Roadmap</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

