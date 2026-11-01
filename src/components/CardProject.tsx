import { Box, Button, Card, CardBody, Image, Link, List, Show } from '@chakra-ui/react'
import { FaGithub, FaFigma } from "react-icons/fa";
import {Projects} from '@/hooks/useData'
import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react'

interface Props {
    project: Projects
}

const CardProject = ({project}: Props) => {

    const checkExists = (item: string | null | undefined): string => {
        if (!item || item.trim() === "") return 'none';
        return 'exists';
    }

    let web_link = checkExists(project.website);
    let internal_link = checkExists(project.internal_site);
    let icon_exist = checkExists(project.icon);
    let icon_project = project.icon === 'github' ? <FaGithub /> : project.icon === 'figma' ? <FaFigma /> : null ;

  return (

    <Card.Root width="100%" overflow="hidden" bgColor={project.color} border={0}>
        <Card.Body>
            <Box className='global_gradient' width="300px" height="250px" margin="auto">
                <Image className='card-image' src={project.image} />
            </Box>
            <CardBody fontFamily="Lora">
                <Card.Title color="#151515">{project.title}</Card.Title>
                <List.Root>
                    <List.Item color="#151515">{project.tools}</List.Item>
                </List.Root>
            </CardBody>
        </Card.Body>
        <Card.Footer style={{justifyContent: 'space-evenly'}}>
            <Show when={web_link === 'exists'}>
                <Link className="link-title card-link" href={project.website} target='_blank' title={`Try out the ${project.title}`} aria-label={`Try out the ${project.title}`}>
                    Try It!
                </Link>
            </Show>
            <Show when={internal_link === 'exists'}>
                <NavLink to={project.internal_site} className="link-title card-link flex-display" title={`Read more about ${project.title}`} aria-label={`Read more about ${project.title}`}><Text>Read More</Text></NavLink>
                {/* <Link className="link-title card-link" href={project.internal_site} title={`Read more about ${project.title}`} aria-label={`Read more about ${project.title}`}>
                    Read More
                </Link> */}
            </Show>
            <Show when={icon_exist === 'exists'}>
                <Link className="link-title card-link" href={project.project_site} target='_blank' title={`Visit ${project.icon} for ${project.title}`} aria-label={`Visit ${project.icon} for ${project.title}`}>
                    {icon_project}
                </Link>
            </Show>
        </Card.Footer>
    </Card.Root>
  )
}

export default CardProject