import Nav from '@/components/Nav'
import FinalCTA from '@/components/sections/landing/FinalCTA'
import Hero from '@/components/sections/landing/Hero'
import LogoMarquee from '@/components/sections/landing/LogoMarquee'
import Media from '@/components/sections/landing/Media'
import Services from '@/components/sections/landing/Services'

export default function Home() {
  return (
    <div className=''>
      <Nav></Nav>
      <Hero></Hero>
      <Services></Services>
      <LogoMarquee></LogoMarquee>
      <Media></Media>
      <FinalCTA></FinalCTA>
    </div>
  )
}
