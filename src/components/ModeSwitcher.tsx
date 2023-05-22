import { useEffect, useState } from "react";
import { IconButton } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import { LightMode, NightsStay } from "@mui/icons-material";

export const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <IconButton
      variant="plain"
      sx={{ borderRadius: "50%" }}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <LightMode /> : <NightsStay />}
    </IconButton>
  );
};
