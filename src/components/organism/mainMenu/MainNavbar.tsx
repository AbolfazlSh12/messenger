import { FC } from "react";
import { Card, IconButton, Stack, Typography } from "@mui/joy";
import { Notifications, Settings } from "@mui/icons-material";

export const MainNavbar: FC = () => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={700}>Home</Typography>
        <Stack direction="row">
          <IconButton variant="plain">
            <Notifications />
          </IconButton>
          <IconButton variant="plain">
            <Settings />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};
