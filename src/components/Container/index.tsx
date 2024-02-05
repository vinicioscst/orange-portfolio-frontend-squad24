
import React from 'react';
import { Container as MuiContainer } from '@mui/material';
import { useColorMode } from '../../style/ColorMode/ColorModeCoxtext';
import { useTheme } from '@mui/material';

export function Container({ children }: { children: React.ReactNode }) {
    const theme = useTheme()
    const [colorMode] = useColorMode();
    return (
        <MuiContainer
            maxWidth={false}
            sx={{ overflow: 'hidden' }}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: colorMode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.neutral.main
            }}
        >
            <MuiContainer>
                {children}
            </MuiContainer>
        </MuiContainer>
    )
}