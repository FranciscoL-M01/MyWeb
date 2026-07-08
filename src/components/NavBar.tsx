import logo from '../images/FL - Black.png'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react/menu'
import resume from '../documents/Francisco-Lopez-Resume.pdf';
import { LuExternalLink } from 'react-icons/lu';


const NavBar = () => {
  return (
    <>
    <HStack bgColor="black" borderBottomColor='white' borderBottomWidth={2} style={{justifyContent: 'space-between'}} width='100%'>
        <Image src={logo} boxSize='75px' marginLeft={10} />
        <HStack display={{base: 'none', md:'flex'}} marginRight={20} gap={10}>
            <NavLink to="/"><Text textStyle='3xl' fontWeight='bold' fontFamily="Lora" color={"white"}>Home</Text></NavLink>
            <NavLink to="/aboutme"><Text textStyle='3xl' fontWeight='bold' fontFamily="Lora" color={"white"}>About Me</Text></NavLink>
            <a href={resume} target='_blank'><HStack gap={1} display="inline-flex" alignItems="center"><Text textStyle='3xl' fontWeight='bold' fontFamily="Lora" color={"white"}>Resume</Text><LuExternalLink /></HStack></a>
        </HStack>
        <Box display={{md:'none'}} marginRight={20}>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant='outline'><IoMenu /></Button>
            </MenuTrigger>
              <MenuContent pos="absolute" right="5rem">
                <MenuItem value='new-win' key="home" style={{justifyContent: "center"}}>
                  <NavLink to="/"><Text textStyle='xl' fontWeight='bold' textAlign="center" fontFamily="Lora" color={"white"}>Home</Text></NavLink>
                </MenuItem>
                <MenuItem value='new-win' key="about" style={{justifyContent: "center"}}>
                  <NavLink to="/aboutme"><Text textStyle='xl' fontWeight='bold' fontFamily="Lora" color={"white"}>About Me</Text></NavLink>
                </MenuItem>
                <MenuItem value='new-win' key="resume" style={{justifyContent: "center"}}>
                <a href={resume} target='_blank'><HStack gap={1} display="inline-flex" alignItems="center"><Text textStyle='xl' fontWeight='bold' fontFamily="Lora" color={"white"}>Resume</Text><LuExternalLink /></HStack></a>
                </MenuItem>
              </MenuContent>
          </MenuRoot>
        </Box>
    </HStack>

    </>
  )
}

export default NavBar