import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles(() => {
  return {
    heading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      marginBottom: "10px",
    },
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
    cardName: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    scoreCard: {
      width: "100%",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
    },
    cardContent: {
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
    date: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
      padding: "5px 10px",
    },
    something: {
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
    leagueName: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
    },
  };
});

export default function Scores() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>SCORES</div>
        <div className={classes.card}>
          <Image src="/images/t2.svg" alt="comp logo" width="65" height="65" />
          <div className={classes.cardName}>{compData.name}</div>
          <StarIcon
            className={compData.isFavorite ? classes.isFavorite : classes.star}
          />
        </div>
        {data.scores.map((value) => {
          return (
            <>
              <Link
                href={{
                  pathname: "/scores/[matchID]",
                  query: {
                    matchID: value.id,
                  },
                }}
              >
                <div className={classes.scoreCard}>
                  <div className={classes.date}>{value.date}</div>
                  <div className={classes.cardContent}>
                    <div className={classes.something}>{value.something}</div>
                    <div className="stat">
                      <div className={classes.name}>{value.team1}</div>
                      <div className={classes.name}>{value.team2}</div>
                    </div>
                    <div className="stat">
                      <div className={classes.name}>{value.team1S}</div>
                      <div className={classes.name}>{value.team2S}</div>
                    </div>
                    <StarIcon
                      className={
                        value.isFavorite ? classes.isFavorite : classes.star
                      }
                    />
                  </div>
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

const compData = {
  name: "National Women’s Soccer League",
  isFavorite: true,
};

const data = {
  scores: [
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 69,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 2,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 3,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 4,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 5,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
      id: 6,
    },
  ],
};
