
import { BiRightArrow } from "react-icons/bi"; 
import Btn from "../ui/Btn";


export default function Hero(){
   
    const title = "Mboka Expo – La vitrine des innovations locales";
    const des =`Mboka Expo est une plateforme conçue pour mettre en avant 
    les innovations locales, encourager la créativité et connecter les
     innovateurs avec le public, les partenaires et les investisseurs.`

     return(
      <section className="flex flex-col md:items-center justify-center w-full h-screen   md:px-32 md:py-0  bg-gradient-to-bl from-[#1f1b1e] via-[#2a1d1866] to-[#f04d0740]">
          

            <div className="flex flex-col w-full h-full items-center justify-center ">
            <div className="grid w-full grid-cols-3 border-b border-dashed border-br md:px-15 px-4">
                <div className="flex w-full h-12 border-l border-r border-dashed border-br "></div>
                <div className="flex  border-r border-dashed border-br"></div>
                <div className="flex  border-r border-dashed border-br"></div>
            </div>


            <div className="flex w-full h-auto md:px-15 px-4 border-b border-dashed border-br fade-delay-1">
               <div className="flex w-full border-l border-r border-dashed border-br p-4">
                    <h1 className="font-bold md:text-7xl text-3xl text-center ">{title}</h1>
               </div>
            </div>
               <div className="flex w-full h-auto md:px-15 px-4 border-b border-dashed border-br fade-delay-1 ">
               <div className="flex w-full border-l border-r border-dashed border-br justify-center">
                        <p className="font-light md:text-xl text-sm text-center  md:px-30 my-8 opacity-70 ">{des}</p>
               </div>
            </div>

            <div className="md:grid flex w-full md:grid-cols-3  h-auto px-4 md:px-15 border-b border-dashed border-br">
                <div className="flex w-full h-full border-l border-r border-dashed border-br "></div>
                <div className="flex flex-col md:flex-row  w-full h-auto p-8  justify-center gap-4 border-r border-dashed border-br">

                         <Btn href ="/login" title="Get Started"  className=" flex justify-center items-center gap-4 md:p-4 py-4 font-bold" icon={<BiRightArrow />} />
            <Btn href ="/login" title="Apopos de nous"  className=" md:p-4 px-8 py-4 font-bold bg-transparent backdrop-blur-md  border-2 border-primary"/>
            
                </div>
                <div className="flex w-full h-full border-r border-dashed border-br"></div>
            </div>

             <div className="grid w-full grid-cols-3 px-4  md:px-15">
                <div className="flex w-full h-12 border-l border-r border-dashed border-br "></div>
                <div className="flex  border-r border-dashed border-br"></div>
                <div className="flex  border-r border-dashed border-br"></div>
            </div>
        </div>

      </section>
     )
} 