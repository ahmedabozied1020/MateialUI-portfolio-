import React, { useRef } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const cards = [
  {
    title: "Creative Agency",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat .",
    imageUrl: "icon_51px_1.png",
  },
  {
    title: "Web Design",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat .",
    imageUrl: "icon_51px_2.png",
  },
  {
    title: "Hire us now",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat .",
    imageUrl: "icon_51px_3.png",
  },
];

const Cards = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: "50px" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                height="50px"
                image={card.imageUrl}
                alt={card.title}
                sx={{ objectFit: "contain", padding: "20px", width: "50px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    width: "70%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
