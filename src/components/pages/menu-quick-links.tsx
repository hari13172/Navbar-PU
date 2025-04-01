"use client"

import type React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems } from "../data/menu-data"

interface MenuQuickLinksProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onClick: () => void  // Added onClick prop
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuQuickLinks({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onClick,  // Added to props
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuQuickLinksProps) {
    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)
        closeMenu()
    }

    return (
        <div className="relative" ref={menuRef} onMouseLeave={onMouseLeave}>
            <button
                className={cn(
                    "px-4 py-2 text-sm font-semibold text-white flex items-center gap-1 hover:text-yellow-300 transition-all rounded hover:bg-white/10",
                    isOpen ? "text-yellow-300 bg-white/10" : "",
                )}
                onMouseEnter={onMouseEnter}
                onClick={onClick}  // Added onClick handler
            >
                {menuItems[9].title}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>

            {isOpen && (
                <div
                    className="absolute left-[-80px] top-full z-10 mt-1 w-[250px] rounded-[15px] border-0 bg-white p-2 shadow-lg"
                    ref={menuContentRef}
                    onMouseEnter={onMouseEnter}
                >
                    <ul className="grid gap-1">
                        {menuItems[9].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                <a
                                    href={submenu.href}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6a0dad] hover:text-white text-[#003087]"
                                    onClick={(e) => handleSubmenuClick(e, submenu.id)}
                                >
                                    <div className="text-sm font-medium leading-none">{submenu.title}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}