"use client"

import { useState } from "react"
import { Navbar } from "./components/pages/navbar"
import { ContentOutlet } from "./components/pages/content-outlet"

function App() {
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null)

  const handleSubmenuClick = (submenuId: string) => {
    setActiveSubmenuId(submenuId)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSubmenuClick={handleSubmenuClick} />
      <main className="flex-1 p-6">
        {/* This is the outlet area where content will be displayed */}
        <ContentOutlet activeSubmenuId={activeSubmenuId} />
      </main>
    </div>
  )
}

export default App
