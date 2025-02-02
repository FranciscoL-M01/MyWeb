import { useState } from 'react';
import AboutmeContent from '../AboutmeContent'
import ContentSwitch from '../ContentSwitch'

const AboutMe = () => {
  const [activeSwitch, setActiveSwitch] = useState("resume");

  return (
    <>
      <ContentSwitch setActiveSwitch={setActiveSwitch} />
      <AboutmeContent />
    </>
  )
}

export default AboutMe