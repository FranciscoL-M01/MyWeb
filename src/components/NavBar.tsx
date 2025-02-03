import logo from '../images/FL - Black.png'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react/menu'


const NavBar = () => {
  return (
    <>
    <HStack bgColor="black" borderBottomColor='white' borderBottomWidth={2} style={{justifyContent: 'space-between'}} width='100%'>
        <Image src={logo} boxSize='75px' marginLeft={10} />
        <HStack display={{base: 'none', md:'flex'}} marginRight={20} gap={10}>
            <NavLink to="/"><Text textStyle='3xl' fontWeight='bold' fontFamily="Lora">Home</Text></NavLink>
            <NavLink to="/aboutme"><Text textStyle='3xl' fontWeight='bold' fontFamily="Lora">About Me</Text></NavLink>
        </HStack>
        <Box display={{md:'none'}} marginRight={20}>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant='outline'><IoMenu /></Button>
            </MenuTrigger>
              <MenuContent pos="absolute" right="5rem">
                <MenuItem value='new-win' key="home" style={{justifyContent: "center"}}>
                  <NavLink to="/"><Text textStyle='xl' fontWeight='bold' textAlign="center" fontFamily="Lora">Home</Text></NavLink>
                </MenuItem>
                <MenuItem value='new-win' key="about" style={{justifyContent: "center"}}>
                  <NavLink to="/aboutme"><Text textStyle='xl' fontWeight='bold' fontFamily="Lora">About Me</Text></NavLink>
                </MenuItem>
              </MenuContent>
          </MenuRoot>
        </Box>
    </HStack>

    </>
  )
}

export default NavBar