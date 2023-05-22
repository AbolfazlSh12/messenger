import { FC } from "react";
import { Group, Notifications, Twitter } from "@mui/icons-material";
import { Avatar, Card, IconButton, Stack, Typography } from "@mui/joy";
import { ModeSwitcher } from "../../ModeSwitcher";

export const Header: FC = () => {
  return (
    <Card sx={{ borderRadius: 0 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Twitter color="primary" sx={{ fontSize: 32 }} />
          <Typography color="primary" fontWeight={700}>
            Twitter
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <IconButton>
            <Group />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <ModeSwitcher />
          <Avatar color="primary" variant="soft" />
        </Stack>
      </Stack>
    </Card>
  );
};
