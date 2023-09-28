import { Box, Flex, Heading, keyframes, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {IoMdMail} from "react-icons/io"
import {BsTelephoneFill} from "react-icons/bs"


const animation = keyframes`
 10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;



const Contact = () => {
    
    const { colorMode } = useColorMode();

    const [colorBold,setColorBold]=useState("")
    const [secColor,setSecColor]=useState("")
    const shaking = `${animation}  1s`;
    

  useEffect(()=>
  {
    colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
    colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
  },[colorMode])


  return (
    <Box id="contact" >
       <Heading fontSize={["30px","40px","50px"]} textAlign="center" mt={"70px"} mb="50px">CONTACT<span style={{color:colorBold}}> ME</span> </Heading> 

       <Box color={colorBold} width={["95%","90%","90%","80%"]}  m="auto">
       <Flex   justifyContent="space-around">
        
         <a href="https://github.com/rishunayak" target="_blank"  rel="noreferrer"
        
         > <Text   _hover={{
          animation: shaking,
         
        }}
       
         
         ><FaGithub size={80} /></Text>  </a>
         
         <a href="https://www.linkedin.com/in/rishunayak/" target="_blank" rel="noreferrer"
        
         > <Text  _hover={{
          animation: shaking
        }}
      
        ><FaLinkedin  size={80} /> </Text></a>
         
         <a href='mailto:rishunayak22@gmail.com' 
         
         >  <Text 
         _hover={{
          animation: shaking
        }}
       
        ><IoMdMail  size={88}/> </Text></a>

         <a href='tel:+918957736763' 
        
         >   <Text  _hover={{
          animation: shaking
        }}
      
        ><BsTelephoneFill  size={80}/> </Text></a>

    
      </Flex>

            <a href="https://github.com/rishunayak/rishunayak.github.io" target="_blank" rel="noreferrer"> <Text color={colorBold} m="30px 0px" fontWeight={"bold"} textAlign="center">Created By Rishu Kumar Nayak</Text> </a>
    </Box>
    </Box>
  )
}

export default Contact