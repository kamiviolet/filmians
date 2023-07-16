"use client";

import { ThemeContextType } from "@/types/types";
import { useState } from "react";
import { BsSun, BsSunFill } from "react-icons/bs";
import { styled } from "styled-components";

const Button = styled.button`
    font-size: 1.25em;
    cursor: pointer;
    background-color: transparent;
    margin-inline: .25em;
    transform: translateY(2px);
    * {
        pointer-events: none
    }
`;

export default function ThemeToggle() {
    const [theme, setTheme] = useState<ThemeContextType>("light");

    return (
        <Button onClick={()=>{theme === "light"? setTheme("dark") : setTheme("light")}}>
            {
            theme === "light" 
            ? <BsSun /> 
            : <BsSunFill />
            }
        </Button>
    );
}