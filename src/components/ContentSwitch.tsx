
import { Switch } from '../components/ui/switch'
import { VStack, Text, Center } from '@chakra-ui/react'
import { useState } from 'react';

// I had an idea that I wanted to work with here but I will look more into that in the future.

interface ContentSwitchProps {
    setActiveSwitch: (value: string) => void;
}

export let contSwitch = "";

const ContentSwitch: React.FC<ContentSwitchProps> = ({setActiveSwitch}) => {
    const [contentSwitch, setContentSwitch] = useState("default");

    const handleSwitch = () => {
        const newState = contentSwitch === 'active' ? 'default' : 'active';
        setContentSwitch(newState); 
        setActiveSwitch(newState === 'active' ? "aboutme" : "resume");
        setActiveSwitch(contSwitch = newState);
    }

  return (
    <Center className='global_gradient' borderBottomWidth={2} borderBottomColor="red.400">
        <VStack margin="1rem 0">
            <Switch checked={contentSwitch === 'active'} onChange={handleSwitch} />
            <Text fontFamily="Lora" fontWeight="semibold" textStyle="xl">
                {contentSwitch === 'active' ? "Click for About Me" : "Click For Resume"}
            </Text>
        </VStack>
    </Center>
  )
}

export default ContentSwitch