import { Box, Button, HStack, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";



const PageFooter = () => {
  return (
    <>
    <Stack bgColor="black" borderTopColor='white' borderTopWidth={2} style={{justifyContent: 'space-evenly'}} width='100%' display={{base: "direction: column", sm: "direction: row"}} columns={{sm:1, md: 2}}>
        <Text fontFamily="Lora" fontSize="2xl" fontWeight="semibold" textAlign="center" marginTop="10">Francisco Lopez</Text>
        <Box justifyContent="center" alignSelf="center" display="flex" marginTop="20">
            <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} margin="20px" href='mailto:franciscolopezmorelos@gmail.com'><MdOutlineEmail size={"40px"} /></Link>
            <Link borderWidth={2} borderRadius={"100%"} borderColor={"white"} padding={2} margin="20px" href="https://linkedin.com/in/francisco-lopez-morelos-268ab6292"><CiLinkedin size={"40px"} /></Link>
        </Box>
    </Stack>
    </>
  )
}

export default PageFooter