import type { AppProps } from "next/app";
import NavBar from "../components/sidebar";
import Topbar from "../components/topbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex">
        <div className="flex">
          <NavBar></NavBar>
        </div>

        <div>
          <Topbar></Topbar>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
