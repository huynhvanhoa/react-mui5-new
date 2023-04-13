import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { FavoriteBorder } from "@mui/icons-material";
import React from "react";

const FormMui5 = () => {
  return (
    <>
      <h1>Floating Action Button</h1>
      <Fab color="secondary">R</Fab>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab disabled>
        <FavoriteIcon />
      </Fab>
      <h1>Checkbox</h1>
      <Checkbox />
      <Checkbox checked />
      <Checkbox checked={true} color="success" />
      <Checkbox defaultChecked indeterminate />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />
      <Checkbox onChange={() => console.log("Checked Done")} />
      <FormControlLabel control={<Checkbox />} label="India" />
      <FormControlLabel
        control={<Checkbox />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="End"
        labelPlacement="end"
      />
      <h1>Radio Button</h1>
      <Radio value="male" name="radio-button" />
      <Radio value="female" name="radio-button" />
      <FormControlLabel control={<Radio />} label="Female" />
      <FormControlLabel control={<Radio />} label="Top" labelPlacement="top" />
      <FormControlLabel
        control={<Radio />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Radio />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel control={<Radio />} label="End" labelPlacement="end" />
      <RadioGroup row>
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Female" />
        <FormControlLabel control={<Radio />} label="Other" />
      </RadioGroup>
      <h1>Rating</h1>
      <Rating />
      <Rating value={3} readOnly />
      <Rating defaultValue={2.5} precision={0.5} />
      <h1>Slider</h1>
      <Slider />
      <Slider value={5} color="secondary" />
      <Slider defaultValue={30} color="secondary" />
      <Box sx={{ height: 300 }}>
        <Slider orientation="vertical" defaultValue={30} color="secondary" />
      </Box>
      <h1>Switch</h1>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <FormControlLabel control={<Switch />} label="Dark" />
      <h1>Text Field</h1>
      <TextField />
      <TextField label="Name" />
      <TextField label="Standard" variant="standard" />
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <h1>Box</h1>
      <Box>Hello World</Box>
      <h1>Stack</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Click Me</Button>
        <Button variant="contained" color="secondary">
          Click Me
        </Button>
        <Button variant="contained" color="primary" href="https://google.com">
          Link
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Stack>
    </>
  );
};

export default FormMui5;
