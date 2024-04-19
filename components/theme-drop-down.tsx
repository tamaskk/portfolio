"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleIcon = () => {
    if (theme === "light") {
      return <SunIcon className="h-[1.2rem] w-[1.2rem] text-white" />
    } else {
      return <MoonIcon className="h-[1.2rem] w-[1.2rem] text-black" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={`min-w-[2.3rem] flex justify-center items-center mx-auto ${theme === "dark" ? "bg-white" : "bg-black"}`}>
          {handleIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={`relative z-[999999999] ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
