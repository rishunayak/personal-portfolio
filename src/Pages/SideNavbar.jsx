import { Button, Flex, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Scrollspy from 'react-scrollspy'

const SideNavbar = () => {


    const { colorMode } = useColorMode();

    const [colorIcon,setColorIcon]=useState("")
    const [border,setBorder]=useState("")
    

  
  
    useEffect(()=>
    {
       colorMode==="dark"? setColorIcon("#1a202c") : setColorIcon("#ffffff")
       colorMode==="dark"? setBorder("#90a0d9") : setBorder("#68d391")
    },[colorMode])



  return (
    <Flex justifyContent={["center", "center" ,"flex-end"]} marginEnd="10px" marginBottom={["20px","20px","0px"]} >
     <Flex position={"fixed"}  bottom={["0","0", "45%"]} flexDirection="column">
       <Scrollspy items={["home","about","skills","projects","contact"]} currentClassName={colorMode==="dark"?"active":"active2"} >
    
         <a href="#home"  >  <Button bg={colorIcon} borderRadius="50%" border={`1px solid ${border}`} size={"xs"} display={["inline-inline-block","inline-block","flex"]} mb={["0px","0px", "10px"]} ml={["10px","10px","0px"]} _hover={{backgroundColor:"none"}}></Button> </a>  
         <a href="#about"  >  <Button bg={colorIcon} borderRadius="50%" border={`1px solid ${border}`} size='xs' display={["inline-block","inline-block","flex"]}  mb={["0px","0px", "10px"]} ml={["10px","10px","0px"]} _hover={{backgroundColor:"none"}}> </Button> </a>  
         <a href="#skills"  >  <Button bg={colorIcon} borderRadius="50%" border={`1px solid ${border}`} size='xs' display={["inline-block","inline-block","flex"]} mb={["0px","0px", "10px"]} ml={["10px","10px","0px"]} _hover={{backgroundColor:"none"}}></Button> </a>  
         <a href="#projects"  >  <Button bg={colorIcon} borderRadius="50%" border={`1px solid ${border}`} size='xs' display={["inline-block","inline-block","flex"]} mb={["0px","0px", "10px"]} ml={["10px","10px","0px"]} _hover={{backgroundColor:"none"}}></Button> </a>  
         <a href="#contact" >  <Button bg={colorIcon} borderRadius="50%" border={`1px solid ${border}`} size='xs'display={["inline-block","inline-block","flex"]}  ml={["10px","10px","0px"]} _hover={{backgroundColor:"none"}}></Button> </a>  
     
         </Scrollspy>
        
    </Flex>
    </Flex>
  )
}

export default SideNavbar