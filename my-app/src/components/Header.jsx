import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react';
   import { Link } from 'react-router-dom';
 import { BiMenuAltLeft } from 'react-icons/bi';
  
const Header = () => {
const {isOpen, onOpen, onClose}=useDisclosure();

  return (
    <>
     <Button
     pos={'fixed'}
     top={'4'}
     left={'4'}
     colorScheme={'purple'}
     p={'0'}
     h={'10'}
     w={'10'}
     borderRadius={'full'}
     onClick={onOpen}
     >
        <BiMenuAltLeft size={'20'} />
     </Button>

    <Drawer isOpen={isOpen}>
      <div></div>
    </Drawer>

    </>
  )
}

export default Header;