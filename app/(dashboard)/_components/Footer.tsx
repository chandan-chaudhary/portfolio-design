import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <section className="flex flex-col items-center justify-center bg-black text-white text-center px-4">
            {/* Contact Badge */}
            <div className="bg-white text-black text-sm font-medium px-4 py-1 rounded-full mb-4">
                Contact
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>

            {/* Description with Link */}
            <p className="text-gray-400 text-lg flex gap-x-1 items-center">
                Want to Contact? DM{" "}
                <Link
                    href="#"
                    className="text-blue-400 hover:underline flex gap-x-1 items-center"
                >
                  on
                    <LinkedInLogoIcon style={{ fontSize: '52px' }} />
                </Link>
            </p>
        </section>
    );
};
