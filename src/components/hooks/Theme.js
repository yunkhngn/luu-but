import React from "react";

import {
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ThemeButton from "./ThemeButton";

const Theme = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [modeTheme, setMode] = React.useState(prefersDarkMode);

    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: modeTheme ? 'dark' : 'light',
            //make the background card red
            // primary: {
            //   // main: modeTheme ? '#ff0000' : '#0000ff',
            // },
            // secondary:{

            // // },
            // defaultBg: {
            //   default: modeTheme ? '#000000' : '#ffffff',
            // }
          },
        }),
      [modeTheme],
    );

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeButton setMode={setMode} modeTheme={modeTheme}/>
        <div className="App">{children}</div>
    </ThemeProvider>
  );
};

export default Theme;
