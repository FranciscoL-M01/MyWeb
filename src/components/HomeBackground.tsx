import React from 'react'
import build from '../images/HomeBuild.jpg'
import design from '../images/HomeDesign.jpg'
import profile from '../images/Profile.png'
import { Box, Center, Container, HStack, Image, Text } from '@chakra-ui/react'

const HomeBackground = () => {
  return (
    <HStack bgColor="black" className='skewImage' style={{justifyContent: 'center'}} gap={0} marginBottom="5rem">
        <Box pos='relative' bgColor='white'>
            <Image src={design} opacity="60%" /> 
            <Text 
            pos="absolute" 
            textStyle='3xl' fontWeight='semibold' textShadow="1px 1px 10px #e9d5ff"
            top="50%" left="50%" color="black" transform="translate(-50%,-50%)">
                Design...
            </Text>
        </Box>
        <Box pos="relative" bgColor='white'>
            <Image src={build} opacity="60%" />
            <Text 
            pos="absolute" 
            textStyle='3xl' fontWeight='semibold' textShadow="1px 1px 5px #e9d5ff" 
            top="50%" left="50%" color="black" transform="translate(-50%,-50%)">
                Build
            </Text>
        </Box>
        <Box position='absolute'>
            <Box bgColor="#d9d9d9" width="369px" height="240px" margin='auto' filter="blur(10px)">
            </Box>
        </Box>
        <Box position='absolute'>
            <Box width="360px" height="234px" margin='auto'>
                <Image src={profile} />
            </Box>
        </Box>
    </HStack>
  )
}

export default HomeBackground