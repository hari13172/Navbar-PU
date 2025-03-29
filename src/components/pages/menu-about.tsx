"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems } from "../data/menu-data"

interface MenuAboutProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onSubmenuClick: (submenuId: string) => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuAbout({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onSubmenuClick,
    menuRef,
    menuContentRef,
}: MenuAboutProps) {
    const [showCampusSubmenu, setShowCampusSubmenu] = useState(false)
    const [campusSubmenuPosition, setCampusSubmenuPosition] = useState({ top: 0, left: 0 })
    const campusRef = useRef<HTMLDivElement>(null)
    const campusSubmenuRef = useRef<HTMLDivElement | null>(null)
    const menuRefInternal = useRef<HTMLDivElement | null>(null)
    const menuContentRefInternal = useRef<HTMLDivElement | null>(null)

    // Reset campus submenu when main menu closes
    useEffect(() => {
        if (!isOpen) {
            setShowCampusSubmenu(false)
        }
    }, [isOpen])

    // Update campus submenu position when Campus item is hovered
    useEffect(() => {
        if (campusRef.current && showCampusSubmenu) {
            const rect = campusRef.current.getBoundingClientRect()
            setCampusSubmenuPosition({
                top: rect.top,
                left: rect.right + 5, // 5px offset from the right edge
            })
        }
    }, [showCampusSubmenu])

    const handleCampusMouseEnter = () => {
        if (isOpen) {
            setShowCampusSubmenu(true)
        }
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)
        setShowCampusSubmenu(false)

        // Force the parent menu to close by calling onMouseLeave
        onMouseLeave()
    }

    return (
        <div
            className="relative"
            ref={(el) => {
                menuRefInternal.current = el
                menuRef(el)
            }}
            onMouseLeave={() => {
                onMouseLeave()
                // Also reset campus submenu state when leaving the main menu
                setTimeout(() => {
                    if (!campusSubmenuRef.current?.matches(":hover")) {
                        setShowCampusSubmenu(false)
                    }
                }, 50)
            }}
        >
            <button
                className={cn(
                    "px-4 py-2 text-sm font-medium flex items-center gap-1",
                    isOpen ? "text-primary" : "text-foreground",
                )}
                onMouseEnter={onMouseEnter}
            >
                {menuItems[0].title}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 top-full z-10 mt-1 w-[250px] rounded-md border bg-popover p-4 shadow-md"
                    ref={(el) => {
                        menuContentRefInternal.current = el
                        menuContentRef(el)
                    }}
                    onMouseEnter={onMouseEnter}
                >
                    <ul className="grid gap-3">
                        {menuItems[0].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                {submenu.id === "campus" ? (
                                    <div
                                        ref={campusRef}
                                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        onMouseEnter={handleCampusMouseEnter}
                                    >
                                        <div className="flex items-center justify-between text-sm font-medium leading-none cursor-pointer">
                                            {submenu.title}
                                            <ChevronRight
                                                className={cn(
                                                    "h-4 w-4 transition-transform duration-200",
                                                    showCampusSubmenu ? "rotate-90" : "",
                                                )}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        href={submenu.href}
                                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        onClick={(e) => handleSubmenuClick(e, submenu.id)}
                                    >
                                        <div className="text-sm font-medium leading-none">{submenu.title}</div>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Separate campus submenu that appears outside the main dropdown */}
            {showCampusSubmenu && isOpen && (
                <div
                    ref={campusSubmenuRef}
                    className="fixed z-50 bg-white rounded-md border shadow-md p-4 w-[200px]"
                    style={{
                        top: `${campusSubmenuPosition.top}px`,
                        left: `${campusSubmenuPosition.left}px`,
                    }}
                    onMouseEnter={() => {
                        setShowCampusSubmenu(true)
                        onMouseEnter() // Keep About menu open
                    }}
                    onMouseLeave={() => {
                        // Check if moving back to main menu
                        setTimeout(() => {
                            if (!menuRefInternal.current?.matches(":hover") && !menuContentRefInternal.current?.matches(":hover")) {
                                setShowCampusSubmenu(false)
                            }
                        }, 50)
                    }}
                >
                    {menuItems[0].submenus
                        .find((submenu) => submenu.id === "campus")
                        ?.submenus?.map((campusSubmenu) => (
                            <a
                                key={campusSubmenu.id}
                                href={campusSubmenu.href}
                                className="block py-2 text-sm hover:text-accent-foreground"
                                onClick={(e) => handleSubmenuClick(e, campusSubmenu.id)}
                            >
                                {campusSubmenu.title}
                            </a>
                        ))}
                </div>
            )}
        </div>
    )
}

