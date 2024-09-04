import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "50px auto",
        backgroundColor: "#ffffff",
        padding: "20px",
      }}
    >
      <Grid container spacing={20}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <Box
            sx={{
              borderBottom: "2px solid #ecedee",
              marginBottom: "20px",
            }}
          />
          <Typography variant="body1" color="text.secondary">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis
            lacus vel augue laoreet rutrum. nec elit. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
          <Box />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2">HTML / CSS</Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "100%",
                  backgroundColor: "#ea5e5e",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">Photoshop</Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "90%",
                  backgroundColor: "#ea5e5e",
                  display: "inline-block",
                }}
              />
              <Box
                sx={{
                  height: "5px",
                  width: "10%",
                  backgroundColor: "#ecedee",
                  display: "inline-block",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">Illustrator</Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "80%",
                  backgroundColor: "#ea5e5e",
                  display: "inline-block",
                }}
              />
              <Box
                sx={{
                  height: "5px",
                  width: "20%",
                  backgroundColor: "#ecedee",
                  display: "inline-block",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">PHP / MYSQL</Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "70%",
                  backgroundColor: "#ea5e5e",
                  display: "inline-block",
                }}
              />
              <Box
                sx={{
                  height: "5px",
                  width: "30%",
                  backgroundColor: "#ecedee",
                  display: "inline-block",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
