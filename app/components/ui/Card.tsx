// card 

import Image from "next/image"

export default function Card(){
    
    return(
        <div className="flex relative w-full hover:scale-110  duration-700 ">
            
       
        {/* Card 2 */}
          <div className="bloc w-[240px] md:w-[320px] bg-background rounded-md backdrop-blur-md  shadow-sm border border-br hover:shadow-md transition absolute rotate-15 md:-rotate-6 md:right-60 md:-top-5 right-10 top-15">
          <div className="relative w-full h-40 mb-4">
            <Image
              src="/projects/6.jpg"
              alt="Open Source & Moderne"
              fill
              className="object-cover  rounded-md  "
            />
          </div>
          <div className="bloc  p-4 bg-bg">
            <h3 className="text-md font-semibold mb-2">
            Open Source & Moderne
          </h3>
          <p className="text-sm text-text opacity-70">
            Des composants et templates open    Des composants et templates open    Des composants et templates open   
          </p>
          </div>
          
        </div>
        <div className="bloc w-[240px] md:w-[320px] bg-background rounded-md  shadow-sm border border-br hover:shadow-md transition absolute -rotate-15 md:-rotate-6 md:right-40 md:top-3 right-14 top-20 ">
          <div className="relative w-full h-40 mb-4">
            <Image
              src="/projects/6.jpg"
              alt="Open Source & Moderne"
              fill
              className="object-cover  rounded-md  "
            />
          </div>
          <div className="bloc p-4 bg-bg">
            <h3 className="text-md font-semibold mb-2">
            Open Source & Moderne
          </h3>
          <p className="text-sm text-text opacity-70">
            Des composants et templates open    Des composants et templates open   
          </p>
          </div>
          
        </div>

        {/* Card 3 */}
        <div className="bloc md:w-[320px] bg-background rounded-md  shadow-sm border border-br hover:shadow-md transition absolute right-10  md:right-15 top-30 md:top-15">
          <div className="relative w-full h-40 mb-4">
            <Image
              src="/projects/6.jpg"
              alt="Open Source & Moderne"
              fill
              className="object-cover  rounded-md  "
            />
          </div>
          <div className="bloc p-4 bg-bg">
            <h3 className="text-md font-semibold mb-2">
            Open Source & Moderne
          </h3>
          <p className="text-sm text-text opacity-70">
            Des composants et templates open  
          </p>
          </div>
          
        </div>

      
        </div>
    )
}