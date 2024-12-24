"use client"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion"
import { ThemeToggle } from "app/components/theme-toggle"

const navItems = {
	"/": {
		name: "home",
	},
	"/projects": {
		name: "projects",
	},
	"/devlabs": {
		name: "devlabs",
	},
}

const Header = () => {
	let pathname = usePathname() || "/"
	if (pathname.includes("/devlabs/")) {
		pathname = "/devlabs"
	}
	return (
		<header className="px-5 sm:px-10 pt-14 mb-16 tracking-tight">
			<div className="flex justify-between items-center">
				<LayoutGroup>
					<nav className="flex items-center">
						<div className="flex flex-row space-x-3">
							{Object.entries(navItems).map(
								([path, { name }]) => {
									const isActive = path === pathname
									return (
										<Link
											key={path}
											href={path}
											className={clsx(
												"transition-all hover:text-zinc-800 dark:hover:text-zinc-200 flex align-middle",
												{
													"font-bold": isActive,
												}
											)}
										>
											<span className="relative py-1 px-2">
												{name}
												{path === pathname ? (
													<motion.div
														className="absolute h-[1px] top-7 mx-2 inset-0 bg-zinc-200 dark:bg-zinc-700 z-[-1] dark:bg-gradient-to-r from-transparent to-zinc-700"
														layoutId="sidebar"
														transition={{
															type: "spring",
															stiffness: 350,
															damping: 30,
														}}
													/>
												) : null}
											</span>
										</Link>
									)
								}
							)}
						</div>
					</nav>
				</LayoutGroup>
				<ThemeToggle />
			</div>
		</header>
	)
}
export default Header
