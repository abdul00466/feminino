import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { competitionsData } from "../../../../../../DummyData/competitions";

const useStyles = makeStyles(() => {
  return {
    activeHeading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "#40E9D2",
      marginBottom: "10px",
    },
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
      height: "64px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "10px 20px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    teamName: {
      fontSize: "15px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();
  const {
    query: { id: competitionID, teamName, teamID },
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
      <div className={classes.card}>
        <Image src="/images/s1.svg" alt="comp logo" width="30" height="42" />
        <div className={classes.name}>{teamName}</div>
        <StarIcon
          className={compData.isFavorite ? classes.isFavorite : classes.star}
        />
      </div>
      <div className={classes.selection}>
        <Link
          href={{
            pathname: "/comps/[id]/teams/[teamID]/matches",
            query: {
              id: compData.competition_id,
              teamID,
              name: teamName,
            },
          }}
        >
          <div style={{ padding: "0px 30px" }}>Matches</div>
        </Link>
        <div style={{ color: "#40E9D2", padding: "0px 30px" }}>Roster</div>
      </div>
      {data.map((value) => {
        return (
          <Link
            href={{
              pathname: "/comps/[id]/player/[playerID]",
              query: {
                id: compData.competition_id,
                playerID: value.id,
                playerName: value.name,
                teamName,
              },
            }}
          >
            <div className={classes.compCard} key={value.competition_id}>
              <Image
                src="/images/t1.svg"
                alt="comp logo"
                width="48"
                height="48"
              />
              <div className={classes.teamName}>{value.name}</div>
              <div className={classes.teamName}>{value.score}</div>
              <StarIcon
                className={value.isFavorite ? classes.isFavorite : classes.star}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
}

const data = [
  {
    name: "Andrea Benton",
    isFavorite: true,
    score: "23",
    id: 1,
  },
  {
    name: "Andrea Benton",
    score: "23",
    id: 2,
  },
  {
    name: "Andrea Benton",
    score: "23",
    id: 3,
  },
  {
    name: "Andrea Benton",
    score: "23",
    id: 4,
  },
  {
    name: "Andrea Benton",
    score: "23",
    id: 5,
  },
  {
    name: "Andrea Benton",
    score: "23",
    id: 6,
  },
];
