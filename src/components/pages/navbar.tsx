"use client"

import { Header } from "./header"

interface NavbarProps {
    onSubmenuClick: (submenuId: string) => void
}

export function Navbar({ onSubmenuClick }: NavbarProps) {
    return (
        <>
            {/* Header component with all four parts */}
            <Header onSubmenuClick={onSubmenuClick} />
        </>
    )
}

