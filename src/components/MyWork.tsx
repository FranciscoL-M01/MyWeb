import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import CardProject from './CardProject'
import useData from "../hooks/useData"

const MyWork = () => {
  const {data} = useData();

  return (
    <>
        <Box boxSize={60} bgColor={'black'} width="100%" className='skewProjects' display="flex">
            <Text marginLeft="5rem" textStyle="5xl" fontFamily="Lora" style={{alignSelf: "center"}} display={{base: "none", md: "block"}}>My Work...</Text>
            <Text marginLeft="5rem" textStyle="3xl" fontFamily="Lora" style={{alignSelf: "center"}} display={{base: "block", md: "none"}}>My Work...</Text>
        </Box>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} gap='15px' bgColor={'black'}>
          {data.map(projects => 
            <CardProject key={projects.title} project={projects}/>
          )}
        </SimpleGrid>
    </>
  )
}

export default MyWork