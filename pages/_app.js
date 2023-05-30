
import Navbar from '@/components/Navbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
\    </>
  );
}

export default MyApp;

