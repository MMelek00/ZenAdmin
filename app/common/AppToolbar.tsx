import { ArrowBack } from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  IconButton,
  Link,
  Toolbar,
  Typography
} from "@mui/material";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeButton } from "./ThemeButton.js";

type AppToolbarProps = AppBarProps;

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { sx, ...other } = props;
  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }}
      color="default"
      elevation={1}
      {...other}
    >
      <Toolbar>
        {location.pathname !== "/" && (
          <IconButton
            color="primary"
            aria-label="ArrowBack"
            onClick={() => navigate(`/`)}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
          <Link color="inherit" underline="none" to="/" component={NavLink}>
            {APP_NAME}
          </Link>
        </Typography>

        <span style={{ flexGrow: 1 }} />

        <ThemeButton sx={{ mr: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
