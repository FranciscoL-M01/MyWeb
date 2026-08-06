import HomeBackground from '../HomeBackground'
import HomeIntro from '../HomeIntro'
import MyWork from '../MyWork'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Box className='global_gradient'>
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