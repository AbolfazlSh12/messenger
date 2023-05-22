import { FC, useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Link,
} from "@mui/joy";
import { NAVIGATES } from "../mainMenu/post/constant";
import { MoreHoriz } from "@mui/icons-material";
import { AiOutlineLink } from "react-icons/ai";
import { HiOutlineHashtag } from "react-icons/hi";

export const Navigation: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Stack spacing={2}>
      {NAVIGATES.map(({ name, menu, actions, children }, index) => (
        <Box key={index}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography>{name}</Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {actions?.map(({ name, icon: Icon }, idx) => (
                <IconButton key={idx} variant="plain" color="neutral" size="sm">
                  <Icon />
                </IconButton>
              ))}

              {menu && (
                <>
                  <IconButton
                    variant="plain"
                    color="neutral"
                    size="sm"
                    onClick={handleClick}
                  >
                    <MoreHoriz />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    color="primary"
                    variant="soft"
                    sx={{ borderRadius: 5 }}
                  >
                    {menu.map(({ name }, idx) => (
                      <MenuItem key={idx} onClick={() => setAnchorEl(null)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          </Stack>
          <Stack spacing={1} px={1}>
            {children.map(({ name, type, active }, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", gap: 0.5, p: 0.4 }}
                component={Link}
                color={active ? "white" : "primary.gray1"}
                bgcolor={active ? "primary.500" : "inherit"}
              >
                {type === "LINK" ? <AiOutlineLink /> : <HiOutlineHashtag />}
                <Typography>{name}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
