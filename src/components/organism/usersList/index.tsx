import { FC } from "react";
import { MoreHoriz } from "@mui/icons-material";
import { Card, IconButton, Stack, Typography } from "@mui/joy";
import { USERS_LIST } from "../mainMenu/post/constant";
import { UserBar } from "./UserBar";

export const UsersList: FC = () => {
  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography>Recently Active</Typography>
        <IconButton variant="plain">
          <MoreHoriz />
        </IconButton>
      </Stack>
      <Stack spacing={2}>
        {USERS_LIST.map((user) => (
          <UserBar key={user.id} user={user} />
        ))}
      </Stack>
    </Card>
  );
};
