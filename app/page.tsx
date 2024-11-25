import developerImg from '@/public/development.png';
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className=" flex flex-col-reverse md:flex-row items-center justify-center w-full  md:mt-44">
      <div className="flex flex-col items-center gap-y-8 ">
        <div className=" flex flex-col items-center gap-y-8 xs:max-md:px-5">
          <h3 className="text-3xl font-medium font-landingPageFont  text-[#BFA181]">
            Chandan Chaudhary
          </h3>
          <p className="text-xl font-normal font-mono text-[#BFA181]">
            I am an experienced MERN stack software engineer specializing in building full-stack applications with MongoDB, Express, React, and Node.js. I excel in creating dynamic, responsive, and scalable web applications, with a strong focus on both frontend user experience and backend performance. My expertise includes RESTful API development, state management, and deployment strategies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-8  ">
          <Button variant={'default'} className='bg-red-500 font-semibold dark:text-white text-xl'>Resume</Button>
          <Button className='bg-red-500  dark:text-white font-semibold text-xl'>Hire</Button>
        </div>
      </div>
      <Image src={developerImg} alt="" className="md:w-5/12" />
    </main>
  );
}
