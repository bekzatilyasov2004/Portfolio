import { Box, Text, VStack, Input, Textarea, Button } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

const Contact = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      w="100%"
      h="100%"
      flexDirection={{ base: 'column', md: 'row' }}
      bg="gray.50"
    >
      <Box
        bg="black"
        color="white"
        w={{ base: '100%', md: '50%' }}
        h={{ base: '50vh', md: '100vh' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Fade direction="left" duration={1000} cascade>
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={4}>
            Contact Information
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
            Feel free to reach out to us via email or phone. We're here to help!
          </Text>
          <VStack spacing={4} mt={8}>
            <Text>Email: bekzatilyasov2704@gmail.com</Text>
            <Text>Phone:+998-93-824-27-04</Text>
          </VStack>
        </Fade>
      </Box>

      <Box
        bg="white"
        color="black"
        w={{ base: '100%', md: '50%' }}
        h={{ base: '50vh', md: '100vh' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Fade direction="right" duration={1000}>
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={4}>
            Get in Touch
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={6} textAlign="center">
            Have a question or just want to say hello? Fill out the form below!
          </Text>
          <Box
            as="form"
            w="full"
            maxW="md"
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <Input placeholder="Your Name" variant="outline" />
            <Input type="email" placeholder="Your Email" variant="outline" />
            <Textarea placeholder="Your Message" variant="outline" rows={6} />
            <Button colorScheme="teal" mt={4}>
              Send Message
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default React.memo(Contact);
