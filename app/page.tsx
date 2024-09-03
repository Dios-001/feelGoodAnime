import Image from "next/image"
import logo from './public/Screenshot_2024-08-18_at_12.51.43_PM-removebg-preview.png'
import Link from "next/link"
import datas from '@/lib/mood.json'
import { Button } from "@/components/ui/button"


export default function HomePage(){


  
  return(
<>
    <header className="min-h-6  w-full flex items-center justify-center mt-5">
    <div className="bg-[#C08261] flex items-center gap-4 justify-center rounded-xl w-1/2">
    <Link href="/">
     <Image
     src={logo}
     alt="next image"
     width={150}
     height={150}
     />
  </Link>
     <h1 className="text-4xl font-extrabold">FeelGoodAnime</h1>
    </div>
    </header>
    
    <div className="flex items-center flex-col">
    <p className="text-7xl">Get <span className="text-[#FF8400]">Anime</span> recommendation based on your mood.</p>
    <p className="text-4xl ">How are your feeling?</p>
    </div>
    <div className="button-section mx-10 grid grid-cols-4 gap-3 mt-10" >
      {
        (datas.mood as any).map((data:any)=>{
          return(
            <Button className="hover:bg-[#9A031E] " key={data.name} variant={"outline1"} size={'lg'} asChild>
            <Link href="/diff" className="text-2xl ">{data.name} <span className="mt-1">{data.emoji}</span></Link>
           </Button>
          )
        })
      }
   

    </div>
</>
  )
}