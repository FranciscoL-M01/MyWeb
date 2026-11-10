import { Card, Heading, HStack, Text, Image } from "@chakra-ui/react"

const ReusableRazorComponent = () => {
    return(
        <>
        <Heading as="h3" size="2xl">FAQ Block</Heading>
        <Text margin="2px 0">
        One of the most commonly used block components within the city website is the FAQ Block, and through SilkTide we identified accessibility barriers through the functionality and build of the component.
        </Text>
        {/* <HStack className="card-horizontal-stack">
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
        </HStack> */}
        </>
    )
}

export default ReusableRazorComponent