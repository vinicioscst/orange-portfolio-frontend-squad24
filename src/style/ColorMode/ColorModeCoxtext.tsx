import { createContext, useContext, useState } from 'react';
import {
    ColorMode,
    ColorModeContextParams,
    ColorModeProviderProps,
    UseColorModeProviderReturn,
} from './types';

const ColorModeContext = createContext({} as ColorModeContextParams);

function ColorModeProvider(props: ColorModeProviderProps) {
    const [colorMode, setColorMode] = useState<ColorMode>('light');

    function toggleColorMode() {
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}

export function useColorMode(): UseColorModeProviderReturn {
    const { colorMode, toggleColorMode } = useContext(ColorModeContext);

    return [colorMode, toggleColorMode];
}

export default ColorModeProvider;