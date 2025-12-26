

import Link from "next/link";
import { ReactNode } from "react";


type Btnprops = {
    href : string,
    title: string,
    className?:string,
    icon?: ReactNode; 
   
}

export default function Btn({href,title ,className,icon}:Btnprops){
    return(
       <Link
  href={href}
  className={`bg-primary rounded-2xl whitespace-nowrap ${className}`}
>
  {title}
 {icon}
</Link>
    )
}



