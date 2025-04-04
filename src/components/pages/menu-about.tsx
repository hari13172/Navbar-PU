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
    onClick: () => void  // Added onClick prop
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuAbout({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onClick,  // Added to props
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuAboutProps) {
    const [showCampusSubmenu, setShowCampusSubmenu] = useState(false)
    const [campusSubmenuPosition, setCampusSubmenuPosition] = useState({ top: 0, left: 0 })
    const campusRef = useRef<HTMLDivElement>(null)
    const campusSubmenuRef = useRef<HTMLDivElement | null>(null)
    const menuRefInternal = useRef<HTMLDivElement | null>(null)
    const menuContentRefInternal = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isOpen) {
            setShowCampusSubmenu(false)
        }
    }, [isOpen])

    useEffect(() => {
        if (campusRef.current && showCampusSubmenu) {
            const rect = campusRef.current.getBoundingClientRect()
            setCampusSubmenuPosition({
                top: rect.top,
                left: rect.right + 5,
            })
        }
    }, [showCampusSubmenu])

    const handleCampusMouseEnter = () => {
        if (isOpen) {
            setShowCampusSubmenu(true)
        }
    }

    const handleCampusClick = () => {
        setShowCampusSubmenu(prev => !prev)
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)
        setShowCampusSubmenu(false)
        closeMenu()
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
                    if (!campusSubmenuRef.current?.matches(":hover")) {
                        setShowCampusSubmenu(false)
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
                {menuItems[0].title}
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
                        {menuItems[0].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                {submenu.id === "campus" ? (
                                    <div
                                        ref={campusRef}
                                        className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6a0dad] hover:text-white"
                                        onMouseEnter={handleCampusMouseEnter}
                                        onClick={handleCampusClick}  // Added click handler
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

            {showCampusSubmenu && isOpen && (
                <div
                    ref={campusSubmenuRef}
                    className="fixed z-50 bg-white rounded-[15px] border-0 shadow-lg p-2 w-[220px]"
                    style={{
                        top: `${campusSubmenuPosition.top}px`,
                        left: `${campusSubmenuPosition.left}px`,
                    }}
                    onMouseEnter={() => {
                        setShowCampusSubmenu(true)
                        onMouseEnter()
                    }}
                    onMouseLeave={() => {
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
                                className="block py-2 px-3 text-sm text-[#003087] rounded-lg hover:bg-[#6a0dad] hover:text-white transition-colors"
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