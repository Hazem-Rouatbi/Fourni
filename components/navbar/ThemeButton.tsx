'use client'
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeButton() {
    const [currIcon, setIcon] = useState(<SunIcon />)
    const { setTheme, theme } = useTheme()
    const switchTheme = () => {
        if (theme === 'light') { setTheme('dark');setIcon(<MoonIcon/>) }
        else { setTheme('light');setIcon(<SunIcon />) }
    }
    return (
        <Button variant={"outline"} onClick={() => switchTheme()}>{currIcon} </Button>
    )
}

export default ThemeButton