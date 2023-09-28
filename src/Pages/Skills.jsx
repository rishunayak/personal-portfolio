import { Box, Center,  Grid, GridItem, Heading,  Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGithub} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {SiMongodb,SiRedux,SiExpress,SiChakraui,SiNetlify,SiVercel} from "react-icons/si"
import Githubcalendar from "react-github-calendar";
import { useEffect } from 'react'
import { useState } from 'react'
import {IoLogoJavascript} from "react-icons/io"
const Skills = () => {
    const { colorMode } = useColorMode();
    const [colorIcon,setColorIcon]=useState("")
    const [secColor,setSecColor]=useState("")
    const [colorBold,setColorBold]=useState("")
    
    useEffect(()=>
    {
       colorMode==="dark"? setColorIcon("white") : setColorIcon("#68d391")
       colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
       colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
       
       
    },[colorMode])
  
  return (
    <>
   <Box width={["95%","90%","90%","90%","80%"]}  m="auto" color={secColor} pt="100px" id='skills'>

    <Heading textAlign={"center"} mb="40px">SKILLS</Heading>
      
   <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(6, 1fr)']} gap={30} margin="auto"  textAlign="center" >
        <GridItem display={"grid"} justifyContent={"center"} gap="5px" > <Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}> <FaHtml5 size={80} color={colorIcon} /><Text fontWeight={"bold"} >HTML5</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px" > <Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><FaCss3Alt size={80} color={colorIcon} /> <Text fontWeight={"bold"}>CSS3</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px" ><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><FaReact size={80} color={colorIcon}/> <Text fontWeight={"bold"}>React</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px" ><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><IoLogoJavascript size={80} color={colorIcon}/> <Text fontWeight={"bold"}>JavaScript</Text></Box></GridItem>

        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiMongodb size={80} color={colorIcon} /> <Text fontWeight={"bold"}>MonogDB</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiRedux size={80} color={colorIcon}/> <Text fontWeight={"bold"}>Redux</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiExpress size={80} color={colorIcon}/> <Text fontWeight={"bold"}>Express</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><FaNodeJs size={80} color={colorIcon}/> <Text fontWeight={"bold"}>NodeJs</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiChakraui size={80} color={colorIcon}/><Text fontWeight={"bold"}>Chakra UI</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><FaGithub size={80} color={colorIcon}/> <Text fontWeight={"bold"}>Github</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiNetlify size={80} color={colorIcon}/><Text fontWeight={"bold"}>Netlify</Text></Box></GridItem>
        <GridItem display={"grid"} justifyContent={"center"} gap="5px"><Box boxShadow={"2xl"} p="30px" borderRadius={"10px"}><SiVercel size={80} color={colorIcon}/><Text fontWeight={"bold"}>Vercel</Text></Box></GridItem>
         
        

      </Grid>

      <Center display={"grid"}>
         <Heading  textAlign={"center"} m="50px 0px">DAYS I <span style={{color:colorBold}} >CODED</span> </Heading>
        <Githubcalendar
          username="rishunayak"
          blockSize={20}
          blockMargin={6}
          fontSize={18}
          color={"#68d391"}
        /></Center>
  
      <Heading textAlign={"center"} className="section__title" style={{marginTop:"10px"}} m="40px 0px">GITHUB <span style={{color:colorBold}}> STATS</span></Heading>

      <Grid  templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap="20px" p={"0px 50px"} >

      <GridItem  >
          <img src="https://github-readme-stats.vercel.app/api?username=rishunayak&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=20232a" alt='' width={"100%"} height="100%" />
         </GridItem>
         
         <GridItem>
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=rishunayak&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" alt='' width={"100%"} />
         </GridItem>
        
      </Grid>
    
    </Box>
</>
  )
}

export default Skills