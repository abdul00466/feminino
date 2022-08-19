import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import { newsData } from "../../../DummyData/newsData";

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
      minHeight: "450px",
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

  const {
    query: { newsID },
  } = useRouter();

  const { data } = useQuery("competitions", () => {
    return newsData;
  });

  const { news } = data?.find((value) => value.id === Number(newsID)) || {};
  console.log("🚀 ~ file: index.js ~ line 43 ~ News ~ news", news);

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>NEWS</div>
        <div className={classes.compCard}>
          This opens up to the news article inside the website.
        </div>
      </div>
    </>
  );
}
