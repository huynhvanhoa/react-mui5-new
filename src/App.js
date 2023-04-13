import { Box, Container } from "@mui/material";
import ThemeHk from "components/mui5/ThemeHk";
import ThemeMui5 from "components/mui5/ThemeMui5";
import ButtonMui5 from "components/mui5/ButtonMui5";
import FormMui5 from "components/mui5/FormMui5";
import BoxMui5 from "components/mui5/BoxMui5";
import GridMui5 from "components/mui5/GridMui5";

function App() {
  return (
    <Container maxWidth="2xl" sx={{ mb: 3, mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: 44,
          color: "red",
        }}
      >
        React MUI5 new
      </Box>

      <ThemeHk />

      <ThemeMui5 />

      <ButtonMui5 />
      <FormMui5 />
      <BoxMui5 />
      <GridMui5 />
    </Container>
  );
}

export default App;
