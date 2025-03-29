"use client"

import type React from "react"

import { useState, useRef, useEffect, JSX } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems, type Submenu, type NestedSubmenu } from "../data/menu-data"

interface MenuStudentLifeProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuStudentLife({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuStudentLifeProps) {
    const [showNestedSubmenu, setShowNestedSubmenu] = useState<string | null>(null)
    const [nestedSubmenuPosition, setNestedSubmenuPosition] = useState({ top: 0, left: 0 })

    const nestedSubmenuRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const nestedSubmenuContentRef = useRef<HTMLDivElement | null>(null)
    const menuRefInternal = useRef<HTMLDivElement | null>(null)
    const menuContentRefInternal = useRef<HTMLDivElement | null>(null)

    // Reset submenus when main menu closes
    useEffect(() => {
        if (!isOpen) {
            setShowNestedSubmenu(null)
        }
    }, [isOpen])

    // Update nested submenu position when hovered
    useEffect(() => {
        if (showNestedSubmenu && nestedSubmenuRefs.current[showNestedSubmenu]) {
            const rect = nestedSubmenuRefs.current[showNestedSubmenu]!.getBoundingClientRect()
            setNestedSubmenuPosition({
                top: rect.top,
                left: rect.right + 5, // 5px offset from the right edge
            })
        }
    }, [showNestedSubmenu])

    const handleNestedSubmenuMouseEnter = (submenuId: string) => {
        if (isOpen) {
            setShowNestedSubmenu(submenuId)
        }
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)

        // Ensure all menus close properly
        setShowNestedSubmenu(null)

        // Close the menu immediately
        closeMenu()
    }

    // Helper function to check if a submenu has nested submenus
    const hasNestedSubmenus = (submenu: Submenu): boolean => {
        return !!submenu.submenus && submenu.submenus.length > 0
    }

    const renderNestedSubmenuContent = (): JSX.Element | null => {
        if (!showNestedSubmenu || !isOpen) return null

        const submenu = menuItems[7].submenus.find((s) => s.id === showNestedSubmenu)
        if (!submenu || !submenu.submenus) return null

        return (
            renderNestedSubmenuContent() && (
                <div
                    ref={nestedSubmenuContentRef}
                    className="fixed z-50 bg-white rounded-[15px] border-0 shadow-lg p-2 w-[220px]"
                    style={{
                        top: `${nestedSubmenuPosition.top}px`,
                        left: `${nestedSubmenuPosition.left}px`,
                    }}
                    onMouseEnter={() => {
                        setShowNestedSubmenu(showNestedSubmenu)
                        onMouseEnter() // Keep parent menu open
                    }}
                    onMouseLeave={() => {
                        // Check if moving to deep submenu
                        setTimeout(() => {
                            if (!menuRefInternal.current?.matches(":hover") && !menuContentRefInternal.current?.matches(":hover")) {
                                setShowNestedSubmenu(null)
                            }
                        }, 50)
                    }}
                >
                    {(submenu.submenus as NestedSubmenu[]).map((nestedSubmenu) => (
                        <div key={nestedSubmenu.id} className="py-2">
                            <a
                                href={nestedSubmenu.href}
                                className="block text-sm text-[#003087] px-3 py-2 rounded-lg hover:bg-[#6a0dad] hover:text-white transition-colors"
                                onClick={(e) => handleSubmenuClick(e, nestedSubmenu.id)}
                            >
                                {nestedSubmenu.title}
                            </a>
                        </div>
                    ))}
                </div>
            )
        )
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
                // Also reset submenu states when leaving the main menu
                setTimeout(() => {
                    if (!nestedSubmenuContentRef.current?.matches(":hover")) {
                        setShowNestedSubmenu(null)
                    }
                }, 50)
            }}
        >
            <button
                className={cn(
                    "px-4 py-2 text-sm font-semibold text-white flex items-center gap-1 hover:text-yellow-300 transition-all rounded hover:bg-white/10",
                    isOpen ? "text-yellow-300 bg-white/10" : "",
                )}
                onMouseEnter={onMouseEnter}
            >
                {menuItems[7].title}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 top-full z-10 mt-1 w-[250px] rounded-[15px] border-0 bg-white p-2 shadow-lg"
                    ref={(el) => {
                        menuContentRefInternal.current = el
                        menuContentRef(el)
                    }}
                    onMouseEnter={onMouseEnter}
                >
                    <ul className="grid gap-1">
                        {menuItems[7].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                {hasNestedSubmenus(submenu) ? (
                                    <div
                                        ref={(el) => {
                                            nestedSubmenuRefs.current[submenu.id] = el
                                        }}
                                        className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6a0dad] hover:text-white"
                                        onMouseEnter={() => handleNestedSubmenuMouseEnter(submenu.id)}
                                    >
                                        <div className="flex items-center justify-between text-sm font-medium leading-none cursor-pointer text-[#003087]">
                                            {submenu.title}
                                            <ChevronRight
                                                className={cn(
                                                    "h-4 w-4 transition-transform duration-200",
                                                    showNestedSubmenu === submenu.id ? "rotate-90" : "",
                                                )}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        href={submenu.href}
                                        className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6a0dad] hover:text-white text-[#003087]"
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

            {/* Render nested submenu for StudentLife */}
            {renderNestedSubmenuContent()}
        </div>
    )
}

