import React, { createContext, useRef } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "@mui/icons-material";

const Introduction = () => {
  return (
    <Box>
      <img
        src="../../public/background.jpg"
        alt="Background"
        style={{ width: "100%", height: "auto" }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#6e878c",
          "&:hover": {
            bgcolor: "#4a5b5c",
          },
        }}
      >
        Watch Mysite
      </Button>
    </Box>
  );
};

export default Introduction;
