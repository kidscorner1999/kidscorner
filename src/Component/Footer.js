import {
  EmailRounded,
  Facebook,
  Instagram,
  PhoneInTalkRounded,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 12 }}
        p={"20px"}
        bgcolor={"#E57C23"}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Our Location
          </Typography>
          <Typography color={"#fff"} fontWeight={"bold"} variant="body1">
            Street No. 7, Muktanand Parisar nearby Garden, Dhamnod, Madhya
            Pradesh 454552
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Contact
          </Typography>
          <Stack direction={"row"}>
            <PhoneInTalkRounded
              sx={{
                color: "#fff",
              }}
            />
            <Typography
              color={"#fff"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              +91-9977442669
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <PhoneInTalkRounded
              sx={{
                color: "#fff",
              }}
            />
            <Typography
              color={"#fff"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              +91-7049364327
            </Typography>
          </Stack>
          <Stack direction={"row"} mt={1}>
            <EmailRounded
              sx={{
                color: "#fff",
              }}
            />
            <Typography
              color={"#fff"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              kidscornerplayway@gmail.com
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Follow Us on
          </Typography>
          <Link target="_blank" to="https://www.instagram.com/kidscorner450/?igshid=ZDc4ODBmNjlmNQ%3D%3D">
            <Instagram
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Link>
          <Link target="_blank" to="https://www.youtube.com/@Kidscornerplayway">
            <YouTube
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Link>
          <Link target="_blank" to="https://www.facebook.com/profile.php?id=100092976964170">
            <Facebook
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Link>
          <Link target="_blank" to="https://twitter.com/kidscorner02">
            <Twitter
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Link>
        </Grid>
      </Grid>
      <Divider
        sx={{
          height: 1,
          bgcolor: "#fff",
        }}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
        bgcolor={"#E57C23"}
      >
        <Typography
          color={"white"}
          variant="subtitle1"
          fontWeight={"bold"}
          ml={2}
        >
          © Copyright Kids Corner
        </Typography>
        <Typography color={"white"} mr={2}>
          Developed with ♥ by DuoDevelopers
        </Typography>
      </Stack>
    </Box>
  );
}
