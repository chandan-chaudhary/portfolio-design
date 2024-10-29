import developerImg from '@/public/development.png';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,

} from "@/components/ui/card"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export default function Projects() {
    return (
        <main className='flex flex-col gap-y-8 items-center justify-center px-3 sm:px-8 md:px-8 '>
            <h1 className='uppercase font-medium font-landingPageFont text-3xl xl:text-5xl '>Projects</h1>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-12'>
                {[1, 2, 3, 4, 5].map((_, idx) =>
                    <Card key={idx} className=''>
                        <CardContent className='flex flex-col items-center justify-center'>
                            <Image src={developerImg} alt='developer-img' width={100} height={100} className='w-32' />
                            <CardDescription className='font-paragraphFont text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quisquam! Deserunt, illum reiciendis tenetur animi in minus iusto laboriosam</CardDescription>
                        </CardContent>
                        <CardFooter className='flex justify-between'>
                            <Button><Code /> Source Code</Button>
                            <Button><Code /> Hosted Url</Button>
                        </CardFooter>
                    </Card>)}
            </div>
        </main>
    )
}