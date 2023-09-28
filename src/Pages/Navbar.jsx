import { Box,  Button,  Center,  CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Link, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {MdLightMode,MdNightlight} from "react-icons/md"
import {HiMenu} from "react-icons/hi"
import cv from "../cv/Rishu_Nayak_Resume.pdf"
const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
 
  const [colorIcon,setColorIcon]=useState("")
  const [secColor,setSecColor]=useState("")
  const [display,setDisplay]=useState("none")
  const [navBg,setNavBg]=useState("")

  useEffect(()=>
  {
     colorMode==="dark"? setColorIcon("#90a0d9") : setColorIcon("#68d391")
     colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444")
     colorMode==="dark"? setNavBg("#1a202c"):setNavBg("white")
  },[colorMode])

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <Box boxShadow={"2xl"} position="fixed" w={"100%"} zIndex={10} bg={navBg} >
    
    <Box width={["95%","90%","90%","80%"]}        m="auto" >
      <Flex justifyContent={"space-between"}  p="20px 0px"  color={colorIcon} alignItems="center" >
        <Box ><Text fontSize='2xl' fontWeight={"bold"}>Expl◉re Me!</Text></Box>
        <Box  display={["none","none","block","block"]}>
        <Flex gap={"20px"} alignItems="center" color={secColor} >
           <a href='#home' > <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}} >Home</Text></a>
           <a href='#about' > <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}} >About</Text></a>
           <a href='#skills' > <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}} >Skills</Text></a>
           <a href='#projects'  > <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}}>Projects</Text></a>
           <a href='#contact'   > <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}} >Contact</Text></a>
         
           <a href={cv} rel="noreferrer">
          
             <Text fontSize='2xl' fontWeight={"bold"} _hover={{color:colorIcon}} 
              onClick={() =>
                window.open(
                    "https://drive.google.com/file/d/18dlYwEXqLX5ZhMUF_92o--Ac1ChcHjNA/view"
                )
                } >Resume</Text></a>
             
            
           
         {  colorMode==="light" ? <MdNightlight size={25} onClick={toggleColorMode} color={colorIcon} animateOpacity/> : <MdLightMode size={25} color={colorIcon} onClick={toggleColorMode}  animateOpacity/> }
        </Flex>
        </Box>

        <Box display={["block","block","none","none"]}>

        <Flex alignItems={"center"} >
          {colorMode==="light" ? <MdNightlight size={25} onClick={toggleColorMode} color={colorIcon} animateOpacity/> : <MdLightMode size={25} color={colorIcon} onClick={toggleColorMode}  animateOpacity/>}

          <Box >
           <IconButton icon={<HiMenu size={"30px"} onClick={()=>setDisplay("block")}/>}  />
          </Box>
           

         </Flex>

        </Box>
         
       
       


      </Flex>

     
      {/* <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
          <Flex flexDirection={"column"} fontSize={"20px"} fontWeight={700} gap="25px" alignItems={"center"}>
           <Link href='#home' onClick={()=>setTimeout(()=>{onClose()},1000)}>Home</Link>
           <Link href='#about' onClick={()=>setTimeout(()=>{onClose()},1000)} >About</Link>
           <Link href='#skills' onClick={()=>setTimeout(()=>{onClose()},1000)}>Skills</Link>
           <Link href='#projects' onClick={()=>setTimeout(()=>{onClose()},1000)}>Projects</Link>
           <Link href='#contact' onClick={()=>setTimeout(()=>{onClose()},1000)}>Contact</Link>
           </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
         
    
      <Flex w="100%"  bgColor={"gray.50"} zIndex={20} h="100vh" pos={"fixed"} top="0" left={"0%"} overflowY="auto"  display={display} justifyContent={"flex-end"} >   
            <Flex justifyContent={"flex-end"}> <IconButton mt={2} mr={2} size="lg" icon={<CloseButton onClick={()=>setDisplay("none")}/>}/> </Flex>  
        <Flex flexDirection={"column"} gap="30px" alignItems={"center"}>
           <Link href='#home' onClick={()=>setDisplay("none")}>Home</Link>
           <Link href='#about' onClick={()=>setDisplay("none")}>About</Link>
           <Link href='#skills' onClick={()=>setDisplay("none")}>Skills</Link>
           <Link href='#projects' onClick={()=>setDisplay("none")}>Projects</Link>
           <Link href='#contact' onClick={()=>setDisplay("none")}>Contact</Link>
        </Flex>
      </Flex>

      </Box>
    </Box>
  )
}

export default Navbar