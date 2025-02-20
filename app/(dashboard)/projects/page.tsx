import developerImg from '@/public/development.png';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { projects } from './projects';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Projects() {
    return (
        <main className='flex flex-col gap-y-8'>
            <div>
                <h1 className='font-bold text-3xl'>Projects</h1>
                <p className='text-lg'>Here are some of the projects I have worked on.</p>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {projects.map((project, idx) =>
                    <Card key={idx} className='cursor-pointer pb-2'>
                        <CardContent className='flex flex-col items-start'>
                            <Image src={project.projectImage || developerImg} alt='developer-img' width={400} height={100} className=' object-contain' />
                            <CardHeader className='font-bold text-xl text-center px-0'>{project.title}</CardHeader>
                            <CardDescription className='text-lg'>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className='flex flex-col gap-y-3 items-start '>
                            <div className='grid grid-cols-3 gap-x-2'>
                                {project.techStack?.map((tech, idx) => <span key={idx} className='text-sm bg-gray-700 px-2 py-1 rounded-md text-center'>{tech}</span>)}
                            </div>
                            <div className='flex gap-x-2'>
                                <Button className='bg-white text-black'><Globe />Website</Button>
                                <Button className='bg-white text-black'><GitHubLogoIcon />Github</Button>
                            </div>
                        </CardFooter>
                    </Card>)}
            </div>
        </main>
    )
}