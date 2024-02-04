import {
  Avatar,
  Box,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import ProjectWithoutImage from "../../assets/project-without-image.svg";

function ProjectDetailModal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallSize = useMediaQuery(theme.breakpoints.between("xs", 425));
  const { openedProjectData, setOpenedProjectData } = useContext(UserContext);

  const date: Date = new Date(
    openedProjectData?.project?.createddate as string
  );
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${month}/${date.getFullYear().toString().slice(-2)}`;

  function handleClose() {
    setOpenedProjectData({
      project: null,
      open: false,
    });
  }

  return (
    <Dialog
      open={
        openedProjectData?.project !== null &&
        openedProjectData?.project !== undefined
          ? openedProjectData?.open
          : false
      }
      onClose={handleClose}
      fullWidth={true}
      maxWidth={"xl"}
    >
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isMobile
            ? "3.5rem 1.5rem 2rem 1.5rem"
            : "3.5rem 4.5rem 2rem 4.5rem",
          bgcolor: theme.palette.neutral.main,
          gap: "2rem",
        }}
        dividers={true}
      >
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <IconButton
            onClick={handleClose}
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
            <Close />
          </IconButton>
        </Box>
        {isMobile && (
          <Typography variant="h5" textAlign="center">
            {openedProjectData?.project?.title}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "column",
            gap: "1.5rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: isSmallSize ? "center" : "space-between",
              alignItems: "center",
              width: "100%",
              gap: isMobile ? "0.5rem" : "1.5rem",
            }}
          >
            {!isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingY: "0.3125rem",
                }}
              >
                <Avatar
                  src={openedProjectData?.project?.user.profileImage}
                  alt={openedProjectData?.project?.user.fullname}
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.neutral[120]}
                    lineHeight={1}
                  >
                    {openedProjectData?.project?.user.fullname}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.neutral[110]}
                    lineHeight={1}
                  >
                    {formattedDate}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  paddingY: "0.25rem",
                }}
              >
                <Avatar
                  src={openedProjectData?.project?.user.profileImage}
                  alt={openedProjectData?.project?.user.fullname}
                  sx={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  color={theme.palette.neutral[110]}
                  lineHeight={1}
                >
                  {openedProjectData?.project?.user.fullname} • {formattedDate}
                </Typography>
              </Box>
            )}
            {!isMobile && (
              <Typography variant="h5" textAlign="center">
                {openedProjectData?.project?.title}
              </Typography>
            )}
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              {openedProjectData?.project?.tags &&
                openedProjectData?.project?.tags
                  .split(", ")
                  .map((tag) => <Chip label={tag} key={tag} />)
                  .slice(0, 2)}
            </Box>
          </Box>
          <CardMedia
            sx={{
              width: "100%",
              height: "100%",
              minHeight: isMobile ? "16.125rem" : "36.625rem",
              maxHeight: isMobile ? "16.125rem" : "36.625rem",
              borderRadius: "0.25rem",
              objectFit: "cover",
            }}
            image={
              openedProjectData?.project?.image !== null &&
              openedProjectData?.project?.image !== undefined &&
              openedProjectData?.project.image.trim() !== ""
                ? openedProjectData?.project?.image
                : ProjectWithoutImage
            }
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {!openedProjectData?.project?.description ||
            (openedProjectData?.project?.description !== "" && (
              <Typography
                variant="body1"
                color={theme.palette.neutral[120]}
                sx={{ textWrap: "wrap" }}
              >
                {openedProjectData?.project?.description}
              </Typography>
            ))}
          {!openedProjectData?.project?.link ||
            (openedProjectData?.project?.link !== "" && (
              <>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.neutral[130]}
                >
                  Veja o projeto completo:
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.info[80]}
                  alignSelf="flex-start"
                  sx={{ wordBreak: "break-word" }}
                >
                  <a href={openedProjectData?.project?.link} target="_blank">
                    {openedProjectData?.project?.link}
                  </a>
                </Typography>
              </>
            ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetailModal;
