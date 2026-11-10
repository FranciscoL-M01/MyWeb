import { Heading, Text, List, Tabs, Box, Link } from "@chakra-ui/react"
import { FaCode } from "react-icons/fa";
import { LuLayoutTemplate, LuAccessibility } from "react-icons/lu";
import ReusableRazorComponent from "./ReusableRazorComponent";
import UIAndAccessibility from "./UIAndAccessibility";



const LongBeachExperienceContent = () => {
    return(
        <>
        <Heading as="h1" size="4xl" textAlign="center">City Web Accessibility & CMS Remediation</Heading>
        <Text textStyle="l" padding="5px 0">
        As a Web Admin Intern with the City of Long Beach Technology and Innovation Department, my responsibilities were to help administer both runnings of the EPiServer CMS, intranet (LBNET) and internet (longbeach.gov) websites. In efforts to abide by the American with Disability Act (ADA), I helped with frontend remediation through global scripts, webpage fixes (HTML/CSS/JS), optimizing reusable Block templates utilizing C# Razor Views, and leveraging the SilkTide platform to track, resolve, and monitor digital accessibility.
        </Text>
        <Heading as="h2" size="3xl">The Challenge</Heading>
        <Text textStyle="l" padding="5px 0">
        The Department of Justice (DOJ), set a deadline requiring local and state governments with populations of 50,000 or more to have full web and mobile application compliance with the Americans with Disabilities Act Title II (WCAG 2.1 AA) by April 2027. The existing site had legacy codebase issues, broken structural blocks, and inconsistent layouts across dozens of department pages. The necessary immediate response was to establish CMS best practices, address unattended global codebase issues, and adapt the SilkTide platform to continuously track and improve website accessibility.
        </Text>
        <Heading as="h2" size="3xl">The Execution</Heading>
        <Text textStyle="l" padding="5px 0">
        I helped with leading monthly training meetings and technical office hours to set proper CMS best practice guidelines while offering hands-on support to resolve day-to-day accessibility barriers.
        </Text>
        <Text textStyle="l" padding="5px 0">
        To help with this, the city adapted the SilkTide accessibility platform to audit the site, identify priority compliance failures, and keep track of important benchmarks. Most of the issues derived from legacy templates which I modernized by rewriting the block templates in C# Razor Views to:
        </Text>
        <List.Root margin="5px 15px">
            <List.Item>
            Allow full keyboard accessibility across interactive components.
            </List.Item>
            <List.Item>
            Add correct HTML markup and dynamic ARIA attributes (such as roles and labels) for screen reader compatibility.
            </List.Item>
            <List.Item>
            Regulate global JavaScript and CSS to eliminate layout-breaking components, correct heading hierarchies, and resolve SEO issues.
            </List.Item>
        </List.Root>
        <Heading as="h2" size="3xl">The Result</Heading>
        <Text textStyle="l" padding="5px 0">
        As a result, the web team established proper workflows that keep content authors informed of accessibility standards, ensuring compliance long term. Additionally, during my time we successfully raised the website’s compliance score on SilkTide to over 40%.
        </Text>
        {/* <Heading as="h2" size="3xl">Technical & Remediation Highlights</Heading>
        <Text textStyle="l" padding="5px 0">
        To show important evolutions to the City of Long Beach website, I have some examples breaking down the remediation process for web templates, frontend scripts, and public components.
        </Text>
        <Box overflow="hidden" w="100%">
            <Tabs.Root defaultValue="razor" boxOrient={{ base: "vertical", md: "horizontal" }}>
                <Tabs.List display="flex" flexDirection={{ base: "column", md: "row" }} overflowX={{ base: "visible", md: "auto" }} overflowY="hidden" whiteSpace="nowrap" gap="2">
                    <Tabs.Trigger value="razor" flexShrink={0} gap="2" w={{ base: "100%", md: "auto" }} justifyContent={{ base: "flex-start", md: "center" }}>
                        <FaCode />
                        Reusable Razor Components
                    </Tabs.Trigger>
                    <Tabs.Trigger value="remediation" flexShrink={0} gap="2" w={{ base: "100%", md: "auto" }} justifyContent={{ base: "flex-start", md: "center" }}>
                        <LuLayoutTemplate />
                        UI & Accessibility Remediation
                    </Tabs.Trigger>
                    <Tabs.Trigger value="scripts" flexShrink={0} gap="2" w={{ base: "100%", md: "auto" }} justifyContent={{ base: "flex-start", md: "center" }}>
                        <LuAccessibility />
                        Global Scripts & Accessible CSS
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="razor"><ReusableRazorComponent /></Tabs.Content>
                <Tabs.Content value="remediation"><UIAndAccessibility /></Tabs.Content>
                <Tabs.Content value="scripts">Content 3</Tabs.Content>
            </Tabs.Root>
        </Box> */}
        <Link className='link-title link-page' marginTop="2rem" title="Back to the Top Link" aria-label='Back to the Top Link' href='#'>Back to the Top</Link>
        </>
    )
}

export default LongBeachExperienceContent