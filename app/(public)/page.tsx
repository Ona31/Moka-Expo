// la home page 

import Def from "../components/sections/Defnition";
import ForChois from "../components/sections/Forchoi";
import Hero from "../components/sections/Hero";
import Projects_vedette from "../components/sections/Projects_ved";



export default function Home(){
    return(
        <>
        <Hero/> 
        <Def/>
        
        <Projects_vedette/>
       <ForChois/>
        </>
    )
}