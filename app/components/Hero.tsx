import Image from "next/image";
import HeroBg from '@/public/static/images/hero/main/1.jpg'
import Navbar from "./Navbar";

export default function HeroPage() {
  return (
    <>
    <Navbar/> 
    <div className="h-screen flex flex-col gap-32 justify-center items-center  w-screen bg-inherit"> 
    
    <div className="absolute -z-1 w-full h-full">
    <Image fill src={HeroBg} alt="Home Page Image"/>
    </div>
    <h1 className="text-8xl z-10 font-bold font-codec ">Purpose <span className="-ml-6 text-9xl text-blue-400">.</span></h1>
    <div className="z-10 flex justify-center items-center flex-col gap-8 w-full ">
    <hr className="z-10  w-[30%]" />
    <h3 className="text-3xl z-10 font-light font-codec max-w-[40%] text-center " >We work towards turning businesses into brands that people love!</h3>
    </div>
    </div>
    </>
 
 );

}
