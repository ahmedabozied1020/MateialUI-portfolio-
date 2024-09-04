import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const SocialIcon = ({ Icon }) => (
  <Box component="a" href="#" sx={{ color: "text.primary", mr: 1 }}>
    <Icon fontSize="small" />
  </Box>
);

const TeamMember = ({ name, role, image, socials }) => (
  <Box sx={{ textAlign: "center", mb: 4 }}>
    <Box sx={{ mb: 1 }}>
      {socials.map((social, index) => (
        <SocialIcon key={index} Icon={social} />
      ))}
    </Box>
    <Avatar src={image} alt={name} sx={{ width: 190, height: 190, mx: "auto", mb: 1 }} />
    <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: 600 }}>
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {role}
    </Typography>
  </Box>
);

const MyTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO Management",
      image: "team_image_1.jpg",
      socials: [Facebook, Twitter, LinkedIn],
    },
    {
      name: "Jake Doe",
      role: "Web Developer",
      image: "team_image_2.jpg",
      socials: [Facebook, Twitter, Instagram, LinkedIn],
    },
    {
      name: "Micheal Doe",
      role: "Web Designer",
      image: "team_image_3.jpg",
      socials: [Facebook, Twitter, LinkedIn],
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          My Team
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 2,
            bgcolor: "grey.300",
            mx: "auto",
            mb: 6,
          }}
        />
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyTeam;
