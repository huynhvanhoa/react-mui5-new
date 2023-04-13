import { Box, Container } from "@mui/material";
import { flexBetweenCenter, dFlex } from "themes/commonStyles";
import HomeIcon from "@mui/icons-material/Home";

import AppThemeProvider from "themes/AppThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeHk = () => {
  return (
    <AppThemeProvider>
      <CssBaseline />

      <Box
        sx={{
          ...dFlex,
          minHeight: 70,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="2xl">
          <Box
            sx={{
              ...flexBetweenCenter,
              minHeight: 70,
              px: 4,
            }}
          >
            <Box>
              <HomeIcon
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: "26px",
                }}
              />
            </Box>
            <Box>Theme HK</Box>
            <Box>Theme HK</Box>
          </Box>
        </Container>
      </Box>
    </AppThemeProvider>
  );
};

export default ThemeHk;
