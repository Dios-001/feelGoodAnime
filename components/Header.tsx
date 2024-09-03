"use client"
import { Button } from "./ui/button"
import EmojiAnimation from "./EmojiAnimation"
import Link from "next/link"
import logo from "./images/someimage.png"
import Image from "next/image"

const Header = () => {
    
  return (
   <header className="bg-[#C08261] w-[80%] m-5 md:w-[60%] flex items-center px-10 py-3 justify-between rounded-lg">
    <div className="left">
        <Link href="/" ><Image src={logo} alt="feelGoodAnime" className="w-[100px] object-cover" /></Link>   
    </div>
    <div className="center"><h1 className="text-center text-xl mg:text-2xl lg:text-3xl p-2">Feeling 😄 Amused</h1></div>
    <div className="right"><Link href={"/"}><Button size={'default'} className="text-center"><EmojiAnimation/>Change in Mood?</Button></Link></div>
   </header>
  )
}

export default Header

// bg-[#C08261]