"use client"

import { useState, useEffect, useRef } from "react"
import { menuItems, type Submenu, type NestedSubmenu, type DeepSubmenu } from "../data/menu-data"

interface SearchResultsProps {
    searchTerm: string
    onResultClick: (submenuId: string) => void
    onClose: () => void
    isVisible: boolean
}

type SearchResult = {
    id: string
    title: string
    path: string[]
    href: string
}

export function SearchResults({ searchTerm, onResultClick, onClose, isVisible }: SearchResultsProps) {
    const [results, setResults] = useState<SearchResult[]>([])
    const resultsRef = useRef<HTMLDivElement>(null)

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isVisible, onClose])

    // Search through all menu items when searchTerm changes
    useEffect(() => {
        if (!searchTerm || searchTerm.length < 2) {
            setResults([])
            return
        }

        const searchResults: SearchResult[] = []
        const searchTermLower = searchTerm.toLowerCase()

        // Helper function to search recursively through menu structure
        const searchMenuItems = (
            items: Submenu[] | NestedSubmenu[] | DeepSubmenu[] | undefined,
            parentPath: string[] = [],
        ) => {
            if (!items) return

            items.forEach((item) => {
                const itemTitleLower = item.title.toLowerCase()
                const currentPath = [...parentPath, item.title]

                // Check if current item matches search term
                if (itemTitleLower.includes(searchTermLower)) {
                    searchResults.push({
                        id: item.id,
                        title: item.title,
                        path: currentPath,
                        href: item.href,
                    })
                }

                // Recursively search submenus if they exist
                if ("submenus" in item && item.submenus) {
                    searchMenuItems(item.submenus as Submenu[] | NestedSubmenu[] | DeepSubmenu[] | undefined, currentPath)
                }
            })
        }

        // Search through all main menu items
        menuItems.forEach((menu) => {
            const menuTitleLower = menu.title.toLowerCase()

            // Check if main menu title matches
            if (menuTitleLower.includes(searchTermLower)) {
                // We don't add main menu items as they don't have IDs
                // But we could add them if needed
            }

            // Search through submenus
            searchMenuItems(menu.submenus, [menu.title])
        })

        // Limit results to top 10 for better UX
        setResults(searchResults.slice(0, 10))
    }, [searchTerm])

    if (!isVisible || results.length === 0) {
        return null
    }

    return (
        <div
            ref={resultsRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-[15px] border border-[#6a0dad]/20 shadow-lg z-50 max-h-[400px] overflow-y-auto"
        >
            <div className="p-2">
                <h3 className="text-sm font-semibold text-[#003087] px-3 py-2 border-b border-gray-100">
                    Search Results ({results.length})
                </h3>
                <ul className="mt-1">
                    {results.map((result) => (
                        <li key={result.id}>
                            <button
                                onClick={() => {
                                    onResultClick(result.id)
                                    onClose()
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-[#6a0dad] hover:text-white rounded-lg transition-colors"
                            >
                                <div className="text-sm font-medium">{result.title}</div>
                                <div className="text-xs text-gray-500 truncate hover:text-white/80">{result.path.join(" > ")}</div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

