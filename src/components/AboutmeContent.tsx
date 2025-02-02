import { Box, Grid, GridItem, HStack, Image, Show, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContentSwitch, { contSwitch } from './ContentSwitch'
import dodgers from '../images/DodgerStadium.png'
import design from '../images/Design.png'
import barca from '../images/CampNou.png'
import cal from '../images/CSULB.png'
import holidays from '../images/HolidayAPI_img.png'
import creative from '../images/Creative.png'

const AboutmeContent = () => {
  return (
    <>
        <Show when={contSwitch === "default"}>
            <Grid templateColumns="repeat(2, 1fr)" fontFamily="Lora" bgColor="black">
                <GridItem color="black" padding="0 4rem" bgColor="white" >
                    <Text textStyle="4xl" fontWeight="bold" padding="3rem 0" textAlign="center">More About Me...</Text>
                        <Text textStyle="xl">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Francisco Lopez-Morelos, I’m a student at the California State University of Long Beach and I’m looking to get my major in Computer Science. Something that interests me quite a lot right now is Front-end Web and Mobile App Development but as of right now, Web Development is my priority.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my time in school, I’ve learned many things and worked with programming languages like C++ and Python. However, in order to pursue Web Development I’ve been learning and expanding my skills with Fron-end components. I’m always trying to learn new things and I’ve been enjoying the process. My goal is to be able to confidently think, create, and launch websites and mobile applications on my own. I really enjoy the process of making something new along with the creativity that lets me add my own ideas to the project.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something more about myself is that I really enjoy gaming, watching films, and watching sports. I enjoy watching soccer/football and my favorite team is FC Barcelona, I've been a fan since 2013. I’ve also really enjoyed watching the Dodgers and I’m trying to get into Tennis.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I would like to say thank you for taking the time to navigate my website and learn a couple of things about myself. Feel free to look at everything on my website and don’t hesitate to reach out to me to collaborate, for feedback, or even to simply talk about programming. Please feel free to reach me via email: franciscolopezmorelos@gmail.com. I’m looking forward to always learning and I’ll try to keep working towards improving my skills and growing as a Front-end Developer.
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
                                <Image src={design} />
                                <Text textAlign="center">Design</Text>
                            </VStack>
                            <VStack>
                                <Image src={barca} />
                                <Text textAlign="center">Camp Nou</Text>
                            </VStack>
                        </VStack>
                    </HStack>
                </GridItem>
            </Grid>
        </Show>
        <Show when={contSwitch === "active"}>
            <Grid templateColumns="repeat(2, 1fr)" fontFamily="Lora" bgColor="black">
                <GridItem padding="2rem" margin="auto" >
                    <VStack justifyItems="center">
                        <VStack paddingBottom="1rem">
                            <Image src={cal} />
                            <Text textAlign="center">CSULB</Text>
                        </VStack>
                        <HStack margin={0}>
                            <VStack>
                                <Image src={holidays} />
                                <Text textAlign="center">Holidays API</Text>
                            </VStack>
                            <VStack>
                                <Image src={creative} />
                            </VStack>
                        </HStack>
                    </VStack>
                </GridItem>
                <GridItem color="black" padding="0 3rem" bgColor="white" paddingBottom="2rem">
                    <Text textStyle="4xl" fontWeight="bold" padding="3rem 0" textAlign="center">Resume</Text>
                    <Text textStyle="l" borderBottomWidth={2} borderBottomColor="gray.800" padding="5px 0" textAlign="center">
                    Long Beach, CA | Front-end Web Developer | franciscolopezmorelos@gmail.com
                    </Text>
                    <Text textStyle="l" borderBottomWidth={2} borderBottomColor="gray.800" padding="5px 0">
                    Reliable, fast-working, responsible, and efficient with any assigned tasks. Always learning something new to enhance efficiency and improve job performance. Seeking a Front-end Website Developer position hoping to leverage my skills in responsive design, user experience, and programming to create great web experiences.
                    </Text>
                    <Text textStyle="xl" fontWeight="bold" paddingTop="5px">
                        Education
                    </Text>
                    <Text textStyle="l" display="flex" justifyContent="space-between">
                    <span>Bachelor of Science, Computer Science</span>
                    <span>August 2020-May 2025</span>
                    </Text>
                    <Text textStyle="l" borderBottomWidth={2} borderBottomColor="gray.800" paddingBottom="5px">
                        <li>California State University of Long Beach</li>
                    </Text>
                    <Text textStyle="xl" fontWeight="bold" paddingTop="5px">
                        Certificates
                    </Text>
                    <Text textStyle="l" fontWeight="bold">
                        Coding with Mosh
                    </Text>
                    <Text textStyle="l" borderBottomWidth={2} borderBottomColor="gray.800" paddingBottom="5px">
                        <li>Expanded design and programming knowledge and learned the  best practices for building responsive and dynamic web applications.</li>
                    </Text>
                    <Text textStyle="xl" fontWeight="bold" paddingTop="5px">
                        Experience
                    </Text>
                    <Text textStyle="l" display="flex" justifyContent="space-between">
                    <span>Administrative Assistant - Future LB, City of Long Beach</span>
                    <span>June 2024-Present</span>
                    </Text>
                    <Text textStyle="l" borderBottomWidth={2} borderBottomColor="gray.800" paddingBottom="5px">
                        <li>
                            Developed useful networking skills that can be applied in any real-world interactions.
                        </li>
                        <li>
                            Developed strong problem-solving skills and the ability to thrive in a fast-paced, dynamic work environment. Fostered a positive workplace culture by resolving issues effectively while also making daily tasks more productive.
                        </li>
                        <li>
                            Provide general administrative assistant duties including filing, email delivery, and providing phone customer service.
                        </li>
                        <li>
                            Developed and coordinated graphic content to assist the team in achieving project goals and enhancing visual communication.
                        </li>
                    </Text>
                    <Text textStyle="xl" fontWeight="bold" paddingTop="5px">
                        Projects
                    </Text>
                    <Text textStyle="l" padding="5px 0">
                        <span>Personal Portfolio - Technologies Used: HTML, CSS, JS</span>
                        <span><br/>My personal website is used to store my projects and show my personal achievements.</span>
                    </Text>
                    <Text textStyle="l" padding="5px 0">
                        <span>LocalLink - Technologies Used: HTML, CSS, JS, Node.JS, MongoDB, Express, and Bcrypt</span>
                        <span><br/>Collaborative website which was done as a team project. This was my very first attempt at trying to build a website as a front-end developer. It was challenging but really interesting.</span>
                    </Text>
                    <Text textStyle="l" padding="5px 0" borderBottomWidth={2} borderBottomColor="gray.800">
                        <span>Global Holidays Website - Technologies Used: HTML, CSS, JS, ASP.Net Core, Holiday API</span>
                        <span><br/>Worked on a website that showcases a list of all the Holidays in the world. The data was retrieved using a Holiday API from the website date.nager.at.</span>
                    </Text>
                    <Text textStyle="xl" fontWeight="bold" paddingTop="5px">
                        Technical Skills
                    </Text>
                    <Text textStyle="l" paddingBottom="5px">
                        <li>Computer Skills: Microsoft Office Software (Word, Excel, PowerPoint, Teams), Figma, Canva</li>
                        <li>Programming: HTML and CSS, Python, C++, JavaScript, TypeScript, React,  Git.</li>
                        <li>Languages: English and Spanish</li>
                    </Text>
                </GridItem>
            </Grid>
        </Show>
    </>
  )
}

export default AboutmeContent