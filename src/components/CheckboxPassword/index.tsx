import { Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useEffect, useState } from "react";
import { numericRegex, specialRegex } from "./checkboxPassword.schemas";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext";

type CheckboxPasswordProps = {
    password: string;
    confirmPassword: string;
}

function CheckboxPassword({ password, confirmPassword }: CheckboxPasswordProps) {
    const theme = useTheme();
    const [colorMode] = useColorMode();
    const [passwordValidity, setPasswordValidity] = useState({
        minLength: false,
        minLowerCase: false,
        minUpperCase: false,
        minNumbers: false,
        minSpecialSymbols: false,
        matchesPassword: false,
    });

    useEffect(() => {
        setPasswordValidity({
            minLength: password?.length >= 8,
            minLowerCase: password?.toUpperCase() !== password,
            minUpperCase: password?.toLowerCase() !== password,
            minNumbers: !!numericRegex.test(password),
            minSpecialSymbols: !!specialRegex.test(password),
            matchesPassword: confirmPassword?.length > 0
                && confirmPassword === password,
        });
    }, [password, confirmPassword]);

    return (
        <Card sx={{
            backgroundColor: colorMode === 'dark' ? theme.palette.primary[100] : theme.palette.neutral.main,
            padding: '0.5rem'
        }}>
            <CardContent>
                <Grid
                    container
                    flexDirection="column"
                    gap="0.5rem"
                >
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.minLowerCase ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.minLowerCase ? theme.palette.success.main : theme.palette.error.main}
                        >Letras minúsculas (a-z)
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.minUpperCase ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.minUpperCase ? theme.palette.success.main : theme.palette.error.main}
                        >Letras maiúsculas (a-z)
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.minNumbers ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.minNumbers ? theme.palette.success.main : theme.palette.error.main}
                        >Números (0-9)
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.minSpecialSymbols ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.minSpecialSymbols ? theme.palette.success.main : theme.palette.error.main}
                        >Caracteres especiais (!@#&...)
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.minLength ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.minLength ? theme.palette.success.main : theme.palette.error.main}
                        >Caracteres (8-16)
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        gap="0.5rem"
                    >
                        {passwordValidity?.matchesPassword ?
                            (<CheckCircleIcon sx={{ color: theme.palette.success.main }} />) : (
                                <CancelRoundedIcon sx={{ color: theme.palette.error.main }} />
                            )}
                        <Typography
                            variant="subtitle2"
                            color={passwordValidity?.matchesPassword ? theme.palette.success.main : theme.palette.error.main}
                        >Repetir senha
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default CheckboxPassword