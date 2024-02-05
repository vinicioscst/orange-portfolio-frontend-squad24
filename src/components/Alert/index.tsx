import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Collapse } from "@mui/material";
import { useToast } from "../../context/ToastContext";

export default function Alert() {
  const { dismissToast, isOpen, toastData } = useToast();
  const { message, severity, title, variant, isLoading } = toastData;

  return (
    <Collapse
      in={isOpen}
      style={{
        position: "absolute",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "17.5rem",
        maxWidth: "22.5rem",
        zIndex: "1301"
      }}
    >
      {
        <MuiAlert
          onClick={dismissToast}
          variant={variant}
          severity={severity}
          icon={
            isLoading ? (
              <CircularProgress color="inherit" size={17} />
            ) : (
              null
            )
          }
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              variant="body2"
              sx={{ marginLeft: 2, fontWeight: "bold" }}
            >
              {title}
            </Typography>
          </Box>
          {message}
        </MuiAlert>
      }
    </Collapse>
  );
}
