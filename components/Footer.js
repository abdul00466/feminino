import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "10px",
      width: "100%",
      maxWidth: "450px",
      height: "65px",
      position: "absolute",
      bottom: "0",
      left: "0",
      backgroundColor: "black",
    },
    navigation: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      color: "white",
      fontSize: "14px",
      fontFamily: "Montserrat",
    },
    headingSelected: {
      color: "#40E9D2",
      fontSize: "14px",
      fontFamily: "Montserrat",
    },
  };
});

export default function Footer() {
  const classes = useStyles();
  const { pathname } = useRouter();

  return (
    <>
      <div className={classes.footer}>
        <Link href="/">
          <div className={classes.navigation}>
            <Image
              src={
                pathname === "/" || pathname.indexOf("/player") === 0
                  ? "/images/footerIconS1.svg"
                  : "/images/footerIcon1.svg"
              }
              alt="footerIcon1"
              width="12px"
              height="22px"
            ></Image>
            <div
              className={
                pathname === "/" || pathname.indexOf("/player") === 0
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Players
            </div>
          </div>
        </Link>
        <Link href="/scores">
          <div className={classes.navigation}>
            <Image
              src={
                pathname.indexOf("/scores") > -1
                  ? "/images/footerIconS2.svg"
                  : "/images/footerIcon2.svg"
              }
              alt="footerIcon2"
              width="24px"
              height="22px"
            ></Image>
            <div
              className={
                pathname.indexOf("/scores") > -1
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Scores
            </div>
          </div>
        </Link>
        <Link href="/favs">
          <div className={classes.navigation}>
            <Image
              src={
                pathname.indexOf("/favs") > -1
                  ? "/images/footerIconS3.svg"
                  : "/images/footerIcon3.svg"
              }
              alt="footerIcon3"
              width="23px"
              height="20px"
            ></Image>
            <div
              className={
                pathname.indexOf("/favs") > -1
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Favs
            </div>
          </div>
        </Link>
        <Link href="/comps">
          <div className={classes.navigation}>
            <Image
              src={
                pathname.indexOf("/comps") > -1
                  ? "/images/footerIconS4.svg"
                  : "/images/footerIcon4.svg"
              }
              alt="footerIcon4"
              width="25px"
              height="20px"
            ></Image>
            <div
              className={
                pathname.indexOf("/comps") > -1
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Comps
            </div>
          </div>
        </Link>
        <Link href="/news">
          <div className={classes.navigation}>
            <Image
              src={
                pathname.indexOf("/news") > -1
                  ? "/images/footerIconS5.svg"
                  : "/images/footerIcon5.svg"
              }
              alt="footerIcon5"
              width="25px"
              height="15px"
            ></Image>
            <div
              className={
                pathname.indexOf("/news") > -1
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              News
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
