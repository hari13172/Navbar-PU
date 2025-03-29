"use client"

import type React from "react"

import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Navbar } from "./navbar"
import { ContentOutlet } from "./content-outlet"

// This is a sample of how you would set up React Router in a Next.js app
// Note: This is for demonstration purposes - typically you would use Next.js's built-in routing
export function RouterSetup() {
    const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null)

    const handleSubmenuClick = (submenuId: string) => {
        setActiveSubmenuId(submenuId)
    }

    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar onSubmenuClick={handleSubmenuClick} />
                <main className="flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<ContentOutlet activeSubmenuId={activeSubmenuId} />} />
                        {/* You could add more routes here */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

// Example of how you would use React Router's Link component
export function RouterLink({ to, children, ...props }: { to: string; children: React.ReactNode;[key: string]: any }) {
    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    )
}

