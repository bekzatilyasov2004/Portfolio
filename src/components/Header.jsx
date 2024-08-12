import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, IconButton, Input, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { IoMdMenu } from "react-icons/io";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setIsOpen(e.target.value !== '');
    };

    return (
        <Box w="100%" h="100px" p="10px" display="flex" justifyContent="space-between" alignItems="center" gap="20px">
            <Box display="flex" justifyContent="space-around" gap="10px" alignItems="center" className="gradient-text" as={NavLink} to="">
                <Fade duration={1000} cascade delay={150}>
                    <Text fontWeight="bold" fontSize="70px">B</Text>
                    <Text display={{ base: 'none', md: 'block' }} fontWeight="bold" fontSize="25px">Dev</Text>
                </Fade>
            </Box>
            <Box w="200px"></Box>
            <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="top" closeOnBlur={false}>
                <PopoverTrigger>
                    <Input variant="outline" placeholder='Search...' w="100%" value={searchTerm} onChange={handleInputChange} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverBody>
                        <Text>Search results for "{searchTerm}"</Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Box w="200px"></Box>
            <Box display={{ base: 'none', md: 'flex' }} justifyContent="space-around" alignItems="center" gap={10}>
                <Fade delay={150} direction={'down'} cascade>
                    <Button variant="link" as={NavLink} to="">Home</Button>
                    <Button variant="link" as={NavLink} to="about">About</Button>
                    <Button variant="link" as={NavLink} to="skills">Skills</Button>
                    <Button variant="link" as={NavLink} to="project">Project</Button>
                    <Button variant="link" as={NavLink} to="contact">Contact</Button>
                </Fade>
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<IoMdMenu />} variant="outline" aria-label="Options" />
                    <MenuList>
                        <MenuItem as={NavLink} to="">Home</MenuItem>
                        <MenuItem as={NavLink} to="about">About</MenuItem>
                        <MenuItem as={NavLink} to="skills">Skills</MenuItem>
                        <MenuItem as={NavLink} to="project">Project</MenuItem>
                        <MenuItem as={NavLink} to="contact">Contact</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
};

export default React.memo(Header);
