import Navbar from './components/Navbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
export const metadata = {
  title: 'Com Unik',
  description: 'Developed by Nasr Souid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>
          <Navbar/>
          <ScrollToTop/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}

