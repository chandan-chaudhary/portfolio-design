import developerImg from '@/public/development.png';
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function LandingPage() {
  return (
    <main className=" flex flex-col  items-center justify-center w-full">
      <Image src={developerImg} alt="" className="md:w-80" />
      <div className="flex flex-col items-center gap-y-8 ">
        <div className=" flex flex-col items-center gap-y-3">
          <h3 className="text-3xl font-bold font-landingPageFont">
            I am Pablo Escobar Gabellia
          </h3>
          <p className="text-xl md:text-2xl font-semibold">
            I am a web developer dolor, sit amet consectetur
            adipisicing elit. Voluptatem, quis.
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
