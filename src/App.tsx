import { CssBaseline, ThemeProvider } from "@mui/joy";
import { CacheProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import createEmotionCache from "./utils/createEmotionCache";
import { CssVarsProvider } from "@mui/joy/styles";
import Router from "./routes/Router";
import "./assets/global.css";

import "./assets/global.css";
import "react-toastify/dist/ReactToastify.min.css";
import theme from "./configs/theme";
import { useEffect, useLayoutEffect, useState } from "react";

const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const App = () => {
  const [node, setNode] = useState<HTMLElement | null>(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById("mode-toggle"));
  }, []);

  return (
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CssVarsProvider
          colorSchemeNode={node || null}
          colorSchemeSelector="#mode-toggle"
          modeStorageKey="mode-toggle-demo"
        >
          <Router />
        </CssVarsProvider>
        <ToastContainer limit={3} autoClose={10000} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
