import React from "react";
import { Container, Box, Typography, Button, keyframes, TextField } from "@mui/material";

const panZoom = keyframes`
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.05) translate(-2%, -1%); }
  100% { transform: scale(1) translate(0, 0); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const ContactUs = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            flex: "0 0 20%",
            bgcolor: "#f8f8f8",
            minHeight: { xs: "300px", md: "100%" },
            overflow: "hidden",
            position: "relative",
            "&:hover img": {
              animation: `${panZoom} 3s ease-in-out infinite`,
            },
          }}
        >
          <Box
            component="img"
            src="/contactUs.jpg"
            alt="Contact Us"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "transform 0.5s",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: "0 0 80%",
            bgcolor: "#232323",
            color: "#ebebeb",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            "& > *": {
              animation: `${fadeInUp} 1s ease-out`,
              animationFillMode: "both",
            },
            "& > *:nth-of-type(1)": { animationDelay: "0.1s" },
            "& > *:nth-of-type(2)": { animationDelay: "0.2s" },
            "& > *:nth-of-type(3)": { animationDelay: "0.3s" },
            "& > *:nth-of-type(4)": { animationDelay: "0.4s" },
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 400 }}>
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#d7d7d7",
              fontWeight: 600,
              textTransform: "uppercase",
              mb: 2,
              fontSize: "15px",
            }}
          >
            information
          </Typography>
          <Typography variant="body1" sx={{ color: "#939393", mb: 3 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "70ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                InputProps={{
                  sx: {
                    color: "#d7d7d7",
                    borderColor: "#939393",
                    "& fieldset": {
                      borderColor: "#939393",
                    },
                    "&:hover fieldset": {
                      borderColor: "#939393",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#939393",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#939393" },
                }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                InputProps={{
                  sx: {
                    color: "#d7d7d7",
                    borderColor: "#939393",
                    "& fieldset": {
                      borderColor: "#939393",
                    },
                    "&:hover fieldset": {
                      borderColor: "#939393",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#939393",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#939393" },
                }}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                InputProps={{
                  sx: {
                    color: "#d7d7d7",
                    borderColor: "#939393",
                    "& fieldset": {
                      borderColor: "#939393",
                    },
                    "&:hover fieldset": {
                      borderColor: "#939393",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#939393",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#939393" },
                }}
              />
            </Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "20%",
                  height: "40px",
                  transition: "transform 1s ease-in-out",
                  padding: "25px",
                  margin: "15px",
                  "&:hover": {
                    animation: `${scaleUp} 0.6s forwards`,
                  },
                }}
              >
                Submit
              </Button>
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
