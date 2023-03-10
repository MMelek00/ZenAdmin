

import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, IconButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useToggleTheme } from "../core/theme.js";

function ThemeButton(props: ThemeButtonProps): JSX.Element {
  const { ...other } = props;
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} {...other}>
      {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}

type ThemeButtonProps = Omit<IconButtonProps, "children">;

export { ThemeButton };
