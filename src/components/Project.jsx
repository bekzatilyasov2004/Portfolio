import { Box, Text, Flex, Image, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import React, { useState } from 'react';
import { allProjects } from '../constants/ProjectData';
import { NavLink } from 'react-router-dom';

const Project = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    return (
        <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            w="100%"
            h="100%"
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            bg="gray.50"
        >
            <Box
                bg="white"
                color="black"
                w={{ base: '100%', md: '50%' }}
                h={{ base: 'auto', md: '100vh' }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                overflowY="auto"
            >
                <Fade direction="left" duration={1000}>
                    <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={4}>
                        Projects
                    </Text>
                    <Flex
                        direction="row"
                        wrap="wrap"
                        justifyContent="center"
                        gap={4}
                        spacing={6}
                    >
                        {allProjects.slice(0, 3).map((project, index) => (
                            <Fade key={index} direction="up" delay={index * 200} duration={1000}>
                                <Card
                                    maxW={{ base: 'sm', md: 'sm' }}
                                    borderRadius="md"
                                    boxShadow="lg"
                                    bg="white"
                                    overflow="hidden"
                                    transition="transform 0.3s ease"
                                    _hover={{ transform: 'scale(1.05)' }}
                                    p={2}
                                    textAlign="center"
                                >
                                    <Image src={project.image} alt={project.title} borderRadius="md" />
                                    <CardBody>
                                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                                            {project.title}
                                        </Text>
                                        <Text fontSize="sm" color="gray.600">
                                            {project.description}
                                        </Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Button colorScheme="teal" as="a" href={project.link} target="_blank">
                                            View Project
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Fade>
                        ))}
                    </Flex>

                    <Button mt={6} colorScheme="teal" as={NavLink} to={'all-project'} >
                        View All Projects
                    </Button>
                </Fade>
            </Box>

            <Box
                bg="black"
                color="white"
                w={{ base: '100%', md: '50%' }}
                h={{ base: 'auto', md: '100vh' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={20}
            >
                <Fade direction="right" duration={1000}>
                    <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold" textAlign="center">
                        Explore my projects and see how I can help you!
                    </Text>
                </Fade>
            </Box>
        </Box>
    );
};

export default React.memo(Project);
