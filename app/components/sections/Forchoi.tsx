import { MdAddIcCall } from "react-icons/md"; 
// pourquoi section

import Btn from "../ui/Btn";
import Card from "../ui/Card";




export default function ForChois(){
    return(
        <section id="for" className="flex  w-full h-auto bg-background md:px-47  px-4 
        ">
            <div className="flex flex-col w-full h-full border-l border-r border-dashed border-br  ">
            
                    
               <div className="flex flex-col md:flex-row md:pt-20 md:pb-10 md:pl-15 md:items-center gap-4 p-8">
                  <h2 className="text-center text-text font-bold
                   text-3xl ">Votre <span className="text-primary">Choix</span></h2>
                   <p className="text-center font-light md:my-6 text-text md:text-xl opacity-70">Lorem ipsum, dolor sit </p>
               </div>
               <div className="grid md:grid-cols-2 w-full h-auto py-8 border-t  border-dashed border-br">
                  <div className=" flex flex-col md:items-start items-center p-4 md:pl-15 ">
                    <p className="font-light md:text-xl text-center md:text-left opacity-70 ">Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit. Non, laboriosam? Accusantium fugit maiores recusandae
                         temporibus cum ea ratione, dolorem animi saepe vel, delectus sed, reprehenderit et soluta? Sint, soluta facere!</p>
                          <p className="font-light md:text-xl text-center md:text-left my-8 opacity-70 ">Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit. Non, laboriosam? Accusantium fugit maiores recusandae
                         temporibus cum ea ratione, dolorem animi saepe vel, delectus sed, reprehenderit et soluta? Sint, soluta facere!</p>
                  
                  <Btn href="" title="Nous contactez!" className="p-4 font-bold text-xl inline-flex workspace-nowrap items-center" icon={<MdAddIcCall />}/>
                  </div>
                  <div className="flex ">
                      <Card/>
                  </div>
                

               </div>
               <div className="flex w-full h-20  border-t border-l   border-dashed border-br ">
                
               </div>
             
        </div>
        </section>
    )
}