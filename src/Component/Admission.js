import React from "react";
import Footer from "./Footer";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import NavBar from "./Navbar";
import kcQR from "../assets/kc-qr.png";

export default function Admission() {
  const listOfDocument = [
    "2 Student's passport size photograph",
    "2 Parents' passport size photograph",
    "Last academic result (If applicable)",
    "Child's  Aadhar Card photo copy",
    "Child's Birth Certificate photo copy",
    "Samagra ID",
    "Family ID",
    "Account Details",
  ];
  return (
    <Box>
      <NavBar position={"static"} />
      <Box
        sx={{
          mt: 10,
          mb: 6,
          ml: 8,
          mr: 8,
        }}
      >
        <Stack spacing={4} justifyContent={"space-around"}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography color={"#E57C23"} fontWeight={"bold"} fontSize={20}>
              Scan QR code below for Admission Form
            </Typography>
            <img
              src={kcQR}
              srcSet={kcQR}
              alt={"kc-qr"}
              loading="lazy"
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </Stack>
          <Stack alignItems={"center"} spacing={1}>
            <Typography color={"#E57C23"} fontWeight={"bold"} fontSize={20}>
              List of Documents required for Admission Process
            </Typography>
            <List dense>
              {listOfDocument.map((item, index) => (
                <ListItem>
                  <Typography fontWeight={"bold"}>
                    {`${item}`}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
