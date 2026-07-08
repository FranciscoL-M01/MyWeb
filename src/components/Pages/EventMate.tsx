import { Box, Image } from '@chakra-ui/react'
import EventMateContext from '../EventMateContent'

const EventMate = () => {
    return (
        <>
            <Box bgColor="#09090b">
                <Box maxW="1600px" className='page-margin' margin="0 16px" padding="16px" lineHeight="24px" bgColor="#09090b">
                    <EventMateContext />
                </Box>
            </Box>
        </>
    )
}

export default EventMate