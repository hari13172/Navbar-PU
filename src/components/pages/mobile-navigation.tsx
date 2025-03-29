"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { menuItems, type Submenu, type NestedSubmenu } from "../data/menu-data"

interface MobileNavigationProps {
    isMenuOpen: boolean
    onSubmenuClick: (submenuId: string) => void
}

export function MobileNavigation({ isMenuOpen, onSubmenuClick }: MobileNavigationProps) {
    const [activeMenus, setActiveMenus] = useState<Record<string, boolean>>({})
    const [activeNestedSubmenus, setActiveNestedSubmenus] = useState<Record<string, boolean>>({})
    const [activeDeepSubmenus, setActiveDeepSubmenus] = useState<Record<string, boolean>>({})

    // Toggle mobile submenu visibility
    const toggleMobileSubmenu = (menuTitle: string) => {
        setActiveMenus((prev) => ({
            ...prev,
            [menuTitle]: !prev[menuTitle],
        }))
    }

    // Toggle campus submenu visibility for mobile
    const toggleMobileCampusSubmenu = () => {
        setActiveMenus((prev) => ({
            ...prev,
            campus: !prev.campus,
        }))
    }

    // Toggle nested submenu visibility for mobile
    const toggleMobileNestedSubmenu = (e: React.MouseEvent, submenuId: string) => {
        e.stopPropagation()
        setActiveNestedSubmenus((prev) => ({
            ...prev,
            [submenuId]: !prev[submenuId],
        }))
    }

    // Toggle deep submenu visibility for mobile
    const toggleMobileDeepSubmenu = (e: React.MouseEvent, submenuId: string) => {
        e.stopPropagation()
        setActiveDeepSubmenus((prev) => ({
            ...prev,
            [submenuId]: !prev[submenuId],
        }))
    }

    const handleSubmenuClick = (e: React.MouseEvent, submenuId: string) => {
        e.preventDefault()
        onSubmenuClick(submenuId)

        // Close all menus after clicking
        setActiveMenus({})
        setActiveNestedSubmenus({})
        setActiveDeepSubmenus({})
    }

    // Helper function to check if a submenu has nested submenus
    const hasNestedSubmenus = (submenu: Submenu): boolean => {
        return !!submenu.submenus && submenu.submenus.length > 0
    }

    // Update the renderMobileNestedSubmenu function to handle all menu indexes
    const renderMobileNestedSubmenu = (submenu: Submenu,) => {
        if (!hasNestedSubmenus(submenu)) return null

        return (
            <div key={submenu.id}>
                <button
                    onClick={(e) => toggleMobileNestedSubmenu(e, submenu.id)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium"
                >
                    {submenu.title}
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            activeNestedSubmenus[submenu.id] ? "rotate-90" : "",
                        )}
                    />
                </button>
                {activeNestedSubmenus[submenu.id] && submenu.submenus && (
                    <div className="ml-4 mt-1 space-y-2 border-l-2 pl-2">
                        {(submenu.submenus as NestedSubmenu[]).map((nestedSubmenu) =>
                            nestedSubmenu.submenus ? (
                                <div key={nestedSubmenu.id}>
                                    <button
                                        onClick={(e) => toggleMobileDeepSubmenu(e, nestedSubmenu.id)}
                                        className="flex w-full items-center justify-between py-2 text-sm font-medium"
                                    >
                                        {nestedSubmenu.title}
                                        <ChevronRight
                                            className={cn(
                                                "h-4 w-4 transition-transform duration-200",
                                                activeDeepSubmenus[nestedSubmenu.id] ? "rotate-90" : "",
                                            )}
                                        />
                                    </button>
                                    {activeDeepSubmenus[nestedSubmenu.id] && nestedSubmenu.submenus && (
                                        <div className="ml-4 mt-1 space-y-2 border-l-2 pl-2">
                                            {nestedSubmenu.submenus.map((deepSubmenu) => (
                                                <a
                                                    key={deepSubmenu.id}
                                                    href={deepSubmenu.href}
                                                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                                                    onClick={(e) => handleSubmenuClick(e, deepSubmenu.id)}
                                                >
                                                    {deepSubmenu.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={nestedSubmenu.id}
                                    href={nestedSubmenu.href}
                                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                                    onClick={(e) => handleSubmenuClick(e, nestedSubmenu.id)}
                                >
                                    {nestedSubmenu.title}
                                </a>
                            ),
                        )}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
            <div className="space-y-1 px-4 py-3 bg-white rounded-b-[15px] shadow-lg">
                {menuItems.map((menu) => (
                    <div key={menu.title} className="border-b pb-2">
                        <button
                            onClick={() => toggleMobileSubmenu(menu.title)}
                            className="flex w-full items-center justify-between py-2 text-sm font-medium text-[#003087]"
                        >
                            {menu.title}
                            <ChevronDown
                                className={cn("h-4 w-4 transition-transform duration-200", activeMenus[menu.title] ? "rotate-180" : "")}
                            />
                        </button>
                        {activeMenus[menu.title] && (
                            <div className="ml-4 mt-1 space-y-1">
                                {menu.submenus.map((submenu) =>
                                    submenu.id === "campus" ? (
                                        <div key={submenu.id}>
                                            <button
                                                onClick={toggleMobileCampusSubmenu}
                                                className="flex w-full items-center justify-between py-2 text-sm font-medium text-[#003087]"
                                            >
                                                {submenu.title}
                                                <ChevronRight
                                                    className={cn(
                                                        "h-4 w-4 transition-transform duration-200",
                                                        activeMenus.campus ? "rotate-90" : "",
                                                    )}
                                                />
                                            </button>
                                            {activeMenus.campus && submenu.submenus && (
                                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#6a0dad] pl-2">
                                                    {submenu.submenus.map((campusSubmenu) => (
                                                        <a
                                                            key={campusSubmenu.id}
                                                            href={campusSubmenu.href}
                                                            className="block py-2 text-sm text-[#003087] hover:text-[#6a0dad]"
                                                            onClick={(e) => handleSubmenuClick(e, campusSubmenu.id)}
                                                        >
                                                            {campusSubmenu.title}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : hasNestedSubmenus(submenu) ? (
                                        renderMobileNestedSubmenu(submenu)
                                    ) : (
                                        <a
                                            key={submenu.id}
                                            href={submenu.href}
                                            className="block py-2 text-sm text-[#003087] hover:text-[#6a0dad]"
                                            onClick={(e) => handleSubmenuClick(e, submenu.id)}
                                        >
                                            {submenu.title}
                                        </a>
                                    ),
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

