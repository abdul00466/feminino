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
    chevron: {
      color: "white",
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
    standingsCard: {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      padding: "10px 5px",
    },
    cardHeading: {
      marginBottom: "5px",
      color: "white",
      fontSize: "14px",
      fontFamily: "Montserrat",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    colMain: {
      width: "120px",
    },
    colSecondary: {
      padding: "0px 5px",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();
  const {
    query: { id: competitionID },
  } = useRouter();

  const competitionType = "Standings";

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
      >
        <Link href="/comps">
          <span className={classes.breadcrumbsMain}>COMPS</span>
        </Link>
        <span className={classes.breadcrumbs}>{initials}</span>
        <span className={classes.breadcrumbs}>{competitionType}</span>
      </Breadcrumbs>
      <div className={classes.card}>
        <Image src="/images/t2.svg" alt="comp logo" width="65" height="65" />
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
      <div className={classes.standingsCard}>
        <div className={classes.cardHeading}>
          <div className={classes.colMain}></div>
          <div className={classes.colSecondary}>Pts</div>
          <div className={classes.colSecondary}>GP</div>
          <div className={classes.colSecondary}>W</div>
          <div className={classes.colSecondary}>D</div>
          <div className={classes.colSecondary}>L</div>
        </div>
        {typesValue.map((value) => {
          return (
            <div className={classes.cardHeading}>
              <div className={classes.colMain}>{value.name}</div>
              <div className={classes.colSecondary}>{value.pts}</div>
              <div className={classes.colSecondary}>{value.gp}</div>
              <div className={classes.colSecondary}>{value.w}</div>
              <div className={classes.colSecondary}>{value.d}</div>
              <div className={classes.colSecondary}>{value.l}</div>
            </div>
          );
        })}
      </div>
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

const typesValue = [
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
  {
    name: "Portland Thorns",
    pts: "0",
    gp: "0",
    w: "0",
    d: "0",
    l: "0",
  },
];
