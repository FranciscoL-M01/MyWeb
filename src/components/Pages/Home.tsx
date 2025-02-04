import React from 'react'
import HomeBackground from '../HomeBackground'
import HomeIntro from '../HomeIntro'
import MyWork from '../MyWork'
import { Box, Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Box 
        bgImage={"url('/background_images/background.jpg')"}
      >
        <Box maxW="1600px" margin="auto" bgColor={"white"}>
          <HomeBackground />
          <HomeIntro />
          <MyWork />
        </Box>
      </Box>
    </>
  )
}

export default Home