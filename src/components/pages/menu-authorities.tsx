"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems, type Submenu, type NestedSubmenu } from "../data/menu-data"

interface MenuAuthoritiesProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuAuthorities({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuAuthoritiesProps) {
    const [showNestedSubmenu, setShowNestedSubmenu] = useState<string | null>(null)
    const [showDeepSubmenu, setShowDeepSubmenu] = useState<string | null>(null)
    const [nestedSubmenuPosition, setNestedSubmenuPosition] = useState({ top: 0, left: 0 })
    const [deepSubmenuPosition, setDeepSubmenuPosition] = useState({ top: 0, left: 0 })

    const nestedSubmenuRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const nestedSubmenuContentRef = useRef<HTMLDivElement | null>(null)
    const deepSubmenuContentRef = useRef<HTMLDivElement | null>(null)
    const menuRefInternal = useRef<HTMLDivElement | null>(null)
    const menuContentRefInternal = useRef<HTMLDivElement | null>(null)

    // Reset submenus when main menu closes
    useEffect(() => {
        if (!isOpen) {
            setShowNestedSubmenu(null)
            setShowDeepSubmenu(null)
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

    // Update deep submenu position when hovered
    useEffect(() => {
        if (showDeepSubmenu && nestedSubmenuContentRef.current) {
            const rect = nestedSubmenuContentRef.current.getBoundingClientRect()
            setDeepSubmenuPosition({
                top: rect.top,
                left: rect.right + 5, // 5px offset from the right edge
            })
        }
    }, [showDeepSubmenu])

    const handleNestedSubmenuMouseEnter = (submenuId: string) => {
        if (isOpen) {
            setShowNestedSubmenu(submenuId)
            setShowDeepSubmenu(null) // Close any deep submenu
        }
    }

    const handleDeepSubmenuMouseEnter = (submenuId: string) => {
        if (showNestedSubmenu) {
            setShowDeepSubmenu(submenuId)
        }
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)
        setShowNestedSubmenu(null)
        setShowDeepSubmenu(null)
        closeMenu() // Use the closeMenu function directly
    }

    // Helper function to check if a submenu has nested submenus
    const hasNestedSubmenus = (submenu: Submenu): boolean => {
        return !!submenu.submenus && submenu.submenus.length > 0
    }

    const renderNestedSubmenuContent = () => {
        if (!showNestedSubmenu || !isOpen) return null

        const submenu = menuItems[1].submenus.find((s) => s.id === showNestedSubmenu)
        if (!submenu || !submenu.submenus) return null

        return (
            <div
                ref={nestedSubmenuContentRef}
                className="fixed z-50 bg-white rounded-md border shadow-md p-4 w-[200px]"
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
                        if (
                            !deepSubmenuContentRef.current?.matches(":hover") &&
                            !menuRefInternal.current?.matches(":hover") &&
                            !menuContentRefInternal.current?.matches(":hover")
                        ) {
                            setShowNestedSubmenu(null)
                            setShowDeepSubmenu(null)
                        }
                    }, 50)
                }}
            >
                {(submenu.submenus as NestedSubmenu[]).map((nestedSubmenu) => (
                    <div key={nestedSubmenu.id} className="py-2">
                        {nestedSubmenu.submenus ? (
                            <div
                                className="flex items-center justify-between text-sm hover:text-accent-foreground cursor-pointer"
                                onMouseEnter={() => handleDeepSubmenuMouseEnter(nestedSubmenu.id)}
                            >
                                {nestedSubmenu.title}
                                <ChevronRight
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        showDeepSubmenu === nestedSubmenu.id ? "rotate-90" : "",
                                    )}
                                />
                            </div>
                        ) : (
                            <a
                                href={nestedSubmenu.href}
                                className="block text-sm hover:text-accent-foreground"
                                onClick={(e) => handleSubmenuClick(e, nestedSubmenu.id)}
                            >
                                {nestedSubmenu.title}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        )
    }

    const renderDeepSubmenuContent = () => {
        if (!showNestedSubmenu || !showDeepSubmenu || !isOpen) return null

        const submenu = menuItems[1].submenus.find((s) => s.id === showNestedSubmenu)
        if (!submenu || !submenu.submenus) return null

        const nestedSubmenu = (submenu.submenus as NestedSubmenu[]).find((s) => s.id === showDeepSubmenu)
        if (!nestedSubmenu || !nestedSubmenu.submenus) return null

        return (
            <div
                ref={deepSubmenuContentRef}
                className="fixed z-50 bg-white rounded-md border shadow-md p-4 w-[200px]"
                style={{
                    top: `${deepSubmenuPosition.top}px`,
                    left: `${deepSubmenuPosition.left}px`,
                }}
                onMouseEnter={() => {
                    setShowNestedSubmenu(showNestedSubmenu)
                    setShowDeepSubmenu(showDeepSubmenu)
                    onMouseEnter() // Keep parent menu open
                }}
                onMouseLeave={() => {
                    // Check if moving back to nested submenu
                    setTimeout(() => {
                        if (
                            !nestedSubmenuContentRef.current?.matches(":hover") &&
                            !menuRefInternal.current?.matches(":hover") &&
                            !menuContentRefInternal.current?.matches(":hover")
                        ) {
                            setShowDeepSubmenu(null)
                        }
                    }, 50)
                }}
            >
                {nestedSubmenu.submenus.map((deepSubmenu) => (
                    <a
                        key={deepSubmenu.id}
                        href={deepSubmenu.href}
                        className="block py-2 text-sm hover:text-accent-foreground"
                        onClick={(e) => handleSubmenuClick(e, deepSubmenu.id)}
                    >
                        {deepSubmenu.title}
                    </a>
                ))}
            </div>
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
                    if (
                        !nestedSubmenuContentRef.current?.matches(":hover") &&
                        !deepSubmenuContentRef.current?.matches(":hover")
                    ) {
                        setShowNestedSubmenu(null)
                        setShowDeepSubmenu(null)
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
                {menuItems[1].title}
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
                        {menuItems[1].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                {hasNestedSubmenus(submenu) ? (
                                    <div
                                        ref={(el) => {
                                            nestedSubmenuRefs.current[submenu.id] = el
                                        }}
                                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        onMouseEnter={() => handleNestedSubmenuMouseEnter(submenu.id)}
                                    >
                                        <div className="flex items-center justify-between text-sm font-medium leading-none cursor-pointer">
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

            {/* Render nested submenu for Authorities */}
            {renderNestedSubmenuContent()}

            {/* Render deep submenu for Authorities */}
            {renderDeepSubmenuContent()}
        </div>
    )
}

