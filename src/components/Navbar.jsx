import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#5c5c5c" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ahmed Abozied Portfolio
        </Typography>
        <Box>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "rgb(232 222 213)",
                backgroundColor: "rgb(92 92 92)",
              },
            }}
            href="#about"
          >
            About Me
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "rgb(232 222 213)",
                backgroundColor: "rgb(92 92 92)",
              },
            }}
            href="#projects"
          >
            Projects
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "rgb(232 222 213)",
                backgroundColor: "rgb(92 92 92)",
              },
            }}
            href="#skills"
          >
            Skills
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              "&:hover": {
                color: "rgb(232 222 213)",
                backgroundColor: "rgb(92 92 92)",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
