import React from 'react'
import { Box, Text } from "@chakra-ui/react"

const HomeIntro = () => {
  return (
    <>
        <Box marginBottom="2rem">
            <Text textAlign="center" color="black" fontWeight="bold" textStyle="2xl" fontFamily="Lora">Hello,</Text>
            <Text textAlign="center" color="black" fontWeight="bold" textStyle="4xl" fontFamily="Lora">my name if Francisco.</Text>
            <Text textAlign="center" color="black" textStyle="3xl" fontFamily="Lora" margin="1rem 5rem">
            I am an aspiring Front-end Developer who’s constantly expanding their knowledge base with new skills.
            I’m inspired to create visually stunning and user friendly experiences for a polished final product.
            My career goals revolve around the planning, designing and creation of web applications.
            </Text>
        </Box>
    </>
  )
}

export default HomeIntro