import { FC, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import {
  Favorite,
  FavoriteBorder,
  InsertCommentOutlined,
} from "@mui/icons-material";

type PostPropsType = {
  post: {
    user: { id: string; profile: { name: string; picture: string } };
    content: string;
    createdAt: string;
  };
};

export const Post: FC<PostPropsType> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Card>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
          <Avatar
            alt={post.user.profile.name}
            src={post.user.profile.picture}
            color="primary"
          />
          <div>
            <Typography fontWeight="lg" level="body2">
              {post.user.profile.name}
            </Typography>
            <Typography level="body2">{post.createdAt}</Typography>
          </div>
        </Box>
        <Typography fontSize="sm">{post.content}</Typography>
        <Divider />
        <Stack direction="row" spacing={1}>
          <Button
            variant={liked ? "soft" : "outlined"}
            color={liked ? "danger" : "neutral"}
            fullWidth
            startDecorator={liked ? <Favorite /> : <FavoriteBorder />}
            onClick={() => setLiked(!liked)}
          >
            Like
          </Button>
          <Button
            variant="outlined"
            color="neutral"
            fullWidth
            startDecorator={<InsertCommentOutlined />}
          >
            Comment
          </Button>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={1}>
          <Avatar alt="Abolfazl Sh" src="/static/images/avatar/1.jpg" color="info" />
          <Input placeholder="Add a comment" fullWidth variant="soft" />
        </Stack>
      </Stack>
    </Card>
  );
};
