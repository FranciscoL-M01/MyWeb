import { Box, Heading, HStack, Text, Image, VStack } from "@chakra-ui/react"
import profile from '../images/Profile.png'

const HomeIntro = () => {
  return (
    <>
      <VStack className="home-intro-container" display={{base: "block", md:"none", lg: "none"}}>
        <Box className="home-intro-img-container">
          <Image src={profile} width="167px" height="167px" margin="auto" borderRadius="100%" />
        </Box>
        <Box margin="0.5rem 0">
            <Heading as="h1" textAlign="center" color="black" fontWeight="bold" textStyle="2xl" fontFamily="Lora">Francisco Lopez-Morelos</Heading>
            <Text textAlign="center" color="black" textStyle="xl" fontFamily="Lora">
            I began with the fundamentals of HTML, CSS, and JavaScript, which helped me expand my frontend skills into React and TypeScript. Recently, I’ve been working with a Content Management System (CMS) which eventually drew me to explore .NET technologies.
            </Text>
        </Box>
      </VStack>
      <VStack className="home-intro-container" display={{base: "none", md:"block", lg: "none"}}>
        <Box className="home-intro-img-container">
          <Image src={profile} width="250px" height="250px" margin="auto" borderRadius="100%" />
        </Box>
        <Box margin="2rem 0">
            <Heading as="h1" textAlign="center" color="black" fontWeight="bold" textStyle="3xl" fontFamily="Lora">Francisco Lopez-Morelos</Heading>
            <Text textAlign="center" color="black" textStyle="2xl" fontFamily="Lora">
            I began with the fundamentals of HTML, CSS, and JavaScript, which helped me expand my frontend skills into React and TypeScript. Recently, I’ve been working with a Content Management System (CMS) which eventually drew me to explore .NET technologies.
            </Text>
        </Box>
      </VStack>
      <HStack className="home-intro-container" display={{base: "none", md:"none", lg: "block"}}>
        <Box className="home-intro-img-container">
          <Image src={profile} width="300px" height="300px" margin="auto" borderRadius="100%" />
        </Box>
        <Box margin="2rem 0">
            <Heading as="h1" textAlign="center" color="black" fontWeight="bold" textStyle="4xl" fontFamily="Lora">Francisco Lopez-Morelos</Heading>
            <Text textAlign="center" color="black" textStyle="3xl" fontFamily="Lora">
            I began with the fundamentals of HTML, CSS, and JavaScript, which helped me expand my frontend skills into React and TypeScript. Recently, I’ve been working with a Content Management System (CMS) which eventually drew me to explore .NET technologies.
            </Text>
        </Box>
      </HStack>
    </>
  )
}

export default HomeIntro