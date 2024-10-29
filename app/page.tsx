import developerImg from '@/public/development.png';
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className=" flex flex-col  items-center justify-center w-full">
      <Image src={developerImg} alt="" className="md:w-80" />
      <div className="flex flex-col items-center gap-y-8 ">
        <div className=" flex flex-col items-center gap-y-3">
          <h3 className="text-3xl font-bold font-landingPageFont">
            Pablo Escobar Gabellia
          </h3>
          <p className="text-xl md:text-2xl font-semibold font-paragraphFont">
            I am an experienced MERN stack software engineer specializing in building full-stack applications with MongoDB, Express, React, and Node.js. I excel in creating dynamic, responsive, and scalable web applications, with a strong focus on both frontend user experience and backend performance. My expertise includes RESTful API development, state management, and deployment strategies.
          </p>
        </div>
        <div className="flex gap-8">
          <Button variant={'default'} className='bg-red-500 font-bold text-xl'>Resume</Button>
          <Button className='bg-red-500 font-bold text-xl'>Hire</Button>
        </div>
      </div>
    </main>
  );
}
