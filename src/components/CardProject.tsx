import { Button, Card, CardBody, Heading, Image, List } from '@chakra-ui/react'
import holiday from '../images/HolidayAPI_img.png'
import { FaGithub, FaFigma } from "react-icons/fa";


const CardProject = () => {
  return (
    <Card.Root width="100%" overflow="hidden">
        <Card.Body>
            <Image src={holiday} />
            <CardBody fontFamily="Lora">
                <Heading>Holiday API</Heading>
                <List.Root>
                    <List.Item>Html</List.Item>
                </List.Root>
            </CardBody>
        </Card.Body>
        <Card.Footer style={{justifyContent: 'space-evenly'}}>
            <Button asChild colorPalette={'teal'} variant={'outline'} width={72}>
                <a>Try It!</a>
            </Button>
            <Button asChild colorPalette={'teal'} variant={'outline'} width={72}>
                <a><FaGithub/></a>
            </Button>
        </Card.Footer>
    </Card.Root>
  )
}

export default CardProject