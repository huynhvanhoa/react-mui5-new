import { Button, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const ButtonMui5 = () => {
  return (
    <>
      <h1>Text Button</h1>
      <Button>Click Me</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="primary" href="https://google.com">
        Link
      </Button>
      <Button disabled>Disabled</Button>
      <h1>Contained Button</h1>
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
      <h1>Outlined Button</h1>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" href="https://google.com" color="primary">
        Link
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <h1>Button Size</h1>
      <Button variant="contained" color="secondary" size="small">
        Small
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Medium
      </Button>
      <Button variant="contained" color="secondary" size="large">
        Large
      </Button>
      <h1>Button with Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>
        Delete
      </Button>
      <h1>Icon Button</h1>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>
      <h1>Custom Button</h1>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        Custom1
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "pink" }}>
        Custom2
      </Button>
      <h1>Button with Click Event</h1>
      <Button variant="contained" onClick={() => console.log("Button Clicked")}>
        Click Me
      </Button>
      <h1>Button Group</h1>
      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>Vertical Button Group</h1>
      <ButtonGroup variant="contained" color="secondary" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonMui5;
