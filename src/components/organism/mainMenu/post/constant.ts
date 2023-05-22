import { AddCircleOutline } from "@mui/icons-material";
import { FC } from "react";

export const USERS_LIST = [
  {
    id: "1",
    profile: {
      name: "John Doe",
      picture: "https://mui.com/static/images/avatar/1.jpg",
    },
  },
  {
    id: "2",
    profile: {
      name: "Jane Smith",
      picture: "https://mui.com/static/images/avatar/4.jpg",
    },
  },
  {
    id: "3",
    profile: {
      name: "Bob Johnson",
      picture: "https://mui.com/static/images/avatar/2.jpg",
    },
  },
];

export const POSTS_LIST = [
  {
    user: USERS_LIST[1],
    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
    createdAt: "5 hours ago",
  },
  {
    user: USERS_LIST[0],
    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
    createdAt: "1 days ago",
  },
  {
    user: USERS_LIST[2],
    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
    createdAt: "2 days ago",
  },
];

type NavigateType = {
  name: string;
  menu?: { name: string }[];
  actions?: { name: string; icon: FC }[];
  children: { type: "SPACE" | "LINK"; name: string; active?: boolean }[];
};

export const NAVIGATES: NavigateType[] = [
  {
    name: "Channels",
    actions: [{ name: "Add Space", icon: AddCircleOutline }],
    children: [
      {
        type: "SPACE",
        name: "General",
        active: true,
      },
      {
        type: "SPACE",
        name: "Design",
      },
      {
        type: "SPACE",
        name: "Engineering",
      },
    ],
  },
  {
    name: "Link",
    menu: [{ name: "Edit Category" }, { name: "Delete Category" }],
    children: [
      {
        type: "LINK",
        name: "Google",
      },
      {
        type: "LINK",
        name: "Home Page",
      },
    ],
  },
];
