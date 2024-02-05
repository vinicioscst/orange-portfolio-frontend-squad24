import { ThemeOptions } from "@mui/material";

export const lightTheme: ThemeOptions = {
    typography: {
        h1: {
            fontSize: '6rem',
            fontWeight: 300,
            letterSpacing: '-1.5px'
        },
        h2: {
            fontSize: '3.75rem',
            fontWeight: 300,
            letterSpacing: '-0.5px'
        },
        h3: {
            fontSize: '3rem',
            fontWeight: 400
        },
        h4: {
            fontSize: '2.125rem',
            fontWeight: 400,
            letterSpacing: '0.25px'
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 400
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            letterSpacing: '0.15px'
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.15px'
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.1px'
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.5px'
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '0.25px'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.4px'
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 400,
            letterSpacing: '1.5px'
        },
        button: {
            fontSize: '0.937rem',
            fontWeight: 500,
            letterSpacing: '0.46px',
            textTransform: 'uppercase'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#222244',
            70: '#EDEFF2',
            80: '#444466',
            100: '#11133'
        },
        secondary: {
            main: '#FF5522',
            60: '#FFEECC',
            70: '#FFCC99',
            80: '#FFAA66',
            90: '#FF8833',
            110: '#CC4400',
            120: '#993300',
            130: '#662200'
        },
        neutral: {
            main: '#FCFDFF',
            70: '#E6E9F2',
            80: '#C2C4CC',
            90: '#A1A3AA',
            100: '#818388',
            110: '#515244',
            120: '#303133',
            130: '#0B0C0D'
        },
        success: {
            main: '#118822',
            60: '#EEFFBB',
            70: '#BBEE88',
            80: '#88CC66',
            90: '#55BB44',
            100: '#229922',
            120: '#006622',
            130: '#004422'
        },
        warning: {
            main: '#FFCC00',
            60: '#FFFFCC',
            70: '#FFEE99',
            80: '#FFEE66',
            90: '#FFDD33',
            110: '#CC9900',
            120: '#997700',
            130: '#664400'
        },
        error: {
            main: '#DD0000',
            60: '#FFDDCC',
            70: '#FFAA99',
            80: '#FF7766',
            90: '#FF4433',
            110: '#BB0000',
            120: '#880000',
            130: '#660000'
        },
        info: {
            main: '#315FCE',
            60: '#ADCBFA',
            70: '#82A9F0',
            80: '#608AE1',
            90: '#315FCE',
            110: '#183594',
            120: '#0F2477',
            130: '#091862'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        backgroundColor: '#222244',
                        color: '#FCFDFF'
                    }
                },
                {
                    props: { variant: 'primaryContained' },
                    style: {
                        fontSize: '0.937rem',
                        fontWeight: 500,
                        letterSpacing: '0.46px',
                        textTransform: 'uppercase',
                        color: '#FCFDFF',
                        backgroundColor: '#FF5522',
                        '&:hover': {
                            backgroundColor: '#CC4400',
                        },
                        '&: disabled': {
                            backgroundColor: '#E6E9F2',
                            color: '#C2C4CC'
                        }
                    }
                },
                {
                    props: { variant: 'secondaryContained' },
                    style: {
                        fontSize: '0.937rem',
                        fontWeight: 500,
                        letterSpacing: '0.46px',
                        textTransform: 'uppercase',
                        color: '#FF5522',
                        backgroundColor: 'none',
                        '&:hover': {
                            color: '#CC4400',
                            backgroundColor: 'none',
                        },
                        '&: disabled': {
                            backgroundColor: '#E6E9F2',
                            color: '#C2C4CC'
                        }
                    }
                }
            ]
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        fontSize: '1rem',
                        fontWeight: 400,
                        letterSpacing: '0.15px'
                    },
                    '& .Mui-error': {
                        border: '#DD0000',
                        color: '#DD0000'
                    }
                }
            }
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: 'filled' },
                    style: {
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        letterSpacing: '0.4px',
                        color: '#0B0C0D',
                        backgroundColor: '#FFEE99'
                    }
                }
            ]
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222244',
                    color: '#FCFDFF'
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#FCFDFF',
                },
                list: {
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.15px',
                    color: '#0B0C0D',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#FFEECC'
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFEE99',
                    color: '#0B0C0D',

                    '&:hover': {
                        backgroundColor: '#FFCC00'
                    }
                }
            }
        },
    }
}

declare module '@mui/material/styles' {
    interface PaletteColor {
        60?: string,
        70?: string,
        80?: string,
        90?: string,
        100?: string,
        110?: string,
        120?: string,
        130?: string,
    }

    interface SimplePaletteColorOptions {
        60?: string,
        70?: string,
        80?: string,
        90?: string,
        100?: string,
        110?: string,
        120?: string,
        130?: string,
    }

    interface Palette {
        neutral: Palette['primary']
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary']
    }

    interface BreakpointOverrides {
        xxl: true
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primaryContained: true;
        secondaryContained: true;
    }
}
