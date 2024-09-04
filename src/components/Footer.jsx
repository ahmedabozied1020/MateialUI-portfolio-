import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AnimatedImg = styled("img")`
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#232323",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <AnimatedImg src="clients_logo_120px_1.png" alt="client" style={{ animationDelay: "0s" }} />
        <AnimatedImg
          src="clients_logo_120px_2.png"
          alt="client"
          style={{ animationDelay: "0.5s" }}
        />
        <AnimatedImg src="clients_logo_120px_3.png" alt="client" style={{ animationDelay: "1s" }} />
        <AnimatedImg
          src="clients_logo_120px_4.png"
          alt="client"
          style={{ animationDelay: "1.5s" }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#5c5c5c",
          padding: "20px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body2" color="white">
              © Copyright DynamicXX 2016 - All Rights Reserved
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton href="#" color="info">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="primary">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="secondary">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
