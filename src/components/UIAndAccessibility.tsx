import { Card, Heading, HStack, Text, Image } from "@chakra-ui/react"

const UIAndAccessibility = () => {
    return(
        <>
        <Text>
            Given that most components had lived for several years already, with the help of SilkTide we identified issues such as that of the reusable tabbed list. We realized that the component was built using the wrong elements which might confuse users relying on screen readers, and an important functionality of keyboard accessibility was missing.
        </Text>
        <Heading as="h3" size="2xl" margin="2rem auto">Tabbed List</Heading>
        <HStack className="card-horizontal-stack">
            <Card.Root width="35%">
                <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body gap="2">
                    <Card.Title>Prevoius Tabbed List Component</Card.Title>
                    <Card.Description>
                        Text
                    </Card.Description>
                </Card.Body>
            </Card.Root>
            <Card.Root width="35%">
                <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body gap="2">
                    <Card.Title>Current Live Tabbed List Component</Card.Title>
                    <Card.Description>
                        Text
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </HStack>
        <Heading as="h3" size="2xl" margin="2rem auto">FAQ Block</Heading>
        <HStack className="card-horizontal-stack">
            <Card.Root width="35%">
                <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body gap="2">
                    <Card.Title>Prevoius FAQ Block Component</Card.Title>
                    <Card.Description>
                        Text
                    </Card.Description>
                </Card.Body>
            </Card.Root>
            <Card.Root width="35%">
                <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body gap="2">
                    <Card.Title>Current Live FAQ Block Component</Card.Title>
                    <Card.Description>
                        Text
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </HStack>
        </>
    )
}

export default UIAndAccessibility