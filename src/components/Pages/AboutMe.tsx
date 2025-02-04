import { useState } from 'react';
import AboutmeContent from '../AboutmeContent'
import ContentSwitch from '../ContentSwitch'
import { Box } from '@chakra-ui/react';

const AboutMe = () => {

  return (
    <>
      {/* <ContentSwitch setActiveSwitch={setActiveSwitch} /> */}
      <Box bgImage={"url('/background_images/background.jpg')"}>
        <Box maxW="1600px" margin="auto" bgColor={"white"}>
          <AboutmeContent />
        </Box>
      </Box>
    </>
  )
}

export default AboutMe