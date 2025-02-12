// import developerImg from '@/public/development.png';
// import Image from "next/image";
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { User2Icon } from 'lucide-react';


export default function LandingPage() {
    return (
        <main className=" flex flex-col md:flex-row gap-x-8 gap-y-8 items-center justify-center md:pt-32">
             <div className='felx items-center justify-center border-4 border-blue-500 rounded-full h-60 w-96 p-5'>
                <User2Icon className="size-32" />
                {/* <Image src={developerImg} alt="" className="" /> */}
            </div>
            <div className="flex flex-col gap-y-8 max-w-5xl ">
                <div className=" flex flex-col gap-y-1 xs:max-md:px-5">
                    <h3 className="text-xl">
                        Hey, I&apos;m  <span className="text-xl font-normal font-landingPageFont underline decoration-wavy decoration-white">Chandan Chaudhary</span>
                    </h3>
                    <p className="">
                        I am an experienced MERN stack software engineer specializing in building full-stack applications with MongoDB, Express, React, and Node.js. I excel in creating dynamic, responsive, and scalable web applications, with a strong focus on both frontend user experience and backend performance. My expertise includes RESTful API development, state management, and deployment strategies.
                    </p>
                </div>
                <div className="flex gap-x-5">
                    <GitHubLogoIcon className="w-6 h-6 cursor-pointer" />
                    <LinkedInLogoIcon className="w-6 h-6 cursor-pointer" />
                    <InstagramLogoIcon className="w-6 h-6 cursor-pointer" />
                    <Button variant={'custom'} className=''>Resume</Button>
                    <Button variant={'custom'} className=''>Hire</Button>
                </div>
            </div>
           
        </main>
    )
}