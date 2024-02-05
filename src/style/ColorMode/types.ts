import { PropsWithChildren } from 'react';

export type ColorModeContextParams = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

export type ColorMode = 'light' | 'dark';

export type ColorModeProviderProps = PropsWithChildren<unknown>;

export type UseColorModeProviderReturn = [ColorMode, () => void];