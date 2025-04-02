'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    const menuItems = [
        { name: 'Events', icon: '/events.png', path: '/' },
        { name: 'Students', icon: '/student.png', path: '/students' },
        { name: 'Teachers', icon: '/teacher.png', path: '/teachers' },
    ];

    return (
        <nav>
            <div className='w-[345px] h-screen bg-[#4CBC9A]'>
                <div className='flex items-center text-[36px] font-bold pt-[50px] ml-[46px]'>
                    <Image src='/logo.svg' alt='' width={48} height={48} />
                    <h1 className='ml-[16px] text-white'>Cosinus</h1>
                </div>
                <ul className='mt-[50px] ml-[70px] items-center'>
                    {menuItems.map((item, index) => {
                        const isHovered = hovered === index;
                        return (
                            <li
                                key={index}
                                className={`flex text-[18px] items-center pt-[12px] pb-[12px] pl-[5px] rounded-l-xl                                cursor-pointer transition-all duration-300 ${isHovered ? 'bg-white text-green-700' : 'text-white hover:bg-white hover:text-[#4CBC9A]'}`}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={35}
                                    height={35}
                                    className='mr-[24px]'
                                />
                                <a href={item.path} className='w-full block p-2'>
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;