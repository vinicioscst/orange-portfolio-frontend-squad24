import { PropsWithChildren, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import { useColorMode } from './ColorMode/ColorModeCoxtext';


export function GlobalStylesProvider(props: PropsWithChildren) {
    const [colorMode] = useColorMode();

    const theme = useMemo(
        () => createTheme(colorMode === 'light' ? lightTheme
            : darkTheme),
        [colorMode]
    )

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}