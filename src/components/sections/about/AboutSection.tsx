import React from "react"
import Team from "./Team"
import AboutCards from "./AboutCards"

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="main-padding gap-10 items-center justify-start"
    >
      <Team />
      {/* <AboutCards /> */}
    </section>
  )
}

export default AboutSection
