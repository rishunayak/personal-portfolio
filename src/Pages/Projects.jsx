import { Box, Flex, Heading, Image, keyframes, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {FaCode,FaReact,FaNodeJs} from "react-icons/fa"
import {BsPlayFill} from "react-icons/bs"
import {TbBrandJavascript} from "react-icons/tb"
import {SiMongodb,SiRedux,SiChakraui,SiCss3,SiHtml5} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"



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

const Projects = () => {

   const project2=[{original:"https://media.discordapp.net/attachments/702481980025077853/1067646248322089000/image.png?width=1382&height=676"},
   {original:"https://media.discordapp.net/attachments/702481980025077853/1067646357730492476/image.png?width=1379&height=675"},
  {origin:"https://media.discordapp.net/attachments/702481980025077853/1067646518598836265/image.png?width=1388&height=675"}]
    
    const { colorMode } = useColorMode();

    const [colorBold,setColorBold]=useState("")
    const [secColor,setSecColor]=useState("")
  
  
    const [colorIcon,setColorIcon]=useState("")

    useEffect(()=>
    {

        colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
        colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
 

    colorMode==="dark"? setColorIcon("white") : setColorIcon("#68d391")
    },[colorMode])
    const shaking = `${animation}  1s`;
  
  return (
    <>
     <Box color={secColor} width={["95%","90%","90%","90%","80%"]}  m="auto" id='projects' pt="70px">
       <Heading textAlign={"center"} m="40px 0px">MY<span style={{color:colorBold}}> PROJECTS</span> </Heading>





       {/*            Second Box    Start        */}

     <Flex gap={"20px"} flexDirection={["column","column","column","column","row"]} mt="20px">

        

<Box w={["100%","100%","100%","100%","50%"]} borderRadius="16px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" p={"20px"}>
       
       <Image boxShadow={"2xl"} borderRadius={"16px"} src="https://media.discordapp.net/attachments/702481980025077853/1070796542551806103/image.png?width=1373&height=675"/>
       <Heading color={colorBold} textAlign="center" m={"10px 0px"}>Purplle Clone</Heading>
       <Text fontSize={"17px"}>Purplle is a one stop solution for all your favourite beauty products, that too all under one roof. A collaborative project built by a team of 5 executed in 3 days.</Text>
       <Flex justifyContent={"center"} gap="10px" m={"20px 0px"}>

         <Box borderRadius={"10px"} ><SiHtml5 size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>        
          <Box borderRadius={"10px"} ><SiCss3 size={40} color={colorIcon} style={{margin:"auto"}} /></Box>
          <Box borderRadius={"10px"}><IoLogoJavascript size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>  
          <Box borderRadius={"10px"}><SiChakraui size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
          <Box borderRadius={"10px"} ><FaReact size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>
          <Box borderRadius={"10px"} ><SiMongodb size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
          <Box borderRadius={"10px"} ><FaNodeJs size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>

          
       </Flex>
       

       <Flex justifyContent={"space-between"}> 
       <a href="https://snazzy-cranachan-14966f.netlify.app/"  target="_blank" rel="noreferrer">
        <Box type="button" borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px" 
        _hover={{
         animation: shaking
       }}
       
        > <BsPlayFill size={"30px"} color={colorBold}/></Box>
       </a>

       <a href="https://github.com/rishunayak/purplle"  target="_blank" rel="noreferrer">
       <Box  
       _hover={{
         animation: shaking
       }}
      
       borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <FaCode size={"30px"} color={colorBold}/></Box>
       </a>

       </Flex>
   </Box>


   <Box w={["100%","100%","100%","100%","50%"]} borderRadius="16px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" p={"20px"}>
       

       <Image boxShadow={"2xl"} borderRadius={"16px"} src="https://media.discordapp.net/attachments/702481980025077853/1067646248322089000/image.png?width=1382&height=676"/>
       <Heading color={colorBold} textAlign="center" m={"10px 0px"}>Snapdeal Clone</Heading>
       <Text fontSize={"17px"}>Snapdeal is an Ecommerce Website for all products such as clothing, skincare, electronics etc.A collaborative project built by a team of 5 executed in 5 days.</Text>
       <Flex justifyContent={"center"} gap="10px" m={"20px 0px"}>
            
          <Box borderRadius={"10px"} ><SiHtml5 size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>        
          <Box borderRadius={"10px"} ><SiCss3 size={40} color={colorIcon} style={{margin:"auto"}} /></Box>
          <Box borderRadius={"10px"}><IoLogoJavascript size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>  
          <Box borderRadius={"10px"}><SiChakraui size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
          <Box borderRadius={"10px"} ><FaReact size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>
          <Box borderRadius={"10px"} ><SiMongodb size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
          <Box borderRadius={"10px"} ><FaNodeJs size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>
            
       </Flex>
       

       <Flex justifyContent={"space-between"}> 
       <a href="https://grabdeal.vercel.app/"  target="_blank" rel="noreferrer">
            <Box 
            _hover={{
               animation: shaking
             }}
             
            type="button" borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <BsPlayFill size={"30px"} color={colorBold}/></Box>
       </a>

       <a href="https://github.com/rishunayak/Snapdeal-Clone"  target="_blank" rel="noreferrer">
             <Box 
             _hover={{
               animation: shaking
             }}
          
             borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <FaCode size={"30px"} color={colorBold}/></Box>
       </a>
       </Flex>
   </Box>

</Flex>


   {/*            Second Box    End         */}






  {/*            First Box            */}
    
     <Flex gap={"20px"} flexDirection={["column","column","column","column","row"]} mt="20px">

        

     <Box w={["100%","100%","100%","100%","50%"]} borderRadius="16px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" p={"20px"}>
            
        <Image  boxShadow={"2xl"} borderRadius={"16px"} src="https://media.discordapp.net/attachments/702481980025077853/1054291378991013908/image.png?width=1375&height=676" />
            <Heading color={colorBold} textAlign="center" m={"10px 0px"}>Fitness Blender Clone</Heading>
            <Text fontSize={"17px"}>Fitness Ecommerce Website for workout-video, meal-plan, affective workout programs, fitness information. A collaborative project team leader built by a team of 5 executed in 5 days.</Text>
            <Flex justifyContent={"center"} gap="10px" m={"20px 0px"}>

              <Box borderRadius={"10px"} ><SiHtml5 size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>        
              <Box borderRadius={"10px"} ><SiCss3 size={40} color={colorIcon} style={{margin:"auto"}} /></Box>
              <Box borderRadius={"10px"}><IoLogoJavascript size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>  
              <Box borderRadius={"10px"}><SiChakraui size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
              <Box borderRadius={"10px"} ><FaReact size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>
              <Box borderRadius={"10px"} ><SiMongodb size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
              <Box borderRadius={"10px"} ><FaNodeJs size={40} color={colorIcon} style={{margin:"auto"}}/> </Box>
               
            </Flex>
            

            <Flex justifyContent={"space-between"}> 
            <a href="https://fitnesscenter1.netlify.app/"  target="_blank" rel="noreferrer">
             <Box 
             _hover={{
               animation: shaking
             }}
            
             type="button" borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <BsPlayFill size={"30px"} color={colorBold}/></Box>
            </a>

            <a href="https://github.com/rishunayak/Fitness-blender-clone"  target="_blank" rel="noreferrer">
              <Box
              _hover={{
               animation: shaking
             }}
            
              borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <FaCode size={"30px"} color={colorBold}/></Box>
            </a>

            </Flex>
        </Box>


        <Box w={["100%","100%","100%","100%","50%"]} borderRadius="16px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" p={"20px"}>
            
            <Image boxShadow={"2xl"} borderRadius={"16px"} src="https://media.discordapp.net/attachments/702481980025077853/1034502096214573056/unknown.png?width=1375&height=676"/>
            <Heading color={colorBold} textAlign="center" m={"10px 0px"}>Bella Vita Organic Clone</Heading>
            <Text fontSize={"17px"}>Bella Vita Organic is an Ecommerce Website for natural products for beauty, skincare, and perfumes.A collaborative project team leader built by a team of 3 executed in 5 days. </Text>
            <Flex justifyContent={"center"} gap="10px" m={"20px 0px"}>
                
               <Box borderRadius={"10px"} ><SiHtml5 size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>
               <Box borderRadius={"10px"} ><SiCss3 size={40} color={colorIcon} style={{margin:"auto"}} /></Box>
               <Box borderRadius={"10px"}><IoLogoJavascript size={40} color={colorIcon} style={{margin:"auto"}} /> </Box>  
               
               
            </Flex>
            

            <Flex justifyContent={"space-between"}> 
            <a href="https://gorgeous-taiyaki-33aee8.netlify.app/index.html"  target="_blank" rel="noreferrer">
                  <Box 
                  _hover={{
                     animation: shaking
                   }}
                 
                  type="button" borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <BsPlayFill size={"30px"} color={colorBold}/></Box>
            </a>

            <a href="https://github.com/rishunayak/sore-rate-9569"  target="_blank" rel="noreferrer">
                 <Box 
                 _hover={{
                  animation: shaking
                }}
               
                 borderRadius={"50%"} border={`2px solid ${colorBold}`} p="5px"> <FaCode size={"30px"} color={colorBold}/></Box>
            </a>
            </Flex>
        </Box>

     </Flex>



   {/*            First Box    End        */}







   



     </Box>

    </>
  )
}

export default Projects