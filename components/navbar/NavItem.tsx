'use client'
import { NAV_ITEMS } from "@/config"
import { Button } from "../ui/button"
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItems = typeof NAV_ITEMS[number];

interface NavItemProp {
    item: NavItems
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}
function NavItem({ item, handleOpen, isOpen, isAnyOpen }: NavItemProp) {
    return (
        <div className="flex relative items-center">

            <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? 'secondary' : 'ghost'}>{item.label} <ChevronDown className={cn('h-4 w-4 transition-all -text-muted-foreground ', { '-rotate-180': isOpen })} /></Button>
            
            {isOpen ? (
            <div className={cn("absolute inset-x-0 text-muted-foreground", { 'animate-in fade-in-10 slide-in-from-top-5': isAnyOpen })}
            >
                <div aria-hidden='true' className="absolute inset-0 top-1/2" 
                >
                {item.categories.map((cat) => (
                    <div key={cat.name} className="group relative text-base">
                        <Link href={cat.href}>{cat.name}</Link>
                    </div>
                ))}
            </div>
            </div>) : (null)}
        </div>
    )
}

export default NavItem