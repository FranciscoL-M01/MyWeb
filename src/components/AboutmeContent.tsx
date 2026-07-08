import { Box, Grid, GridItem, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import dodgers from '../images/DodgerStadium.png'
import barca from '../images/CampNou.png'
import cal from '../images/CSULB.png'


const AboutmeContent = () => {
  return (
    <>
    <Grid templateColumns="repeat(2, 1fr)" fontFamily="Lora" bgColor="black" display={{base: "none", lg: "grid"}}>
                <GridItem color="black" padding="0 4rem" bgColor="white" >
                    <Heading as="h1" textStyle="4xl" fontWeight="bold" padding="3rem 0" textAlign="center">More About Me...</Heading>
                        <Text textStyle="xl">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Francisco Lopez-Morelos, I graduated with a Bachelor of Science Degree in Computer Science. I’ve been really interested in Web Development and recently I’ve been showing interest in .NET technologies and CMS platforms.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my time in school, I’ve had the opportunity to learn about Algorithms & Data structures, Object-Oriented Programming (OOP), Databases, etc. One of my biggest projects that utilized a combination of my learnings was during my senior year when I got to work on a mobile application using Dart with the Flutter framework. Through this project I learned what it’s like to work in an Agile workflow as I continued to work and improve on the project. Additionally, I’ve had the opportunity to work with the City of Long Beach as a Web Admin Intern helping them oversee both the external (longbeach.gov) and internal (LBNET) sites. Given that the city website is built on a .NET-powered Content Management System, I learned how strong .NET can be. Through these experiences I’ve learned a lot and I began to appreciate all aspects of web development.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something more about myself is that I really enjoy watching films and watching sports. I currently follow three major sports, football/soccer, baseball, and Formula 1.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I would like to thank you for taking the time to navigate my website and learn a couple of things about myself. Feel free to look at everything on my website and don’t hesitate to reach out to me to collaborate, for feedback, or even to simply talk about programming. Please feel free to reach me via email at <a className="main-page-link" href="mailto:franciscolopezmorelos@gmail.com" title="My Personal Email: franciscolopezmorelos@gmail.com" aria-label="Email me Personal at franciscolopezmorelos@gmail.com">franciscolopezmorelos@gmail.com</a>. I’m looking forward to always learning new things and improving my skills.
                        </Text>
                    <Text textStyle="xl" padding="2rem 0">Francisco Lopez-Morelos</Text>
                </GridItem>
                <GridItem bgColor="black" padding="2rem" margin="auto" >
                    <HStack>
                        <VStack paddingRight="2rem">
                            <Image src={dodgers} />
                            <Text textAlign="center">Dodger Stadium</Text>
                        </VStack>
                        <VStack>
                            <VStack>
                                <Image src={cal} />
                                <Text textAlign="center">Dodger Stadium</Text>
                            </VStack>
                            <VStack>
                                <Image src={barca} />
                                <Text textAlign="center">Camp Nou</Text>
                            </VStack>
                        </VStack>
                    </HStack>
                </GridItem>
    </Grid>
    
    <Grid templateRows="repeat(3, auto)" fontFamily="Lora" bgColor="white" display={{base: "grid", lg: "none"}}>
        <GridItem color="black" margin="1rem 0">
            <Heading as="h1" textStyle="2xl" fontWeight="bold" padding="0" textAlign="center" margin="0">More About Me...</Heading>
        </GridItem>
        <GridItem>
            <HStack borderRadius="10px" bgColor="black" margin="0 1rem" padding="1rem">
                <VStack paddingRight="2rem">
                    <Image src={dodgers} />
                    <Text textAlign="center">Dodger Stadium</Text>
                </VStack>
                <VStack>
                    <VStack>
                        <Image src={cal} />
                        <Text textAlign="center">CSULB</Text>
                    </VStack>
                    <VStack>
                        <Image src={barca} />
                        <Text textAlign="center">Camp Nou</Text>
                    </VStack>
                </VStack>
            </HStack>
        </GridItem>
        <GridItem color="black" margin="1rem">
            <Text textStyle="md">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Francisco Lopez-Morelos, I graduated with a Bachelor of Science Degree in Computer Science. I’ve been really interested in Web Development and recently I’ve been showing interest in .NET technologies and CMS platforms.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my time in school, I’ve had the opportunity to learn about Algorithms & Data structures, Object-Oriented Programming (OOP), Databases, etc. One of my biggest projects that utilized a combination of my learnings was during my senior year when I got to work on a mobile application using Dart with the Flutter framework. Through this project I learned what it’s like to work in an Agile workflow as I continued to work and improve on the project. Additionally, I’ve had the opportunity to work with the City of Long Beach as a Web Admin Intern helping them oversee both the external (longbeach.gov) and internal (LBNET) sites. Given that the city website is built on a .NET-powered Content Management System, I learned how strong .NET can be. Through these experiences I’ve learned a lot and I began to appreciate all aspects of web development.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something more about myself is that I really enjoy watching films and watching sports. I currently follow three major sports, football/soccer, baseball, and Formula 1.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I would like to thank you for taking the time to navigate my website and learn a couple of things about myself. Feel free to look at everything on my website and don’t hesitate to reach out to me to collaborate, for feedback, or even to simply talk about programming. Please feel free to reach me via email at <a className="main-page-link" href="mailto:franciscolopezmorelos@gmail.com" title="My Personal Email: franciscolopezmorelos@gmail.com" aria-label="Email me Personal at franciscolopezmorelos@gmail.com">franciscolopezmorelos@gmail.com</a>. I’m looking forward to always learning new things and improving my skills.
            </Text>
            <Text textStyle="md" padding="2rem 0">Francisco Lopez-Morelos</Text>
        </GridItem>
    </Grid>
    </>
  )
}

export default AboutmeContent