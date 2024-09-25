"use client"

import Image from 'next/image';
import developerIMg from '../../assets/development.png';
export default function About(){
    return(
        <main className='flex relative'>
            <Image src={developerIMg} alt="" className='w-5/12 absolute z-10 -left-44 -top-16' />
            <div className="border-gray-500 border-2 drop-shadow-2xl rounded-lg flex flex-col  gap-y-3 text-xl p-8 pl-72 ml-24  mt-12">
                <h3 className="text-pink-500 text-3xl font-semibold">About</h3>
                <p className="font-paragraphFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam, totam atque porro pariatur ipsum vel assumenda temporibus unde! Maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam, totam atque porro pariatur ipsum vel assumenda temporibus unde! Maxime.
                </p>
            </div>
        </main>
    )
}