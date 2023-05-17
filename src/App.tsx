import { CssBaseline } from "@mui/joy";
import { CacheProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import createEmotionCache from "./utils/createEmotionCache";
import Router from "./routes/Router";

import "./assets/global.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <CacheProvider value={createEmotionCache()}>
      <CssBaseline />
      <Router />
      <ToastContainer limit={3} autoClose={10000} />
    </CacheProvider>
  );
}

export default App;
