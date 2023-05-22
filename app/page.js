import Image from 'next/image'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Cta from './components/Cta'
import Focus from './components/Focus'
import Features from './components/Features'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Team from './components/Team'

export default function Home() {
  return (
    <>
    <Hero/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Featured/>
<About/>
<Cta/>
<Focus/>
<Features/>
<Services/>
<Pricing/>
<Portfolio/>
<Team/>
<Contact/>
    </main>
    </>
  )
}
