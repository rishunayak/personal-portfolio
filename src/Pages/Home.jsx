import { Box, Button, Center, Flex, Heading, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {IoMdMail} from "react-icons/io"
import {BsTelephoneFill} from "react-icons/bs"
import cv from "../cv/Rishu_Nayak_Resume.pdf"


const Home = () => {

    const { colorMode } = useColorMode();

    const [colorBold,setColorBold]=useState("")
    const [secColor,setSecColor]=useState("")

  useEffect(()=>
  {
    colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
    colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
  },[colorMode])

    
  return (
     <>
      <Box color={secColor} id='home'  width={["95%","90%","90%","90%"]}  m="auto" p={["100px 0px 50px 0px","100px 0px 0px 0px","100px 0px 0px 0px","200px 0px 180px 0px"]}>
       <Center justifyContent={"space-between"} flexDirection={["column","column","column","row"]} gap="10px" w={["100%","100%","100%","100%","70%"]} margin="auto" >
       
        <Box display={"grid"} gap="20px" textAlign={"center"} >
       <Heading fontSize={["30px","40px","50px"]}>Hi, I am <span style={{color:colorBold}}>Rishu Kumar Nayak</span> </Heading> 
       <Heading className="typer"> 
        <Typewriter options={{strings:["A Full Stack Web Developer", "A Sport person","Curious to learn new things"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
       </Heading> 
       <Box W={["90%","650px"]} m="auto">
       <Text lineHeight={"25px"} fontSize="18px" textAlign={"left"}>Adaptable and responsible web developer capable of writing production ready code using HTML, CSS, JavaScript, React.Js on the front-end and NodeJs, Express.Js, and MongoDB on the back-end to build single-page applications.</Text>
       </Box>
       <Flex gap={"20px"} alignItems="center"  m={"auto"}>
         <a href="https://github.com/rishunayak" target="_blank"  rel="noreferrer" aria-label='github' className='link link--icon'> <FaGithub size={30} /> </a>
         
         <a href="https://www.linkedin.com/in/rishunayak/" target="_blank" rel="noreferrer" aria-label='linkedin' className='link link--icon'> <FaLinkedin  size={30} /> </a>
         
         <a href='mailto:rishunayak22@gmail.com' aria-label="email" className='link link--icon'> <IoMdMail  size={33}/> </a>

         <a href='tel:+918957736763' aria-label="phone" className='link link--icon'> <BsTelephoneFill  size={27}/> </a>

         {/* <a href="https://drive.google.com/file/d/18dlYwEXqLX5ZhMUF_92o--Ac1ChcHjNA/view?usp=sharing" target="_blank" id="resumeButton">
           
          </a> */}
    
      </Flex>
    
      <Center>
      <a href={cv} rel="noreferrer" >
          
             <Text color={colorBold} fontSize="20px"  w={"150px"} h="50px" border={`2px solid ${colorBold}`} borderRadius="16px" bg="none" _hover={{bg:"none"}} display="flex" justifyContent={"center"} alignItems="center"
              onClick={() =>
                window.open(
                    "https://drive.google.com/file/d/18dlYwEXqLX5ZhMUF_92o--Ac1ChcHjNA/view"
                )
                } >Resume</Text></a></Center>


      </Box> 
      <Box display={["none","none","none","block"]}><Image src="https://media.discordapp.net/attachments/702481980025077853/1054701477534375936/bg-removebg-preview.png" borderRadius={"16px"} h="350px"/> </Box>
      </Center> 
      
      </Box>
     </>
  )
}

export default Home