import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { competitionsData } from "../../../../DummyData/competitions";

const useStyles = makeStyles((theme) => {
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
    allTypes: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    type: {
      margin: "10px 0px",
      color: "rgba(64, 233, 210, 0.5)",
      fontSize: "16px",
      fontFamily: "Montserrat",
      padding: "0px 6px",
      [theme.breakpoints.up(363)]: {
        padding: "0px 7px",
      },
      [theme.breakpoints.up(369)]: {
        padding: "0px 8px",
      },
      [theme.breakpoints.up(375)]: {
        padding: "0px 9px",
      },
      [theme.breakpoints.up(381)]: {
        padding: "0px 10px",
      },
      [theme.breakpoints.up(393)]: {
        padding: "0px 12px",
      },
      [theme.breakpoints.up(411)]: {
        padding: "0px 15px",
      },
      [theme.breakpoints.up(435)]: {
        padding: "0px 18px",
      },
    },
    chevron: {
      color: "white",
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
    query: { id: competitionID },
  } = useRouter();

  const competitionType = "Top Defenders";

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
      </Breadcrumbs>
      <div className={classes.card}>
        <Image src="/images/t2.svg" alt="comp logo" width="65" height="55" />
        <div className={classes.name}>{compData.name}</div>
        <StarIcon
          className={compData.isFavorite ? classes.isFavorite : classes.star}
        />
      </div>
      <div className={classes.allTypes}>
        {types.map((value) => {
          const link =
            value !== "News/Rumours"
              ? `/comps/${competitionID}/${value?.toLowerCase()}`.replace(
                  " ",
                  "-"
                )
              : `/comps/${competitionID}/${"Rumours"?.toLowerCase()}`.replace(
                  " ",
                  "-"
                );

          return (
            <Link href={link}>
              <div
                style={
                  competitionType?.toUpperCase() === value?.toUpperCase()
                    ? { color: "#40E9D2" }
                    : {}
                }
                className={classes.type}
              >
                {value}
              </div>
            </Link>
          );
        })}
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

const types = [
  "Standings",
  "Teams",
  "Matches",
  "Top Goals",
  "Top Assists",
  "Top Defenders",
  "Market Values",
  "News/Rumours",
  "Info",
];

const data = [
  {
    name: "Andrea Benton Portland Thorns",
    isFavorite: true,
    score: "23",
    id: 1,
  },
  {
    name: "Andrea Benton Portland Thorns",
    score: "23",
    id: 2,
  },
  {
    name: "Andrea Benton Portland Thorns",
    score: "23",
    id: 3,
  },
  {
    name: "Andrea Benton Portland Thorns",
    score: "23",
    id: 4,
  },
  {
    name: "Andrea Benton Portland Thorns",
    score: "23",
    id: 5,
  },
  {
    name: "Andrea Benton Portland Thorns",
    score: "23",
    id: 6,
  },
];
