import { Button, Card, CardBody, Heading, Image, List, Show } from '@chakra-ui/react'
import { FaGithub, FaFigma } from "react-icons/fa";
import {Projects} from '@/hooks/useData'

interface Props {
    project: Projects
}

const CardProject = ({project}: Props) => {
    let exists = project.website === "" ? 'none' : 'exists';
    let icon_project = project.icon === 'github' ? <FaGithub /> : project.icon === 'figma' ? <FaFigma /> : null ;

  return (

    <Card.Root width="100%" overflow="hidden" bgColor={project.color} border={0}>
        <Card.Body>
            <Image src={project.image} />
            <CardBody fontFamily="Lora">
                <Heading>{project.title}</Heading>
                <List.Root>
                    <List.Item>{project.tools}</List.Item>
                </List.Root>
            </CardBody>
        </Card.Body>
        <Card.Footer style={{justifyContent: 'space-evenly'}}>
            <Show
            when={exists === 'exists'}
            >
                <Button asChild colorPalette={'gray'} width="72px" bgColor={"white"}>
                    <a href={project.website} target='_blank' color='black'>Try It!</a>
                </Button>
            </Show>
            <Button asChild colorPalette={'gray'} width="72px" bgColor={"white"}>
                <a href={project.project_site} target='_blank'>{icon_project}</a>
            </Button>
        </Card.Footer>
    </Card.Root>
  )
}

export default CardProject