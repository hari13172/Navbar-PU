"use client"

import type React from "react"

import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems } from "../data/menu-data"

interface MenuQuickLinksProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onSubmenuClick: (submenuId: string) => void
    closeMenu: () => void
    menuRef: (el: HTMLDivElement | null) => void
    menuContentRef: (el: HTMLDivElement | null) => void
}

export function MenuQuickLinks({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onSubmenuClick,
    closeMenu,
    menuRef,
    menuContentRef,
}: MenuQuickLinksProps) {
    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)

        // Close the menu immediately
        closeMenu()
    }

    return (
        <div className="relative" ref={menuRef} onMouseLeave={onMouseLeave}>
            <button
                className={cn(
                    "px-4 py-2 text-sm font-medium flex items-center gap-1",
                    isOpen ? "text-primary" : "text-foreground",
                )}
                onMouseEnter={onMouseEnter}
            >
                {menuItems[9].title}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 top-full z-10 mt-1 w-[250px] rounded-md border bg-popover p-4 shadow-md"
                    ref={menuContentRef}
                    onMouseEnter={onMouseEnter}
                >
                    <ul className="grid gap-3">
                        {menuItems[9].submenus.map((submenu) => (
                            <li key={submenu.id}>
                                <a
                                    href={submenu.href}
                                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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

