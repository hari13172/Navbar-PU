"use client"
import { useState, useRef } from "react"
import type React from "react"

import { Search, Home, Map } from "lucide-react"
import { Input } from "../../components/ui/input"
import { SearchResults } from "./search-results"
import { HeaderMenuBar } from "./header-menu-bar"

interface HeaderSearchBarProps {
    onSubmenuClick?: (submenuId: string) => void
}

export function HeaderSearchBar({ onSubmenuClick }: HeaderSearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [showResults, setShowResults] = useState(false)
    const searchContainerRef = useRef<HTMLDivElement>(null)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)
        setShowResults(value.length >= 2)
    }

    const handleResultClick = (submenuId: string) => {
        if (onSubmenuClick) {
            onSubmenuClick(submenuId)
        }
        setSearchTerm("")
        setShowResults(false)
    }

    const handleSearchFocus = () => {
        if (searchTerm.length >= 2) {
            setShowResults(true)
        }
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#003087] to-[#4b0082] py-4 shadow-lg sticky top-0 z-50">
                <div className=" px-4">
                    <div className="flex items-center justify-center gap-4">

                        <div className="flex items-center gap-4 flex-1 justify-center">
                            <a
                                href="#"
                                className="bg-[#6a0dad] text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#8a2be2] hover:shadow-md hover:-translate-y-0.5 min-w-[100px] justify-center"
                            >
                                <Home className="h-4 w-4" />
                                <span className="text-sm font-medium">Home</span>
                            </a>

                            <div className="relative w-full max-w-[650px]" ref={searchContainerRef}>
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                <Input
                                    type="search"
                                    placeholder="Search menus..."
                                    className="w-full pl-10 py-2 rounded-full bg-white/90 border-none shadow-inner"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onFocus={handleSearchFocus}
                                />

                                <SearchResults
                                    searchTerm={searchTerm}
                                    onResultClick={handleResultClick}
                                    onClose={() => setShowResults(false)}
                                    isVisible={showResults}
                                />
                            </div>

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
                <HeaderMenuBar onSubmenuClick={onSubmenuClick || (() => { })} />
            </div>
        </>


    )
}

