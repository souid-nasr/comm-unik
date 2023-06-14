import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ToTop/>
      <Component {...pageProps} />
      <Footer />{" "}
    </>
  );
}

export default MyApp;
