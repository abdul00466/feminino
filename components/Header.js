import Image from "next/image";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles(() => {
  return {
    header: {
      padding: "15px 10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      marginRight: "15px",
    },
    searchContainer: {
      width: "156px",
      height: "28px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      position: "relative",
    },
    searchIcon: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "10px",
      color: "rgba(255,255,255,0.75)",
    },
    searchBar: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "transparent",
      color: "rgba(255,255,255,0.75)",
      fontSize: "10px",
      fontFamily: "Montserrat",
      paddingLeft: "35px",
      "&::placeholder": {
        color: "rgba(255,255,255,0.75)",
        fontSize: "10px",
        fontFamily: "Montserrat",
      },
    },
  };
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.image}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="170"
            height="30"
          ></Image>
        </div>
        <div className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <input
            className={classes.searchBar}
            placeholder="Players,  News, Scores"
          />
        </div>
      </div>
    </>
  );
}
