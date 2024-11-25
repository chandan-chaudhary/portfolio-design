"use client"

import Image from 'next/image';
import developerIMg from '@/public/development.png';
export default function About(){
    return(
        <main className=''>
            <Image src={developerIMg} alt="" className='' />
            <div className="border-gray-500 border-2 drop-shadow-2xl rounded-lg flex flex-col  gap-y-3 text-xl p-8">
                <h3 className="text-pink-500 text-3xl font-semibold">About</h3>
                <p className="font-paragraphFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam, totam atque porro pariatur ipsum vel assumenda temporibus unde! Maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam, totam atque porro pariatur ipsum vel assumenda temporibus unde! Maxime.
                </p>
            </div>
        </main>
    )
}