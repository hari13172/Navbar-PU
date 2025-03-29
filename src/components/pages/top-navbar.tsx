"use client"

import { useState, useRef, useEffect } from "react"
import { menuItems } from "../data/menu-data"
import { MenuAbout } from "./menu-about"
import { MenuAuthorities } from "./menu-authorities"
import { MenuAdministration } from "./menu-administration"
import { MenuAcademics } from "./menu-academics"
import { MenuAdmission } from "./menu-admission"
import { MenuExamination } from "./menu-examination"
import { MenuStudentLife } from "./menu-student-life"
import { MenuQualityAssurance } from "./menu-quality-assurance"
import { MenuQuickLinks } from "./menu-quick-links"
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

    const closeMenu = () => {
        setOpenMenuIndex(null)
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
                        closeMenu={closeMenu}
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
                        closeMenu={closeMenu}
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
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[2] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[2] = el
                        }}
                    />

                    {/* Academics Menu (Menu 4) */}
                    <MenuAcademics
                        isOpen={openMenuIndex === 3}
                        onMouseEnter={() => handleMenuMouseEnter(3)}
                        onMouseLeave={() => handleMenuMouseLeave(3)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[3] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[3] = el
                        }}
                    />

                    {/* Admission Menu (Menu 5) */}
                    <MenuAdmission
                        isOpen={openMenuIndex === 4}
                        onMouseEnter={() => handleMenuMouseEnter(4)}
                        onMouseLeave={() => handleMenuMouseLeave(4)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[4] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[4] = el
                        }}
                    />

                    {/* Menu 6 (Regular) */}
                    <MenuRegular
                        key={menuItems[5].title}
                        menu={menuItems[5]}
                        index={5}
                        isOpen={openMenuIndex === 5}
                        onMouseEnter={() => handleMenuMouseEnter(5)}
                        onMouseLeave={() => handleMenuMouseLeave(5)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[5] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[5] = el
                        }}
                    />

                    {/* Examination Menu (Menu 7) */}
                    <MenuExamination
                        isOpen={openMenuIndex === 6}
                        onMouseEnter={() => handleMenuMouseEnter(6)}
                        onMouseLeave={() => handleMenuMouseLeave(6)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[6] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[6] = el
                        }}
                    />

                    {/* StudentLife Menu (Menu 8) */}
                    <MenuStudentLife
                        isOpen={openMenuIndex === 7}
                        onMouseEnter={() => handleMenuMouseEnter(7)}
                        onMouseLeave={() => handleMenuMouseLeave(7)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[7] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[7] = el
                        }}
                    />

                    {/* Quality Assurance Menu (Menu 9) */}
                    <MenuQualityAssurance
                        isOpen={openMenuIndex === 8}
                        onMouseEnter={() => handleMenuMouseEnter(8)}
                        onMouseLeave={() => handleMenuMouseLeave(8)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[8] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[8] = el
                        }}
                    />

                    {/* Quick Links Menu (Menu 10) */}
                    <MenuQuickLinks
                        isOpen={openMenuIndex === 9}
                        onMouseEnter={() => handleMenuMouseEnter(9)}
                        onMouseLeave={() => handleMenuMouseLeave(9)}
                        onSubmenuClick={onSubmenuClick}
                        closeMenu={closeMenu}
                        menuRef={(el) => {
                            menuRefs.current[9] = el
                        }}
                        menuContentRef={(el) => {
                            menuContentRefs.current[9] = el
                        }}
                    />
                </div>
            </div>

            {/* Mobile navigation */}
            <MobileNavigation isMenuOpen={isMenuOpen} onSubmenuClick={onSubmenuClick} />
        </>
    )
}

