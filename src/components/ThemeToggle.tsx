"use client";

import { GlobalStyles } from "@/components/GlobalStyle";
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

export default function ThemeToggle({ theme,  themeToggler }: {
    theme: string,
    themeToggler: () => void
}) {
    
    return (
        <>
        <Button onClick={themeToggler}>
            {
            theme === "light"
            ? <BsSun /> 
            : <BsSunFill />
            }
        </Button>
        </>
    );
}