import React from "react";
import NavBar from "./Navbar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, ImageListItemBar, Typography } from "@mui/material";
import Footer from "./Footer";
import kcAnnual0 from "../assets/galleryImage/Annual Function/0.png";
import kcAnnual1 from "../assets/galleryImage/Annual Function/1.png";
import kcAnnual2 from "../assets/galleryImage/Annual Function/2.png";
import kcAnnual3 from "../assets/galleryImage/Annual Function/3.png";
import kcAnnual4 from "../assets/galleryImage/Annual Function/4.jpeg";
import kcAnnual5 from "../assets/galleryImage/Annual Function/5.jpeg";
import kcAnnual6 from "../assets/galleryImage/Annual Function/6.jpeg";
import kcAnnual7 from "../assets/galleryImage/Annual Function/7.jpeg";
import kcAnnual8 from "../assets/galleryImage/Annual Function/8.jpg";
import kcBirthday0 from "../assets/galleryImage/Birthday Celedration/0.jpeg";
import kcCertificate0 from "../assets/galleryImage/Certificate/0.jpg";
import kcCertificate1 from "../assets/galleryImage/Certificate/1.jpg";
import kcExhibition0 from "../assets/galleryImage/Exibition/0.jpg";
import kcExhibition1 from "../assets/galleryImage/Exibition/1.jpg";
import kcFelicitation0 from "../assets/galleryImage/felicitation ceremonies/0.jpg";
import kcFelicitation1 from "../assets/galleryImage/felicitation ceremonies/1.jpg";
import kcGarba0 from "../assets/galleryImage/Garba/0.jpg";
import kcGarba1 from "../assets/galleryImage/Garba/1.jpg";
import kcGarba2 from "../assets/galleryImage/Garba/2.jpg";
import kcGreenDay0 from "../assets/galleryImage/Green Day/0.jpeg";
import kcGreenDay1 from "../assets/galleryImage/Green Day/1.jpeg";
import kcGreenDay2 from "../assets/galleryImage/Green Day/2.jpeg";
import kcHoli0 from "../assets/galleryImage/Holi/0.png";
import kcHoli1 from "../assets/galleryImage/Holi/1.png";
import kcHoli2 from "../assets/galleryImage/Holi/2.jpg";
import kcHoli3 from "../assets/galleryImage/Holi/3.jpeg";
import kcIndependenceDay0 from "../assets/galleryImage/IndependentDays/0.png";
import kcIndependenceDay1 from "../assets/galleryImage/IndependentDays/1.jpeg";
import kcJanmashtmi0 from "../assets/galleryImage/Janmaastami/0.png";
import kcJanmashtmi1 from "../assets/galleryImage/Janmaastami/1.png";
import kcJungleDay0 from "../assets/galleryImage/JungleDay/0.png";
import kcJungleDay1 from "../assets/galleryImage/JungleDay/1.jpeg";
import kcKawad0 from "../assets/galleryImage/Kawad/0.png";
import kcKawad1 from "../assets/galleryImage/Kawad/1.png";
import kcKawad2 from "../assets/galleryImage/Kawad/2.jpeg";
import kcPaperDesign0 from "../assets/galleryImage/PeparDesign/0.jpg";
import kcPaperDesign1 from "../assets/galleryImage/PeparDesign/1.jpg";
import kcPaperDesign2 from "../assets/galleryImage/PeparDesign/2.jpg";
import kcPaperDesign3 from "../assets/galleryImage/PeparDesign/3.jpeg";
import kcPaperDesign4 from "../assets/galleryImage/PeparDesign/4.jpg";
import kcPoolDay0 from "../assets/galleryImage/PoolDay/0.png";
import kcPoolDay1 from "../assets/galleryImage/PoolDay/1.jpeg";
import kcPoolDay2 from "../assets/galleryImage/PoolDay/2.jpeg";
import kcRainDay0 from "../assets/galleryImage/Rain Day/0.jpeg";
import kcRainDay1 from "../assets/galleryImage/Rain Day/1.jpg";
import kcWinterDay0 from "../assets/galleryImage/WinterDay/0.jpeg";
import kcWinterDay1 from "../assets/galleryImage/WinterDay/1.jpeg";
import kcWinterDay2 from "../assets/galleryImage/WinterDay/2.jpg";
import kcSchool0 from "../assets/galleryImage/School/0.png";
import kcSchool1 from "../assets/galleryImage/School/1.png";
import kcSchool2 from "../assets/galleryImage/School/2.png";
// import kcSchool3 from "../assets/galleryImage/School/3.jpeg";
import kcTemple0 from "../assets/galleryImage/TourVisit BawanGaja or IskonTemple/0.png";
import kcTemple1 from "../assets/galleryImage/TourVisit BawanGaja or IskonTemple/1.jpeg";
import kcTemple2 from "../assets/galleryImage/TourVisit BawanGaja or IskonTemple/2.jpeg";
import kcTemple3 from "../assets/galleryImage/TourVisit BawanGaja or IskonTemple/3.jpeg";
import kcTemple4 from "../assets/galleryImage/TourVisit BawanGaja or IskonTemple/4.jpeg";

import kcYoga0 from "../assets/galleryImage/Yoga And Surya Namaskar/0.jpeg";
import kcYoga1 from "../assets/galleryImage/Yoga And Surya Namaskar/1.jpeg";
import kcYoga2 from "../assets/galleryImage/Yoga And Surya Namaskar/2.jpeg";
import kcYoga3 from "../assets/galleryImage/Yoga And Surya Namaskar/3.jpeg";

export default function Gallery() {
  const imageListAnnualFunction = [
    {
      img: kcAnnual0,
      title: "Annual Function",
    },
    {
      img: kcAnnual1,
      title: "Annual Function",
    },
    {
      img: kcAnnual2,
      title: "Annual Function",
    },
    {
      img: kcAnnual3,
      title: "Annual Function",
    },
    {
      img: kcAnnual4,
      title: "Annual Function",
    },
    {
      img: kcAnnual5,
      title: "Annual Function",
    },
    {
      img: kcAnnual6,
      title: "Annual Function",
    },
    {
      img: kcAnnual7,
      title: "Annual Function",
    },
    {
      img: kcAnnual8,
      title: "Annual Function",
    },
  ];
  const imageListBirthdayCeleberation = [
    {
      img: kcBirthday0,
      title: "Birthday Celeberation",
    },
  ];
  const imageListCertificate = [
    {
      img: kcCertificate0,
      title: "Certificate Distribution",
    },
    {
      img: kcCertificate1,
      title: "Certificate Distribution",
    },
  ];
  const imageListExhibition = [
    {
      img: kcExhibition0,
      title: "Exhibition",
    },
    {
      img: kcExhibition1,
      title: "Exhibition",
    },
  ];
  const imageListFelicitation = [
    {
      img: kcFelicitation0,
      title: "Felicitation",
    },
    {
      img: kcFelicitation1,
      title: "Felicitaion",
    },
  ];

  const imageListGarba = [
    {
      img: kcGarba0,
      title: "Garba",
    },
    {
      img: kcGarba1,
      title: "Garba",
    },
    {
      img: kcGarba2,
      title: "Garba",
    },
  ];

  const imageListGreenDay = [
    {
      img: kcGreenDay0,
      title: "Green Day",
    },
    {
      img: kcGreenDay1,
      title: "Green Day",
    },
    {
      img: kcGreenDay2,
      title: "Green Day",
    },
  ];

  const imageListHoli = [
    {
      img: kcHoli0,
      title: "Holi Celeberation",
    },
    {
      img: kcHoli1,
      title: "Holi Celeberation",
    },
    {
      img: kcHoli2,
      title: "Holi Celeberation",
    },
    {
      img: kcHoli3,
      title: "Holi Celeberation",
    },
  ];

  const imageListIndependenceDay = [
    {
      img: kcIndependenceDay0,
      title: "Independence Day Celeberation",
    },
    {
      img: kcIndependenceDay1,
      title: "Independence Day Celeberation",
    },
  ];

  const imageListJanmashtmi = [
    {
      img: kcJanmashtmi0,
      title: "Janmahtmi",
    },
    {
      img: kcJanmashtmi1,
      title: "Janmahtmi",
    },
  ];

  const imageListJungleDay = [
    {
      img: kcJungleDay0,
      title: "Jungle Day",
    },
    {
      img: kcJungleDay1,
      title: "Jungle Day",
    },
  ];

  const imageListKawad = [
    {
      img: kcKawad0,
      title: "Kawad Yatra",
    },
    {
      img: kcKawad1,
      title: "Kawad Yatra",
    },
    {
      img: kcKawad2,
      title: "Kawad Yatra",
    },
  ];

  const imageListPaperDesign = [
    {
      img: kcPaperDesign0,
      title: "Paper Design",
    },
    {
      img: kcPaperDesign1,
      title: "Paper Design",
    },
    {
      img: kcPaperDesign2,
      title: "Paper Design",
    },

    {
      img: kcPaperDesign3,
      title: "Paper Design",
    },

    {
      img: kcPaperDesign4,
      title: "Paper Design",
    },
  ];

  const imageListPoolDay = [
    {
      img: kcPoolDay0,
      title: "Pool Day",
    },
    {
      img: kcPoolDay1,
      title: "Pool Day",
    },
    {
      img: kcPoolDay2,
      title: "Pool Day",
    },
  ];

  const imageListRainDay = [
    {
      img: kcRainDay0,
      title: "Rain Day",
    },
    {
      img: kcRainDay1,
      title: "Rain Day",
    },
  ];

  const imageListSchool = [
    {
      img: kcSchool0,
      title: "Kids Corner",
    },
    {
      img: kcSchool1,
      title: "Kids Corner",
    },

    {
      img: kcSchool2,
      title: "Kids Corner",
    },
    // {
    //   img: kcSchool3,
    //   title: "Kids Corner",
    // },
  ];

  const imageListTemple = [
    {
      img: kcTemple0,
      title: "Tour Visit",
    },
    {
      img: kcTemple1,
      title: "Tour Visit",
    },
    {
      img: kcTemple2,
      title: "Tour Visit",
    },
    {
      img: kcTemple3,
      title: "Tour Visit",
    },
    {
      img: kcTemple4,
      title: "Tour Visit",
    },
  ];

  const imageListWinter = [
    {
      img: kcWinterDay0,
      title: "Winter Day",
    },
    {
      img: kcWinterDay1,
      title: "Winter Day",
    },
    {
      img: kcWinterDay2,
      title: "Winter Day",
    },
  ];

  const imageListYoga = [
    {
      img: kcYoga0,
      title: "Surya Namaskar",
    },
    {
      img: kcYoga1,
      title: "Surya Namaskar",
    },
    {
      img: kcYoga2,
      title: "Surya Namaskar",
    },
    {
      img: kcYoga3,
      title: "Surya Namaskar",
    },
  ];
  return (
    <Box>
      <NavBar position={"static"} />
      <ImageList
        cols={3}
        sx={{
          mt: 9,
          mb: 4,
        }}
      >
        {imageListSchool.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        
        {imageListJanmashtmi.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        
        {imageListExhibition.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListAnnualFunction.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListHoli.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListPoolDay.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListYoga.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListGarba.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListRainDay.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}

        {imageListWinter.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListJungleDay.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListIndependenceDay.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListKawad.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        
        
        {imageListTemple.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListBirthdayCeleberation.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
       
        
        {imageListCertificate.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListFelicitation.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        {imageListGreenDay.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        
        {imageListPaperDesign.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
        
      </ImageList>
      <Footer />
    </Box>
  );
}
