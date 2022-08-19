import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    title: {
      margin: "0",
      lineHeight: "1.15",
      fontSize: "48px",
      textAlign: "center",
      color: "white",
    },
  };
});

export default function Home() {
  const classes = useStyles();

  const DynamicComponent = dynamic(() => import("../components/Players"));

  return (
    <>
      <Head>
        <title>Feminino</title>
        <meta name="description" content="A sports driven website for women" />
      </Head>

      <DynamicComponent />
    </>
  );
}
