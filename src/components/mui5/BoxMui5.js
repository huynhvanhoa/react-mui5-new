import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

const BoxMui5 = () => {
  return (
    <>
      <h1>These are System Key/Props</h1>
      <h1>Alignment</h1>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>
      <h1>Font Weight</h1>
      <Box fontWeight="bold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>
      <h1>Font Size</h1>
      <Box fontSize={24}>Hello</Box>
      <h1>Font Style</h1>
      <Box fontStyle="italic">Hello</Box>
      <h1>Color</h1>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>
      <h1>Background Color</h1>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>
      <h1>Margin</h1>
      <Box m={10}>All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>
      <h1>Padding</h1>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>
      <h1>Width Sizing</h1>
      <Box width={1 / 4} bgcolor="red">
        Width 1/4
      </Box>
      <Box width={1} bgcolor="green">
        Width 100%
      </Box>
      <Box width="50%" bgcolor="yellow">
        Width 50%
      </Box>
      <Box width={500} bgcolor="pink">
        Width 500px
      </Box>
      <h1>Height Sizing</h1>
      <Box height="50%" bgcolor="yellow">
        Height 50%
      </Box>
      <Box height={500} bgcolor="pink">
        Height 500px
      </Box>
      <h1>Border</h1>
      <Stack spacing={4}>
        <Box border={1}>Hello 1</Box>
        <Box borderTop={1}>Hello 2</Box>
        <Box borderBottom={1}>Hello 3</Box>
        <Box borderLeft={1}>Hello 4</Box>
        <Box borderRight={1}>Hello 5</Box>
      </Stack>
      <Stack spacing={4}>
        <Box border={0}>Hello 1</Box>
        <Box border={1} borderTop={0}>
          Hello 2
        </Box>
        <Box border={1} borderBottom={0}>
          Hello 3
        </Box>
        <Box border={1} borderLeft={0}>
          Hello 4
        </Box>
        <Box border={1} borderRight={0}>
          Hello 5
        </Box>
      </Stack>
      <h1>Border Color</h1>
      <Box border={1} borderColor="secondary.main">
        Hello
      </Box>
      <h1>Border Radius</h1>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>
      <h1>Avatar</h1>
      <Avatar>H</Avatar>
      <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar>
        {" "}
        <DeleteIcon />{" "}
      </Avatar>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
      </AvatarGroup>
      <h1>Badge</h1>
      <Stack spacing={4} direction="row">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="success" max={40}>
          <MailIcon />
        </Badge>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={100}
          color="primary"
          max={50}
        >
          <MailIcon />
        </Badge>
        <Badge color="primary" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>
      <h1>Chip</h1>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => console.log("Chip Clicked")} />
        <Chip
          label="Deletable"
          onDelete={() => console.log("Chip Delete Clicked")}
        />
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
        <Chip
          avatar={
            <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
          }
          label="Avatar Chip"
        />
      </Stack>
      <h1>Divider</h1>
      <Divider />
      <Divider orientation="vertical" />
      <Divider>CENTER</Divider>
      <Divider textAlign="left">LEFT</Divider>
      <h1>List</h1>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
      <h1>Table</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">Sonam</TableCell>
              <TableCell align="right">101</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="right">Rahul</TableCell>
              <TableCell align="right">102</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Tooltip</h1>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <h1>Typography</h1>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <h1>Alert</h1>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <h1>Progress</h1>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <LinearProgress />
      <LinearProgress color="secondary" />
      <h1>Skeleton</h1>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <h1>Accordion</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      <h1>App Bar</h1>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BoxMui5;
