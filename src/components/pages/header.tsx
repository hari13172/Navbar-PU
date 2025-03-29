"use client"
import { HeaderTopBar } from "./header-top-bar"
import { HeaderUniversityInfo } from "./header-university-info"
import { HeaderSearchBar } from "./header-search-bar"
import { HeaderMenuBar } from "./header-menu-bar"

interface HeaderProps {
    onSubmenuClick: (submenuId: string) => void
}

export function Header({ onSubmenuClick }: HeaderProps) {
    return (
        <>
            {/* Part 1: Mini Navbar (not sticky) */}
            <HeaderTopBar />

            {/* Part 2: University title section */}
            <HeaderUniversityInfo />

            {/* Part 3: Search bar (sticky) */}
            <HeaderSearchBar onSubmenuClick={onSubmenuClick} />

            {/* Part 4: Menu bar (sticky) */}
        </>
    )
}

