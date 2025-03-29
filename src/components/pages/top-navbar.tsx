"use client"

import { useState, useRef, useEffect } from "react"
import { menuItems } from "../data/menu-data"
import { MenuAbout } from "./menu-about"
import { MenuAuthorities } from "./menu-authorities"
import { MenuAdministration } from "./menu-administration"
import { MenuRegular } from "./menu-regular"
import { MobileNavigation } from "./mobile-navigation"

interface TopNavbarProps {
    isMenuOpen: boolean
    onSubmenuClick: (submenuId: string) => void
}

export function TopNavbar({ isMenuOpen, onSubmenuClick }: TopNavbarProps) {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const menuRefs = useRef<(HTMLDivElement | null)[]>([])
    const menuContentRefs = useRef<(HTMLDivElement | null)[]>([])

    // Track mouse position to help with menu closing
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Add global mouse move listener
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    // Check if mouse is outside all menus
    useEffect(() => {
        if (openMenuIndex !== null) {
            const isMouseOutsideNav = !navRef.current?.contains(document.elementFromPoint(mousePosition.x, mousePosition.y))

            if (isMouseOutsideNav) {
                const isMouseInAnyMenu =
                    menuRefs.current.some((ref) => ref?.contains(document.elementFromPoint(mousePosition.x, mousePosition.y))) ||
                    menuContentRefs.current.some((ref) =>
                        ref?.contains(document.elementFromPoint(mousePosition.x, mousePosition.y)),
                    )

                if (!isMouseInAnyMenu) {
                    setOpenMenuIndex(null)
                }
            }
        }
    }, [mousePosition, openMenuIndex])

    const handleMenuMouseEnter = (index: number) => {
        setOpenMenuIndex(index)
    }

    const handleMenuMouseLeave = (index: number) => {
        // Check if moving to the dropdown content
        setTimeout(() => {
            if (!menuRefs.current[index]?.matches(":hover") && !menuContentRefs.current[index]?.matches(":hover")) {
                if (openMenuIndex === index) {
                    setOpenMenuIndex(null)
                }
            }
        }, 100) // Increased timeout for better detection
    }

    const handleNavMouseLeave = () => {
        // When leaving the entire nav area, close all menus
        setTimeout(() => {
            if (
                !navRef.current?.matches(":hover") &&
                !menuRefs.current.some((ref) => ref?.matches(":hover")) &&
                !menuContentRefs.current.some((ref) => ref?.matches(":hover"))
            ) {
                setOpenMenuIndex(null)
            }
        }, 100) // Increased timeout for better detection
    }

    return (
        <>
            {/* Desktop navigation */}
            <div className="hidden md:block border-b" ref={navRef} onMouseLeave={handleNavMouseLeave}>
                <div className="flex justify-center">
                    {/* About Menu (Menu 1) */}
                    <MenuAbout
                        isOpen={openMenuIndex === 0}
                        onMouseEnter={() => handleMenuMouseEnter(0)}
                        onMouseLeave={() => handleMenuMouseLeave(0)}
                        onSubmenuClick={onSubmenuClick}
                        menuRef={(el) => {
                            menuRefs.current[0] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[0] = el
                        }}
                    />

                    {/* Authorities Menu (Menu 2) */}
                    <MenuAuthorities
                        isOpen={openMenuIndex === 1}
                        onMouseEnter={() => handleMenuMouseEnter(1)}
                        onMouseLeave={() => handleMenuMouseLeave(1)}
                        onSubmenuClick={onSubmenuClick}
                        menuRef={(el) => {
                            menuRefs.current[1] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[1] = el
                        }}
                    />

                    {/* Administration Menu (Menu 3) */}
                    <MenuAdministration
                        isOpen={openMenuIndex === 2}
                        onMouseEnter={() => handleMenuMouseEnter(2)}
                        onMouseLeave={() => handleMenuMouseLeave(2)}
                        onSubmenuClick={onSubmenuClick}
                        menuRef={(el) => {
                            menuRefs.current[2] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[2] = el
                        }}
                    />

                    {/* Regular Menus (Menu 4-10) */}
                    {menuItems.slice(3).map((menu, i) => {
                        const index = i + 3 // Adjust index to account for the first three special menus
                        return (
                            <MenuRegular
                                key={menu.title}
                                menu={menu}
                                index={index}
                                isOpen={openMenuIndex === index}
                                onMouseEnter={() => handleMenuMouseEnter(index)}
                                onMouseLeave={() => handleMenuMouseLeave(index)}
                                onSubmenuClick={onSubmenuClick}
                                menuRef={(el) => {
                                    menuRefs.current[index] = el
                                }}
                                menuContentRef={(el) => {
                                    menuContentRefs.current[index] = el
                                }}
                            />
                        )
                    })}
                </div>
            </div>

            {/* Mobile navigation */}
            <MobileNavigation isMenuOpen={isMenuOpen} onSubmenuClick={onSubmenuClick} />
        </>
    )
}

