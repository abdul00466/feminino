import Image from "next/image";
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
    date: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
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

export default function Favs() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>FAVS</div>
        <div className={classes.heading}>My Players</div>
        {data.players.map((value, index) => {
          return (
            <>
              <div className={classes.card}>
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
            </>
          );
        })}
        <div className={classes.heading}>My Scores</div>
        {data.scores.map((value, index) => {
          return (
            <>
              <div className={classes.date}>{value.date}</div>
              <div className={classes.card}>
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
            </>
          );
        })}
        <div className={classes.heading}>My Leagues</div>
        {data.players.map((value, index) => {
          return (
            <>
              <div className={classes.card}>
                <Image
                  src={value.image}
                  alt={value.image}
                  width="65"
                  height="65"
                />
                <div className={classes.leagueName}>{value.name}</div>
                <StarIcon
                  className={
                    value.isFavorite ? classes.isFavorite : classes.star
                  }
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

// Dummy DATA to be deleted

const data = {
  players: [
    {
      image: "/images/t1.svg",
      name: "Mapi Leon",
      info: "Prospect",
      leagueImage: "/images/t2.svg",
      isFavorite: true,
    },
  ],
  scores: [
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
    },
    {
      date: "April 1, 2022",
      something: "‘44",
      team1: "Orlando Pride",
      team1S: "1",
      team2: "Orlando Pride",
      team2S: "1",
      isFavorite: true,
    },
  ],
  leagues: [
    {
      image: "/images/t2.svg",
      name: "TOP SCORERS",
      isFavorite: true,
    },
  ],
};
