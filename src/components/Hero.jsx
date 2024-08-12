import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';


const Hero = () => {

    return (
        <Box display="flex" justifyContent="space-around" alignItems="center" w="100%" h="100%" flexDirection={{ base: 'column', md: 'row' }} >
            <Box bg="black" color="white" display="flex" justifyContent="center" alignItems="start" w={{ base: '100%', md: '50%' }} h={{ base: '50vh', md: '100vh' }} p={20} flexDirection="column">
                <Fade delay={250} direction="left" cascade>
                    <Text>Hello There!</Text>
                    <Text fontSize={[20,25,30,35,40,45,50]}>I'm Bekzat Ilyasov,</Text>
                    <Text fontSize={[20,25,30,35,40,45]}>a creative FrontEnd developer</Text>
                </Fade>
            </Box>
            <Box

                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w={{ base: '100%', md: '50%' }}
                h={{ base: '50vh', md: '100vh' }}
                p={10}
            >
                <Slide delay={250} direction='right'>
                    <Img
                        src="./pro.png"
                        alt="programmer"
                    />
                </Slide >
            </Box>
        </Box>
    );
};

export default React.memo(Hero);
