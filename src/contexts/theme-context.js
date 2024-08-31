import { createContext, useState } from "react";

export const themes = {
    light: {
        background: '#1D63AB',
        card: '#7AACBF'
    },
    dark: {
        background: '#2E302C',
        card: '#C83B7C'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}