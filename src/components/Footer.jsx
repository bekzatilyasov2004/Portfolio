import { Box, Text, Link, VStack, HStack, IconButton } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <Box
      w="100%"
      h={{ base: 'auto', md: '400px' }}
      bg="black"
      color="white"
      p={{ base: '20px', md: '40px' }}
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-around"
      alignItems="center"
      gap={20}
    >
      <Fade cascade duration={1000}>
        <VStack spacing={5} alignItems="start" textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">Contact Us</Text>
          <Text>1234 Street Name</Text>
          <Text>Tashkent, Salomatlik, 7</Text>
          <Text>Email: bekzatilyasov2704.com</Text>
          <Text>Phone: +998-93-824-27-04</Text>
        </VStack>
      </Fade>

      <Fade cascade duration={1000} delay={500}>
        <VStack spacing={5} alignItems="center" textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">Follow Us</Text>
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="https://www.facebook.com"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="outline"
              colorScheme="whiteAlpha"
              isRound
            />
            <IconButton
              as={Link}
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="outline"
              colorScheme="whiteAlpha"
              isRound
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedinIn />}
              variant="outline"
              colorScheme="whiteAlpha"
              isRound
            />
            <IconButton
              as={Link}
              href="https://www.github.com"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="outline"
              colorScheme="whiteAlpha"
              isRound
            />
          </HStack>
        </VStack>
      </Fade>

      <Fade cascade duration={1000} delay={1000}>
        <VStack spacing={5} alignItems="center" textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">About Us</Text>
          <Text>
            We are a team of passionate developers and designers dedicated to creating beautiful and functional web experiences. Our goal is to help you achieve your vision with cutting-edge technologies and innovative solutions.
          </Text>
        </VStack>
      </Fade>
    </Box>
  );
};

export default React.memo(Footer);
