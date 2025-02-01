import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";



const PageFooter = () => {
  return (
    <>
      <HStack bgColor="black" borderTopColor='white' borderTopWidth={2} style={{justifyContent: 'space-evenly'}} width='100%' padding="1rem" display={{base: 'none', md: 'flex'}}>
        <Text fontFamily="Lora" fontSize="2xl" fontWeight="semibold" textAlign="center">Francisco Lopez</Text>
        <Box justifyContent="center" alignItems="center" display="flex" gap="2rem">
            <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} href='mailto:franciscolopezmorelos@gmail.com'><MdOutlineEmail size={"40px"} /></Link>
            <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} href="https://linkedin.com/in/francisco-lopez-morelos-268ab6292"><CiLinkedin size={"40px"} /></Link>
        </Box>
      </HStack>
      <VStack bgColor="black" borderTopColor='white' borderTopWidth={2} style={{justifyContent: 'space-evenly'}} width='100%' padding="1rem" display={{base: 'flex', md: 'none'}}>
        <Text fontFamily="Lora" fontSize="2xl" fontWeight="semibold" textAlign="center">Francisco Lopez</Text>
        <HStack gap="2rem">
          <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} href='mailto:franciscolopezmorelos@gmail.com'><MdOutlineEmail size={"40px"} /></Link>
          <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} href="https://linkedin.com/in/francisco-lopez-morelos-268ab6292"><CiLinkedin size={"40px"} /></Link>
        </HStack>
      </VStack>
    
    </>
  )
}

export default PageFooter