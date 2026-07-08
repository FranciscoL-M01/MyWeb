import logo from '../images/FL - Black.png'
import { Box, Image } from '@chakra-ui/react'

const HomeBackground = () => {
  return (
    <>
    <Box className='skewImage' background="#000 !important">
        <Image className='home-img-logo' src={logo} />
    </Box>
    </>
  )
}

export default HomeBackground