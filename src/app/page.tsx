import Nav from '@/components/Nav'
import Hero from '@/components/sections/landing/Hero'
import LogoMarquee from '@/components/sections/landing/LogoMarquee'
import Services from '@/components/sections/landing/Services'

export default function Home() {
  return (
    <div className=''>
      <Nav></Nav>
      <Hero></Hero>
      <Services></Services>
      <LogoMarquee></LogoMarquee>
    </div>
  )
}
