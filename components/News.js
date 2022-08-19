import Link from "next/link";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import { newsData } from "../DummyData/newsData";

const useStyles = makeStyles(() => {
  return {
    activeHeading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "#40E9D2",
      marginBottom: "10px",
    },
    compCard: {
      width: "100%",
      height: "64px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "10px 20px",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
    },
  };
});

export default function News() {
  const classes = useStyles();

  const { data } = useQuery("competitions", () => {
    return newsData;
  });

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>NEWS</div>
        {data?.map((value) => {
          return (
            <>
              <Link href={`/news/${value.id}`}>
                <div className={classes.compCard}>{value.news}</div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
