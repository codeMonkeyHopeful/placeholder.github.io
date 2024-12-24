"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
			aria-label="Toggle theme"
		>
			{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
		</button>
	)
}
