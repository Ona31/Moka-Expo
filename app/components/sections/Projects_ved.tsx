import { AiOutlinePlusCircle } from "react-icons/ai"; 
// section projects en vedette

import { featuredProjects } from "@/app/src/data/data_projects"
import Btn from "../ui/Btn";




export default function Projects_vedette(){
    return(

        <section id="vedette" className=" block w-full h-auto  bg-linear-to-bl from-[#1f1b1e5d] via-[#2a1d183c] to-[#f04d071c] md:px-32 px-4 py-8 md:py-30 border-t border-b border-dashed border-br">
         
                    <div className="bloc  items-center gap-4 ">
                  <h1 className="text-center text-text font-bold
                   text-3xl ">Projects <span className="text-primary">vedette</span></h1>
                   <p className="text-center md:px-50 mt-4 text-text font-light md:text-xl opacity-70">Découvrez nos Projets Vedettes, sélectionnés pour leur innovation, créativité et impact culturel. Ces réalisations congolaises  représentent le meilleur de notre communauté et inspirent l’avenir du web local </p>
               </div>
              <div className=" flex  flex-col md:flex-row mt-14 justify-center gap-8  ">
               {featuredProjects.slice(0,3).map((item, index) => {
  return (
    <div key={index} className="bloc border-br border rounded-lg relative bg-linear-to-bl from-[#1f1b1e] via-[#2a1d1866] to-[#f04d0740] hover:scale-110 duration-700">
      <div className="flex p-4">
        <img
          src={item.image}
          alt={item.title}   
          className="rounded-lg w-[400px] h-[230px]  border-br border "
        />
      </div>
      <div className="flex flex-col absolute w-full h-auto backdrop-blur-xl bottom-0 rounded-lg p-4 ">
        <div className="flex justify-between w-full  ">
            <h3 className="font-bold text-xl">
            {item.title}
          </h3>
          <span className="font-bold">{item.author}</span>
        </div>
          <div className="flex justify-between">
            <p>{item.school}</p>
            <p>{item.category}</p>
          </div>
         <Btn href="" title="Voir plus" className="items-center p-2 font-bold mt-4 flex justify-center rounded-lg" icon={<AiOutlinePlusCircle />} />
      </div>
    </div>
  );
})}
              </div>

         
         
        </section>
    )
}