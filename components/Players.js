import React from "react";
// import { encode } from "base-64";
import Link from "next/link";
import Image from "next/image";
// import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(() => {
  return {
    heading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      marginBottom: "10px",
    },
    headingNews: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
      paddingTop: "5px",
    },
    newsFeed: {
      marginBottom: "10px",
      height: "85px",
    },
    news: {
      width: "110px !important",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    ads: {
      width: "100%",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
    },
    activeHeading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      marginBottom: "10px",
    },
    playerCard: {
      width: "100%",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "10px 20px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    name: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      color: "white",
    },
    info: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
    },
    star: {
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    buttonLeft: {
      color: "white",
      position: "absolute",
      top: "30px",
      left: "-16px",
    },
    buttonRight: {
      color: "white",
      position: "absolute",
      top: "30px",
      right: "-16px",
    },
  };
});

export default function Players() {
  const classes = useStyles();

  const RightArrow = ({ onClick }) => {
    return (
      <ChevronRightIcon onClick={onClick} className={classes.buttonRight} />
    );
  };

  const LeftArrow = ({ onClick }) => {
    return <ChevronLeftIcon onClick={onClick} className={classes.buttonLeft} />;
  };

  const settings = {
    dots: false,
    Infinity: false,
    speed: 200,
    slidesToShow: 3,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <>
      <div className={classes.players}>
        <div className={classes.heading}>WHAT’S TRENDING</div>
        <div className={classes.newsFeed}>
          <Slider {...settings}>
            {newsPlayer.map((value) => {
              return (
                <div className={classes.news}>
                  <Image src="/images/t1.svg" alt="t1" width="60" height="47" />
                  <div className={classes.headingNews}>{value}</div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className={classes.ads}>AD GOES HERE</div>
        <div className={classes.activeHeading}>
          <span style={{ color: "#40E9D2" }}>PLAYERS</span>
          {` > Strikers`}
        </div>
        {strikersData.map((value) => {
          return (
            <>
              <Link
                href={{
                  pathname: "/player/[playerID]",
                  query: {
                    id: value.id,
                    playerID: value.id,
                    playerName: value.name,
                    playerType: "Strikers",
                  },
                }}
              >
                <div className={classes.playerCard}>
                  <Image
                    src={value.image}
                    alt={value.image}
                    width="65"
                    height="65"
                  />
                  <div className="stat">
                    <div className={classes.name}>{value.name}</div>
                    <div className={classes.info}>{value.info}</div>
                  </div>
                  <Image
                    src={value.leagueImage}
                    alt="t2"
                    width="43"
                    height="43"
                  />
                  <StarIcon
                    className={
                      value.isFavorite ? classes.isFavorite : classes.star
                    }
                  />
                </div>
              </Link>
            </>
          );
        })}
        <div className={classes.activeHeading}>
          <span style={{ color: "#40E9D2" }}>PLAYERS</span>
          {` > Prospects`}
        </div>
        {prospectsData.map((value) => {
          return (
            <>
              <Link
                href={{
                  pathname: "/player/[playerID]",
                  query: {
                    id: value.id,
                    playerID: value.id,
                    playerName: value.name,
                    playerType: "Prospects",
                  },
                }}
              >
                <div className={classes.playerCard}>
                  <Image
                    src={value.image}
                    alt={value.image}
                    width="65"
                    height="65"
                  />
                  <div className="stat">
                    <div className={classes.name}>{value.name}</div>
                    <div className={classes.info}>{value.info}</div>
                  </div>
                  <Image
                    src={value.leagueImage}
                    alt="t2"
                    width="33"
                    height="50"
                  />
                  <StarIcon
                    className={
                      value.isFavorite ? classes.isFavorite : classes.star
                    }
                  />
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

// Dummy DATA to be deleted

const strikersData = [
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "MV: $300K",
    leagueImage: "/images/t2.svg",
    isFavorite: true,
    id: 1,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "MV: $300K",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
    id: 2,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "MV: $300K",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
    id: 3,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "MV: $300K",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
    id: 4,
  },
];

const prospectsData = [
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/p1.svg",
    isFavorite: true,
    id: 1,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/p1.svg",
    isFavorite: false,
    id: 2,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/p1.svg",
    isFavorite: false,
    id: 3,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/p1.svg",
    isFavorite: false,
    id: 4,
  },
];

const newsPlayer = [
  "M. Leon",
  "A.Benton",
  "M. Leon",
  "A.Benton",
  "M. Leon",
  "A.Benton",
];
