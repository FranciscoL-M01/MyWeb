import { Box, Text, SimpleGrid, Heading, Link } from '@chakra-ui/react'
import CardProject from './CardProject'
import useData from "../hooks/useData"

const MyWork = () => {
  const {data} = useData();

  return (
    <>
        <Box boxSize={60} bgColor={'black'} width="100%" className='skewProjects' display="flex">
            <Heading as="h2" marginLeft="5rem" textStyle="5xl" fontFamily="Lora" style={{alignSelf: "center"}} display={{base: "none", md: "block"}}>My Work...</Heading>
            <Heading as="h2" marginLeft="5rem" textStyle="3xl" fontFamily="Lora" style={{alignSelf: "center"}} display={{base: "block", md: "none"}}>My Work...</Heading>
        </Box>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} gap='15px' bgColor={'black'}>
          {data.map(projects => 
            <CardProject key={projects.title} project={projects}/>
          )}
        </SimpleGrid>
        {/* <Box bgColor={'black'} width="100%">
        <Link className='link-title link-page' margin="2rem 0 2rem 2rem" title="Back to the Top Link" aria-label='Back to the Top Link' href='#'>Back to the Top</Link>
        </Box> */}
    </>
  )
}

export default MyWork