import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

const useStyles = makeStyles(() => {
  return {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "450px",
      marginRight: "auto",
      marginLeft: "auto",
      height: "100%",
      backgroundColor: "black",
    },
    mainContent: {
      width: "100%",
      height: "calc(100% - 64px)",
      padding: "0px 12px 65px",
      overflow: "scroll",
      scrollbarWidth: "none" /* IE and Edge */,
      msOverflowStyle: "none" /* Firefox */,
      "&::-webkit-scrollbar": {
        display: "none" /* Hide scrollbar for Chrome, Safari and Opera */,
      },
    },
    scroll: {
      position: "absolute",
      bottom: "60px",
      right: "45%",
      transform: "translateX(-50%)",
    },
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const muiTheme = createTheme({
  breakpoints: {
    values: {
      breakTypes: 411,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [isVisible, setIsVisible] = React.useState(true);

  const mainContainerRef = React.useRef();
  const childContainerRef = React.useRef();

  React.useEffect(() => {
    setIsVisible(true);

    setTimeout(() => {
      const mainConatinerHeight = mainContainerRef?.current?.clientHeight;
      const childConatinerHeight = childContainerRef?.current?.clientHeight;

      if (mainConatinerHeight - 64 > childConatinerHeight) {
        setIsVisible(false);
      }
    }, 500);
  }, [pageProps]);

  const classes = useStyles();

  const memoizedComponent = React.useMemo(
    () => <Component {...pageProps} />,
    [pageProps]
  );

  const handleScroll = ({ target: element }) => {
    const bottom =
      element?.scrollHeight - element?.scrollTop === element?.clientHeight;

    if (bottom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      <ThemeProvider theme={muiTheme}>
        <div className={classes.container}>
          <Header />
          <div
            ref={mainContainerRef}
            id="scroll-div"
            className={classes.mainContent}
            onScroll={handleScroll}
          >
            {isVisible && (
              <div id="the-scroll-button" className={classes.scroll}>
                <Image
                  src="/images/scroll.svg"
                  alt="scroll button"
                  width="16"
                  height="10"
                />
              </div>
            )}
            <div ref={childContainerRef} style={{ width: "100%" }}>
              {memoizedComponent}
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
