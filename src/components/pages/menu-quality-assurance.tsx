"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems, type Submenu, type NestedSubmenu } from "../data/menu-data"

interface MenuQualityAssuranceProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onClick: () => void  // Added onClick prop
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuQualityAssurance({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onClick,  // Added to props
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuQualityAssuranceProps) {
    const [showNestedSubmenu, setShowNestedSubmenu] = useState<string | null>(null)
    const [showDeepSubmenu, setShowDeepSubmenu] = useState<string | null>(null)
    const [nestedSubmenuPosition, setNestedSubmenuPosition] = useState({ top: 0, left: 0 })
    const [deepSubmenuPosition, setDeepSubmenuPosition] = useState({ top: 0, left: 0 })

    const nestedSubmenuRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const nestedSubmenuContentRef = useRef<HTMLDivElement | null>(null)
    const deepSubmenuContentRef = useRef<HTMLDivElement | null>(null)
    const menuRefInternal = useRef<HTMLDivElement | null>(null)
    const menuContentRefInternal = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isOpen) {
            setShowNestedSubmenu(null)
            setShowDeepSubmenu(null)
        }
    }, [isOpen])

    useEffect(() => {
        if (showNestedSubmenu && nestedSubmenuRefs.current[showNestedSubmenu]) {
            const rect = nestedSubmenuRefs.current[showNestedSubmenu]!.getBoundingClientRect()
            setNestedSubmenuPosition({
                top: rect.top,
                left: rect.left - 230,
            })
        }
    }, [showNestedSubmenu])

    useEffect(() => {
        if (showDeepSubmenu && nestedSubmenuContentRef.current) {
            const rect = nestedSubmenuContentRef.current.getBoundingClientRect()
            setDeepSubmenuPosition({
                top: rect.top,
                left: rect.left - 223,
            })
        }
    }, [showDeepSubmenu])

    const handleNestedSubmenuMouseEnter = (submenuId: string) => {
        if (isOpen) {
            setShowNestedSubmenu(submenuId)
            setShowDeepSubmenu(null)
        }
    }

    const handleNestedSubmenuClick = (submenuId: string) => {
        setShowNestedSubmenu(prev => prev === submenuId ? null : submenuId)
        setShowDeepSubmenu(null)
    }

    const handleDeepSubmenuMouseEnter = (submenuId: string) => {
        if (showNestedSubmenu) {
            setShowDeepSubmenu(submenuId)
        }
    }

    const handleDeepSubmenuClick = (submenuId: string) => {
        setShowDeepSubmenu(prev => prev === submenuId ? null : submenuId)
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)
        setShowNestedSubmenu(null)
        setShowDeepSubmenu(null)
        closeMenu()
    }

    const hasNestedSubmenus = (submenu: Submenu): boolean => {
        return !!submenu.submenus && submenu.submenus.length > 0
    }

    const renderNestedSubmenuContent = () => {
        if (!showNestedSubmenu || !isOpen) return null

        const submenu = menuItems[8].submenus.find((s) => s.id === showNestedSubmenu)
        if (!submenu || !submenu.submenus) return null

        return (
            <div
                ref={nestedSubmenuContentRef}
                className="fixed z-50 bg-white rounded-[15px] border-0 shadow-lg p-2 w-[220px]"
                style={{
                    top: `${nestedSubmenuPosition.top}px`,
                    left: `${nestedSubmenuPosition.left}px`,
                }}
                onMouseEnter={() => {
                    setShowNestedSubmenu(showNestedSubmenu)
                    onMouseEnter()
                }}
                onMouseLeave={() => {
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
                                className="flex items-center justify-between text-sm text-[#003087] hover:text-white px-3 py-2 rounded-lg hover:bg-[#6a0dad] cursor-pointer transition-colors"
                                onMouseEnter={() => handleDeepSubmenuMouseEnter(nestedSubmenu.id)}
                                onClick={() => handleDeepSubmenuClick(nestedSubmenu.id)}  // Added click handler
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
                                className="block text-sm text-[#003087] px-3 py-2 rounded-lg hover:bg-[#6a0dad] hover:text-white transition-colors"
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

        const submenu = menuItems[8].submenus.find((s) => s.id === showNestedSubmenu)
        if (!submenu || !submenu.submenus) return null

        const nestedSubmenu = (submenu.submenus as NestedSubmenu[]).find((s) => s.id === showDeepSubmenu)
        if (!nestedSubmenu || !nestedSubmenu.submenus) return null

        return (
            <div
                ref={deepSubmenuContentRef}
                className="fixed z-50 bg-white rounded-[15px] border-0 shadow-lg p-2 w-[220px]"
                style={{
                    top: `${deepSubmenuPosition.top}px`,
                    left: `${deepSubmenuPosition.left}px`,
                }}
                onMouseEnter={() => {
                    setShowNestedSubmenu(showNestedSubmenu)
                    setShowDeepSubmenu(showDeepSubmenu)
                    onMouseEnter()
                }}
                onMouseLeave={() => {
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
                        className="block py-2 px-3 text-sm text-[#003087] rounded-lg hover:bg-[#6a0dad] hover:text-white transition-colors"
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
                    "px-4 py-2 text-sm font-semibold text-white flex items-center gap-1 hover:text-yellow-300 transition-all rounded hover:bg-white/10",
                    isOpen ? "text-yellow-300 bg-white/10" : "",
                )}
                onMouseEnter={onMouseEnter}
                onClick={onClick}  // Added onClick handler
            >
                {menuItems[8].title}
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
                        {menuItems[8].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                {hasNestedSubmenus(submenu) ? (
                                    <div
                                        ref={(el) => {
                                            nestedSubmenuRefs.current[submenu.id] = el
                                        }}
                                        className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6a0dad] hover:text-white"
                                        onMouseEnter={() => handleNestedSubmenuMouseEnter(submenu.id)}
                                        onClick={() => handleNestedSubmenuClick(submenu.id)}  // Added click handler
                                    >
                                        <div className="flex items-center justify-between text-sm font-medium leading-none cursor-pointer text-[#003087] hover:text-white">
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

            {renderNestedSubmenuContent()}
            {renderDeepSubmenuContent()}
        </div>
    )
}