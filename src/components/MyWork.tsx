import { Box, Text, Card, Image, SimpleGrid } from '@chakra-ui/react'
import holiday from '../images/HolidayAPI_img.png'
import CardProject from './CardProject'

const MyWork = () => {
  return (
    <>
        <Box boxSize={60} bgColor={'black'} width="100%" className='skewProjects' display="flex">
            <Text marginLeft="5rem" textStyle="5xl" fontFamily="Lora" style={{alignSelf: "center"}}>My Work...</Text>
        </Box>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} gap='15px' bgColor={'black'}>
            <CardProject/>
        </SimpleGrid>
    </>
  )
}

export default MyWork