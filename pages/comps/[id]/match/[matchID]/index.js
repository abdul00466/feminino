import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { competitionsData } from "../../../../../DummyData/competitions";

const useStyles = makeStyles(() => {
  return {
    card: {
      width: "100%",
      height: "85px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
    selection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "rgba(64, 233, 210, 0.5)",
      marginBottom: "10px",
    },
    standingsCard: {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      padding: "10px 5px",
    },
    compCard: {
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
    teamName: {
      fontSize: "15px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    verses: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    content: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
      padding: "30px 50px",
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();
  const {
    query: { id: competitionID, teamName, showTeam },
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
        <Link href="/comps">
          <span className={classes.breadcrumbsMain}>COMPS</span>
        </Link>
        <span className={classes.breadcrumbs}>{initials}</span>
        <span className={classes.breadcrumbs}>{competitionType}</span>
        <span className={classes.breadcrumbs}>{teamName}</span>
      </Breadcrumbs>
      <div className={classes.card}>
        <Image src="/images/t2.svg" alt="comp logo" width="65" height="55" />
        <div className={classes.name}>{compData.name}</div>
        <StarIcon
          className={compData.isFavorite ? classes.isFavorite : classes.star}
        />
      </div>
      {showTeam !== "false" && (
        <div className={classes.card}>
          <Image src="/images/s1.svg" alt="comp logo" width="30" height="42" />
          <div className={classes.name}>{teamName}</div>
          <StarIcon
            className={compData.isFavorite ? classes.isFavorite : classes.star}
          />
        </div>
      )}
      <div className={classes.selection}>
        <div style={{ color: "#40E9D2", padding: "0px 30px" }}>
          Match Details
        </div>
      </div>
      <div className={classes.compCard}>
        <div className={classes.teamName}>
          <div style={{ marginBottom: "5px" }}>LOGO</div>
          <div>{data.teamA}</div>
        </div>
        <div className={classes.verses}>VS</div>
        <div className={classes.teamName}>
          <div style={{ marginBottom: "5px" }}>LOGO</div>
          <div>{data.teamB}</div>
        </div>
      </div>
      <div className={classes.content}>
        Match Info - pull from the data that I have access too
      </div>
    </>
  );
}

const data = {
  teamA: "Angel City",
  teamB: "Louis",
};
