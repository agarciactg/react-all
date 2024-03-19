import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purbleTheme } from "./"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purbleTheme} >
        <CssBaseline />

        { children }

    </ThemeProvider>
  )
}
