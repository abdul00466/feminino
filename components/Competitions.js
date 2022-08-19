import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import { competitionsData } from "../DummyData/competitions";

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
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "10px 20px",
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
  };
});

export default function Competitions() {
  const classes = useStyles();

  const { data } = useQuery("competitions", () => {
    return competitionsData;
  });

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>COMPETITIONS</div>
        {data?.map((value) => {
          return (
            <>
              <Link href={`/comps/${value.competition_id}/standings`}>
                <div className={classes.card} key={value.competition_id}>
                  <Image
                    src="/images/t2.svg"
                    alt="comp logo"
                    width="65"
                    height="65"
                  />
                  <div className={classes.name}>{value.name}</div>
                  <StarIcon
                    className={
                      value.isFavorite ? classes.isFavorite : classes.star
                    }
                  />
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
