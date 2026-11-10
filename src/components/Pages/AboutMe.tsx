import { useState } from 'react';
import AboutmeContent from '../AboutmeContent'
import ContentSwitch from '../ContentSwitch'
import { Box } from '@chakra-ui/react';

const AboutMe = () => {

  return (
    <>
      <Box className='global_gradient'>
        <Box maxW="1600px" margin="auto" bgColor={"white"}>
          <AboutmeContent />
        </Box>
      </Box>
    </>
  )
}

export default AboutMe