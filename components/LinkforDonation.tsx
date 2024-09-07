import Link from "next/link"
import Image from "next/image"
import pfp from '@/components/images/pfp.jpeg'
import { CiLinkedin } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci"
const LinkforDonation = () => {

  return (
    <div className="flex flex-col justify-center items-center text-lg w-full m-2">

    <a href='https://buymeacoffee.com/dios_the_duos'>
        Made By &nbsp;<span className="underline hover:text-orange-900 hover:cursor-pointer text-orange-600">Abhishek Patawari<Image alt="pfp" className="rounded-full inline-block hover:shadow-slate-600" height={25} src={pfp}/></span>
    </a>
    <div className="flex">
    <a href="https://www.linkedin.com/in/abhishek-patawari-ab7510288/"><CiLinkedin size={25}/></a>
    <a href="https://www.instagram.com/abhishek_patawari1100/"><CiInstagram size={25}/></a>
    </div>


    </div>
  )
}

export default LinkforDonation