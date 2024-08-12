import { Box, Text, VStack, Stack } from '@chakra-ui/react';
import { Progress } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { frontendSkills } from '../constants/FrontendData';

const Skills = () => {
    useEffect(()=>{
        console.log('render')
    },[])

    return (
        <Box display="flex" justifyContent="space-around" alignItems="center" w="100%" h="100%" flexDirection={{ base: 'column', md: 'row' }}>
            <Box bg="black" color={'white'} display="flex" justifyContent="center" alignItems="center" w={{ base: '100%', md: '50%' }} h={'100vh'} p={5}>

                <VStack spacing={5} p={10}>
                    <Fade delay={250} damping={1000} duration={1000}>
                        <Text fontSize={[15, 20, 25, 30, 35, 40, 45, 50]} >Why Choose Me?</Text>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >
                            I have extensive experience in creating dynamic and responsive web applications using modern technologies such as React and TypeScript. My expertise in CSS, including frameworks like Tailwind CSS, Chakra UI, and Bootstrap 5, ensures that every project not only runs smoothly but also has a polished and aesthetically pleasing design.
                        </Text>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >
                            In addition, I am well-versed in using component libraries such as Material-UI and Ant Design, which help to quickly and efficiently create consistent and visually appealing user interfaces. My knowledge extends to animation and interactive design, utilizing Framer Motion to bring life to user experiences.
                        </Text>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >
                            I also have experience with Firebase, which allows me to integrate real-time databases, authentication, and other backend services into my web applications. Furthermore, I use Zustand for efficient state management in complex applications, ensuring a seamless and scalable architecture.
                        </Text>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >
                            Beyond development, I leverage Figma to create and collaborate on user interface designs, ensuring that the final product aligns perfectly with the intended user experience.
                        </Text>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >
                            My ability to work with a wide range of tools and technologies ensures that I can adapt to different project requirements and provide high-quality solutions that meet both technical and design standards.
                        </Text>
                    </Fade>
                </VStack>
            </Box>
            <Box bg="white" color={'black'} display="flex" justifyContent="center" alignItems="center" w={{ base: '100%', md: '50%' }} h={'100vh'}>
                <Slide>
                    <VStack spacing={5} w="100%">
                        <Text fontSize={[15, 20, 25, 30, 35, 40, 45, 50]}>Frontend Skills</Text>
                        <Stack spacing={1} w="100%">
                            {frontendSkills.map(skill => (
                                <Box key={skill.name} w="100%">
                                    <Fade delay={250} direction='right' cascade>
                                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]}>{skill.name}</Text>
                                    </Fade>
                                    <Fade delay={250} direction='left' cascade>
                                        <Progress status="active" percent={skill.level} />
                                    </Fade>
                                </Box>
                            ))}
                        </Stack>
                    </VStack>
                </Slide>
            </Box>
        </Box>
    );
}

export default React.memo(Skills);
