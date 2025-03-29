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
      <main className="flex-1 p-6 overflow-y-auto">
        {/* This is the outlet area where content will be displayed */}
        <ContentOutlet activeSubmenuId={activeSubmenuId} />

        {/* Add some extra content to make the page scrollable */}
        <div className="mt-8 space-y-8">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Sample Content Section {i + 1}</h2>
              <p className="text-gray-700">
                This is sample content to demonstrate scrolling. The header should remain sticky at the top of the page.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
