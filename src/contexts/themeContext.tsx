"use client";

import { ThemeContextType } from "@/types/types";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextType>("dark");
