import { Button } from "@mui/material";
import { customStyle } from "styles";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "theme";
import React from "react";

const ThemeMui5 = () => {
  const btnStyle = {
    bgcolor: "green",
    color: "black",
  };
  return (
    <>
      <h1>Customization</h1>
      <Button variant="contained" color="secondary">
        Hello
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "black" }}
      >
        Hello
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "blue", color: "yellow" }}
      >
        Hello
      </Button>

      <Button variant="contained" sx={{ bgcolor: "yellow", color: "red" }}>
        Hello
      </Button>
      <Button variant="contained" sx={btnStyle}>
        Hello
      </Button>
      <Button variant="contained" sx={customStyle.btnNew}>
        Hello
      </Button>

      <ThemeProvider theme={customTheme}>
        <Button variant="contained" color="secondary">
          Hello
        </Button>
        <Button variant="contained" color="mycolor">
          Hello
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ThemeMui5;
