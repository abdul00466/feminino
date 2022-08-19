import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { competitionsData } from "../../../DummyData/competitions";

const useStyles = makeStyles(() => {
  return {
    card: {
      width: "100%",
      height: "85px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& :first-child": {
        flexShrink: "0",
      },
    },
    star: {
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    name: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    breadcrumbsMain: {
      color: "#40E9D2",
      fontSize: "18px",
      fontFamily: "Montserrat",
    },
    breadcrumbs: {
      color: "white",
      fontSize: "16px",
      fontFamily: "Montserrat",
    },
    chevron: {
      color: "white",
    },
    selectedThumb: {
      color: "#40E9D2",
    },
    selection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "rgba(64, 233, 210, 0.5)",
      marginBottom: "10px",
    },
    content: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
      padding: "20px 20px",
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
    },
    info: {
      display: "flex",
      marginBottom: "120px",
      fontSize: "18px",
    },
    logos: {
      display: "flex",
      flexDirection: "column",
      marginRight: "30px",
      "& div": {
        marginBottom: "20px",
        flexShrink: "0",
      },
    },
    playerInfo: {
      "& div": {
        marginBottom: "20px",
      },
    },
    stat: {
      textAlign: "center",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();
  const {
    query: { id: competitionID, playerType, playerName },
  } = useRouter();

  const competitionType = "Teams";

  const { data: allCompData } = useQuery("competitions", () => {
    return competitionsData;
  });

  const compData =
    allCompData?.find((value) => value.competition_id === competitionID) || {};

  const initials = compData.name?.match(/\b\w/g).join("").toUpperCase();

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <ChevronRightIcon
            classes={{ root: classes.chevron }}
          ></ChevronRightIcon>
        }
        maxItems={3}
      >
        <Link href="/">
          <span className={classes.breadcrumbsMain}>PLAYERS</span>
        </Link>
        <span className={classes.breadcrumbs}>{playerType}</span>
        <span className={classes.breadcrumbs}>{playerName}</span>
      </Breadcrumbs>
      <div className={classes.card}>
        <Image src="/images/t1.svg" alt="comp logo" width="65" height="75" />
        <div className={classes.name}>
          <div>{playerName}</div>
          <div>Angel City FC #21</div>
        </div>
        <StarIcon
          className={compData.isFavorite ? classes.isFavorite : classes.star}
        />
      </div>
      <div className={classes.selection}>
        <div
          style={{ color: "#40E9D2", padding: "0px 30px" }}
        >{`MV: $${data.amount}K`}</div>
        <div style={{ padding: "0px 10px" }}>
          <ThumbUpIcon classes={{ root: classes.chevron }}></ThumbUpIcon>
        </div>
        <div style={{ padding: "0px 10px" }}>
          <ThumbDownIcon
            classes={{ root: classes.selectedThumb }}
          ></ThumbDownIcon>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.logos}>
            <div>
              <Image
                src="/images/f1.svg"
                alt="comp logo"
                width="37"
                height="18"
              />
            </div>
            <div>
              <Image
                src="/images/s1.svg"
                alt="comp logo"
                width="30"
                height="42"
              />
            </div>
          </div>
          <div className={classes.playerInfo}>
            <div>{`Position: ${data.position}`}</div>
            <div>{`Foot: ${data.foot}`}</div>
            <div>{`SM: ${data.sm}`}</div>
            <div>{`TikTok: ${data.tiktok}`}</div>
          </div>
        </div>
        <div className={classes.stat}>Stats from data - if available</div>
      </div>
    </>
  );
}

const data = {
  amount: "300",
  position: "Striker",
  foot: "Right Foot",
  sm: "IG",
  tiktok: "",
};
