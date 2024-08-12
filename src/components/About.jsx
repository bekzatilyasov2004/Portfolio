import { Box, Img, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'


const About = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;

        setRotateX(y / 10);
        setRotateY(-x / 10);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <Box display="flex" justifyContent="space-around" alignItems="center" w="100%" h="100%" flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box bg={'white'} display="flex" flexDirection={'column'} p={20} justifyContent="center" alignItems="center" w={{ base: '100%', md: '50%' }} h={{ base: '50vh', md: '100vh' }} onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',

                }}>
                <Slide delay={250} direction='left'>
                    <Img
                        src="./job.png"
                        alt="programmer"
                        style={{
                            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transition: 'transform 0.1s ease-out',
                            filter: 'drop-shadow(0 0 100px skyblue)'
                        }}
                    />
                </Slide >
            </Box>
            <Box p={20} bg={'black'} color={'white'} display="flex" justifyContent="center" flexDirection={'column'} alignItems="center" w={{ base: '100%', md: '50%' }} h={{ base: '50vh', md: '100vh' }}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <Fade delay={250} direction="left" duration="500" cascade>
                        <Text fontSize={[15, 20, 25, 30, 35, 40, 45, 50]} >About Me</Text>
                    </Fade>
                </Box>
                <Box display={'flex'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={[1, 2, 3, 4, 5]} >
                    <Fade delay={250} direction="up" damping={0.2} duration="400" cascade>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} >My name is Bekzat Ilyasov. I am a React Front-End Developer. I've been building React for 2 years now</Text>
                    </Fade>
                    <Fade delay={250} direction="up" damping={0.2} duration="400" cascade>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]} > Besides participating in many tech programs where I have been trained to have both technical and soft skills, I have acquired high level programming knowledge from taking online courses on UdemyPluralsight and Udacity,  Expert in JavaScript IQ test and JavaScript Certificate respectively.</Text>
                    </Fade>
                    <Fade delay={250} direction="up" damping={0.2} duration="400" cascade>
                        <Text fontSize={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]}>When I am not coding, I am either playing chess, soccer, video game, or watching a movie. Other times I am reading or learning a new language or framework.</Text>
                    </Fade>
                </Box>
            </Box>
        </Box>
    )
}

export default React.memo(About)