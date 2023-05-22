import { FC } from "react";
import { Grid, Stack } from "@mui/joy";
import { Header } from "../components/organism/layout/Header";
import { MainNavbar } from "../components/organism/mainMenu/MainNavbar";
import { Post } from "../components/organism/mainMenu/post";
import { UsersList } from "../components/organism/usersList";
import { ContentInput } from "../components/organism/mainMenu/ContentInput";
import { POSTS_LIST } from "../components/organism/mainMenu/post/constant";
import { Navigation } from "../components/organism/navigation";

const Home: FC = () => {
  return (
    <Stack minHeight="100vh" id="mode-toggle" bgcolor="background.body">
      <Header />
      <Stack flexGrow={1}>
        <Grid container gap={3} p={2}>
          <Grid xs>
            <Navigation />
          </Grid>
          {/* Main menu */}
          <Grid xs={5}>
            <Stack spacing={2}>
              <MainNavbar />
              <ContentInput />
              {POSTS_LIST.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </Stack>
          </Grid>
          <Grid xs>
            <UsersList />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
