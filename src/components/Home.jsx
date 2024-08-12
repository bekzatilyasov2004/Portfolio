import { Box } from '@chakra-ui/react'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Project from './Project'
import Skills from './Skills'

const Home = () => {
    return (
        <>
            <Box>
                <Hero />
                <About />
                <Skills />
                <Project />
                <Contact />
            </Box>

        </>
    )
}

export default React.memo(Home)