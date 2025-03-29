"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { contentMap, defaultContent } from "../data/content-data"
import { cn } from "../../lib/utils"

interface ContentOutletProps {
    activeSubmenuId: string | null
}

export function ContentOutlet({ activeSubmenuId }: ContentOutletProps) {
    const [content, setContent] = useState(
        activeSubmenuId ? contentMap[activeSubmenuId] || defaultContent : defaultContent,
    )
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        // When activeSubmenuId changes, trigger animation
        if (activeSubmenuId !== null) {
            setIsAnimating(true)

            // After a short delay, update the content
            const timer = setTimeout(() => {
                setContent(contentMap[activeSubmenuId] || defaultContent)
            }, 300) // Match this with the CSS transition duration

            return () => clearTimeout(timer)
        } else {
            setIsAnimating(true)

            // After a short delay, update the content to default
            const timer = setTimeout(() => {
                setContent(defaultContent)
            }, 300) // Match this with the CSS transition duration

            return () => clearTimeout(timer)
        }
    }, [activeSubmenuId])

    // Reset animation state after content is updated
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false)
        }, 50)

        return () => clearTimeout(timer)
    }, [content])

    return (
        <Card className="w-full overflow-hidden bg-white shadow-md">
            <div
                className={cn(
                    "transition-all duration-300 ease-in-out",
                    isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0",
                )}
            >
                <CardHeader>
                    <CardTitle className="text-[#003087] text-xl">{content.title}</CardTitle>
                    <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-line">{content.content}</p>
                </CardContent>
            </div>
        </Card>
    )
}

