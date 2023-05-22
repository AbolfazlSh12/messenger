import { FC } from "react";
import { Box, Card, Link, Typography } from "@mui/joy";
import { Add } from "@mui/icons-material";

export const ContentInput: FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        ":hover": { textDecoration: "none", bgcolor: "#EEE" },
      }}
      component={Link}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}
      >
        <Add />
        <Typography level="body1">What's on your mind?</Typography>
      </Box>
    </Card>
  );
};
