import { Button as MuiButton } from "@mui/material"
import React from "react"

type ButtonProps = {
    onClick: () => void;
    text: React.ReactNode;
    disabled?: boolean;
    variant: 'primaryContained' | 'secondaryContained'
}

function Button({ onClick, text, variant, disabled }: ButtonProps) {
    return (
        <MuiButton
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            sx={{
                width: '100%'
            }}
        >
            {text}
        </MuiButton>
    )
}

export default Button