import { Avatar, Stack, Typography } from "@mui/joy";
import { FC } from "react";

type UserBarPropsType = {
  user: {
    id: string;
    profile: {
      name: string;
      picture: string;
    };
  };
};

export const UserBar: FC<UserBarPropsType> = ({ user }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        alt={user.profile.name}
        src={user.profile.picture}
        color="primary"
      />
      <Typography level="body1" fontWeight="lg">
        {user.profile.name}
      </Typography>
    </Stack>
  );
};
