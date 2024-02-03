import {
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  Link,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalProjectData } from "../../schemas/projectsSchemas";
import { useEffect, useState } from "react";

type ProjectAddedProps = {
  projectImage: File | null | undefined;
  altImage: string;
  avatar: string;
  altAvatar: string;
  subtitle: React.ReactNode;
  onClick: () => void;
  open: boolean;
  onClose: () => void;
  data: ModalProjectData;
};

function ModalProjectAdded({
  projectImage,
  altImage,
  avatar,
  subtitle,
  altAvatar,
  onClick,
  open,
  data,
  onClose,
}: ProjectAddedProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("pt-br", {
    month: "2-digit",
    year: "2-digit",
  }).format(date);

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (projectImage) {
      setPreviewImage(URL.createObjectURL(projectImage));
    }
  }, [projectImage]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          width: isSmall ? "700px" : "1024px",
          maxWidth: "1024px",
          backgroundColor: theme.palette.neutral.main,
          padding: isSmall ? "2rem 5rem" : "3rem 6rem",
        }}
      >
        <Grid container>
          <Grid
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
            }}
          >
            <IconButton
              onClick={onClick}
              sx={{
                height: 24,
                width: 24,
                backgroundColor: theme.palette.neutral.main,
                color: theme.palette.neutral[130],

                "&:hover": {
                  color: theme.palette.neutral[130],
                  backgroundColor: theme.palette.neutral[70],
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2rem"
        >
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Avatar
              src={avatar}
              alt={altAvatar}
              sx={{
                width: "2.5rem",
                height: "2.5rem",
              }}
            />
            <Grid ml="0.5rem">
              <Typography
                variant="subtitle1"
                color={theme.palette.neutral[120]}
                fontWeight="bold"
              >
                {subtitle}
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.neutral[110]}
              >
                {formattedDate}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              color={theme.palette.neutral[120]}
              textAlign="center"
            >
              {data?.title}
            </Typography>
          </Grid>
          <Grid display="flex" gap="8px">
            {data?.tags?.map((item) => <Chip label={item} />).slice(0, 2)}
          </Grid>
        </Grid>
        <Grid>
          <img
            src={previewImage === null ? undefined : previewImage}
            alt={altImage}
            style={{
              width: isSmall ? "40rem" : "50rem",
              height: isSmall ? "20rem" : "30rem",
              borderRadius: "4px",
            }}
          />
        </Grid>
        <Grid mt={isSmall ? "2rem" : "4rem"}>
          <Typography variant="body1" color={theme.palette.neutral[120]}>
            {data?.description}
          </Typography>
          <Grid mt="2rem">
            <Typography variant="subtitle1" color={theme.palette.neutral[120]}>
              Veja o projeto completo:
            </Typography>
            <Link
              variant="body2"
              color={theme.palette.info[80]}
              underline="hover"
              href={data?.link}
            >
              {data?.link}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ModalProjectAdded;
