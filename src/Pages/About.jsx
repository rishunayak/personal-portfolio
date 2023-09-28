import { Box, Flex, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {VscStarEmpty} from "react-icons/vsc"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFillStarFill} from "react-icons/bs"
import {FaGraduationCap} from "react-icons/fa"

const About = () => {
    const { colorMode } = useColorMode();

    const [colorBold,setColorBold]=useState("")
    const [secColor,setSecColor]=useState("")
    const [bg,setBg]=useState("")
    const [thirdColor,setThirdColor]=useState("")

    useEffect(()=>
  {
    colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
    colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
    colorMode==="dark"? setBg("#1a202c") : setBg("white")
    colorMode==="dark"? setThirdColor("white"):setThirdColor("#444444")
   
  },[colorMode])


  return (
    <>
    <Box color={secColor} width={["95%","90%","90%","80%"]}  m="auto" id='about' pt="70px">
     <Heading textAlign={"center"} m="40px 0px">ABOUT <span style={{color:colorBold}}  >ME</span> </Heading>

     <Flex gap={"50px"} w={["100%","100%","100%","90%","60%"]}  flexDirection={["column","column","column","row"]} m="auto" justifyContent={"center"} alignItems="center" >
       <Box >
        <Image src='https://avatars.githubusercontent.com/u/57229844?v=4' borderRadius={"16px"} width="300px"/>
       </Box>
       <Box >
        <Box w={["90%","400px"]} fontSize="17px" m={"auto"}>
         <Text>Hi Everyone, I am Rishu Kumar Nayak from Maharajganj, Uttar Pradesh. I have completed my graduation in Bachelor of Computer Application from Babu Banarasi Das University, Lucknow.</Text>
         <br/>
         <Text>Some of my interests apart form Coding :</Text>
         <br/>
         <Box color={colorBold}>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/>  Listening Music</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Playing Badminton</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Watching Cricket</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Watching Movies</Text>
         </Box>
        </Box>
       </Box>
     </Flex>


     <Heading textAlign={"center"} m="40px 0px">MY  <span style={{color:colorBold}}  >EDUCATION</span> </Heading>


     <VerticalTimeline lineColor={thirdColor}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: secColor,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:bg}}
    contentArrowStyle={{ borderRight: '20px solid  rgb(33, 150, 243)' }}
    date="May 2021 - December 2021"
    iconStyle={{ background: bg, color: '#fff' }}
    icon={<FaGraduationCap color={thirdColor}/>}
  >
    
    <Heading textAlign={"center"} style={{color:colorBold}}  fontSize={["","",""]}> <Text></Text> Masai School (Remote)</Heading>
    
    <Text color={secColor}>
    Joined the Military style Bootcamp to learn Full Stack Web Development and Data Structures. Also learned many soft skills in the process.
    </Text>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: secColor,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:bg}}
    contentArrowStyle={{ borderRight: '20px solid  rgb(33, 150, 243)' }}
    date="June 2018 - June 2021"
    iconStyle={{ background: bg, color: '#fff' }}
    icon={<FaGraduationCap color={thirdColor}/>}
  > 
     <Heading textAlign={"center"} style={{color:colorBold}} fontSize={["","",""]}>Bachelor of Computer Application (BCA)</Heading>
    
    <Text color={secColor} textAlign="center">
    Babu Banarasi Das University, Lucknow
    </Text>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: bg, color: '#fff' }}
    icon={<BsFillStarFill color={thirdColor}/>}
  >
    
  </VerticalTimelineElement>

</VerticalTimeline>






    </Box>
    </>
  )
}

export default About