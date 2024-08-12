import { Box, Text, Flex, Image, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import React from 'react';
import { allProjects } from '../constants/ProjectData';

const AllProject = () => {
  return (
    <Box w="100%" p={6} bg="gray.50">
      <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={6} textAlign="center">
        All Projects
      </Text>
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="center"
        gap={6}
      >
        {allProjects.map((project, index) => (
          <Fade key={index} direction="up" delay={index * 200} duration={1000}>
            <Card
              maxW="sm"
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
    </Box>
  );
};

export default React.memo(AllProject);
