import logo from '../images/FL - Black.png'
import { HStack, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <HStack bgColor="black" borderBottomColor='white' borderBottomWidth={2} style={{justifyContent: 'space-between'}}>
        <Image src={logo} boxSize='75px'  />
        <HStack marginRight={20} gap={10}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
        </HStack>
    </HStack>

    </>
  )
}

export default NavBar