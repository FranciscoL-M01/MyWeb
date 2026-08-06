import { AspectRatio, Box, chakra, CodeBlock, createShikiAdapter, Heading, Link, List, Text } from '@chakra-ui/react'
import type { HighlighterGeneric } from "shiki"

const authSystem = {
    code: `
        class AuthenticateService {
            final _storage = const FlutterSecureStorage();

            Future<void> storeTokens(String accessToken, String refreshToken) async {
                await _storage.write(key: 'access_token', value: accessToken);
                await _storage.write(key: 'refresh_token', value: refreshToken);
            }

            Future<String?> getAccessToken() async {
                return await _storage.read(key: 'access_token');
            }

            Future<String?> getRefreshToken() async {
                return await _storage.read(key: 'refresh_token');
            }

            Future<void> deleteTokens() async {
                await _storage.delete(key: 'access_token');
                await _storage.delete(key: 'refresh_token');
            }

        }
  `,
    language: "dart",
    title: "token_storage.dart",
  }

  const getEvents = {
    code: `
        Future<List<dynamic>?> getRecommendedEvents(List<dynamic>? recommendedIds, int offset, int limit) async {
            if (recommendedIds == null || recommendedIds.isEmpty || offset >= recommendedIds.length) return [];

            final idsToFetch = recommendedIds.skip(offset).take(limit).toList();
            try {
            
            final accessToken = await _authService.getAccessToken();
            final refreshToken = await _authService.getRefreshToken();

            
            String? tokenToUse = accessToken;
            if (accessToken == null && refreshToken != null) {
                tokenToUse = await refreshAccessToken(refreshToken);
                if (tokenToUse == null) return null;
            }
            
            if (tokenToUse == null) {
                print('No valid token available');
                return null;
            }
            
            final response = await _dio.post(
                'http://evelb-1564909372.us-west-1.elb.amazonaws.com/api/events/process',
                options: Options(headers: {'x-auth-token': tokenToUse}),
                data: {'event_ids': idsToFetch},
            );
            
            if (response.statusCode == 200) {
                return response.data['events'];
            } else {
                print('Failed to get event information: \${response.statusCode}');
                return null;
            }
            } catch (e) {
                print('Error fetching recommended events: $e');
                return null;
            }
        }
  `,
    language: "dart",
    title: "user_service.dart",
  }

const EventMateContent = () => {
    return (
        <>
        <Heading as="h1" size="4xl" textAlign="center">EventMate Project</Heading>
        <Heading as="h2" size="3xl">Project Overview:</Heading>
            <Text textStyle="l" padding="5px 0">
            EventMate is a mobile app that centralizes local event discovery, personalization, and hosting in one seamless experience. It delivers a curated Home feed powered by our recommendation engine, while offering Discover and Today views for broader exploration and same-day planning. Paid members can also create and manage their own events directly within the platform.
            </Text>
            <Text textStyle="l" padding="5px 0">
            As the lead frontend developer, I worked on translating UI/UX concepts into a polished, high-performance mobile interface. I engineered the connection to the backend by integrating RESTful Web APIs to ensure a seamless synchronization between the client device and the server.
            </Text>
        <Heading as="h2" size="3xl">The Problem:</Heading>
            <Text textStyle="l" padding="5px 0">
            If you’ve ever surfed the internet for something fun to do, you’ll find yourself juggling multiple sites, scrolling through cluttered feeds, or digging through outdated listings. It’s time consuming and frustrating, often taking you nowhere.
            </Text>
        <Heading as="h2" size="3xl">The Solution:</Heading>
            <Text textStyle="l" padding="5px 0">
            EventMate cuts through the noise by <b>unifying discovery, personalization, and creation</b> in one simple app:
            </Text>
            <List.Root margin="5px 15px">
                <List.Item>
                    <b>Home (Curated Feed):</b>  An AI-generated, 15-item feed tailored to your tastes. Our hybrid recommendation engine blends semantic analysis of event details with real human interaction data so you see exactly what matters most to you.
                </List.Item>
                <List.Item>
                    <b>Discover (All Events Scroll):</b> A simple, scrollable catalog of every event within radius. If you prefer, you can filter by category to focus on concerts, workshops, or festivals. It’s pure browsing, free of bias.
                </List.Item>
                <List.Item>
                    <b>Today (Same-Day Events):</b> Need plans for tonight or this afternoon? The Today tab instantly surfaces <b>all</b> upcoming events scheduled for the current day. It provides event times, locations, and ticket info to help you make quick, last-minute decisions.
                </List.Item>
                <List.Item>
                    <b>Saved Events:</b> See something you like? Tap the bookmark icon and stash it in your Saved Events list. Review details, RSVP, or share with friends anytime.
                </List.Item>
                <List.Item>
                    <b>In-App Event Creation (Paid Members):</b>  For our premium subscribers, EventMate offers built-in tools to create, publish, and manage events right in the app. Whether it’s a community meetup or a music showcase, hosts can handle everything in one place.
                </List.Item>
            </List.Root>
        <Heading as="h2" size="3xl">Design:</Heading>
            <Text textStyle="l" padding="5px 0">
            EventMate was designed with personalization and recommendations at its core, recognizing the importance of short-term, engaging content in today's tech-driven world. Every bit of our design process, from the Home Page to event discovery and user customization was shaped by user feedback and market trends to ensure an intuitive, community-driven experience.
            </Text>
            <Box className='link-container'>
                <Link className='link-title link-page' title="Figma link - Low Fidelity Prototype" aria-label='Figma link - Low Fidelity Prototype' href='https://www.figma.com/proto/Jomi5XygE7W678LV75Tr3T/EventMate-Design?node-id=174-1119&p=f&t=BuV4fXrDyXFtkED4-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=174%3A1119' target='_blank'>Low Fidelity Figma Prototype</Link>
                <Link className='link-title link-page' title="Figma link - High Fidelity Design" aria-label='Figma link - High Fidelity Design' href='https://www.figma.com/proto/Jomi5XygE7W678LV75Tr3T/EventMate-Design?node-id=508-1798&p=f&t=1ShiRoT2hj6G8rnj-1&scaling=scale-down&content-scaling=fixed&page-id=287%3A1239&starting-point-node-id=508%3A1798' target='_blank'>High Fidelity Figma Design</Link>
            </Box>
        <Heading as="h2" size="3xl">Challenges Overcome:</Heading>
            <Text textStyle="l" padding="5px 0">
            As a first-time frontend lead for a large-scale project, I had to quickly become proficient in Flutter to successfully overcome technical challenges and drive the frontend to completion.
            </Text>
            <Text textStyle="l" padding="5px 0">
            Working with the backend team I had to create the authentication system to ensure a secure user to server connection.
            </Text>
            <CodeBlock.AdapterProvider value={shikiAdapter}>
                <CodeBlock.Root code={getEvents.code} size="sm" margin="5px 15px" language={getEvents.language}>
                    <CodeBlock.Content>
                        <CodeBlock.Code>
                            <CodeBlock.CodeText />
                        </CodeBlock.Code>
                    </CodeBlock.Content>
                </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
            <Text textStyle="l" padding="5px 0">
            Through these tokens we could verify user information, and once tokens are expired we require the user to login. Making sure the tokens work as intended without creating problems for the users was something I had to learn while working on the project.
            </Text>
            <Text textStyle="l" padding="5px 0">
            Additionally, I had to work on the communication with the backend database through an AWS Elastic Load Balancer (ELB), to ensure reliable network traffic. 
            </Text>
            <CodeBlock.AdapterProvider value={shikiAdapter}>
                <CodeBlock.Root code={authSystem.code} size="sm" language={authSystem.language}>
                    <CodeBlock.Content>
                        <CodeBlock.Code>
                            <CodeBlock.CodeText />
                        </CodeBlock.Code>
                    </CodeBlock.Content>
                </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
            <Text textStyle="l" padding="5px 0">
            By hitting endpoints like these the app can securely request real-time event data from the server directly to the user's interface.
            </Text>
        <Heading as="h2" size="3xl">Results and Key Takeaways:</Heading>
            <Text textStyle="l" padding="5px 0">
            We successfully delivered on our requirements on creating a seamless, user-friendly, and visually appealing platform that enhances event discovery and engagement. I learned how to deep-dive into state management, optimize widget rendering, and translate complex UI/UX designs into reusable, clean code components. This project taught me the immense value of clear documentation and collaborative system design, as a result, I walked away with a better understanding of how client-side applications interface with cloud architecture.
            </Text>
            {/* <Text textStyle="l" padding="5px 0">
            Through our demo video below, you can see EventMate in action:
            </Text> */}
            {/* <AspectRatio maxW="560px" ratio={1} margin="5px auto">
                <chakra.video
                    src={demoVideo}
                    title="EventMate Demo Video"
                    controls
                    preload="metadata"
                    w="100%"
                    h="100%"
                    style={{ objectFit: "contain"}}
                />
            </AspectRatio> */}
                        
        <Link className='link-title link-page' marginTop="2rem" title="Back to the Top Link" aria-label='Back to the Top Link' href='#'>Back to the Top</Link>
        </>
    )
}
const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
    async load() {
      const { createHighlighter } = await import("shiki")
      return createHighlighter({
        langs: ["tsx", "dart"],
        themes: ["github-dark"],
      })
    },
    theme: "github-dark",
  })

export default EventMateContent