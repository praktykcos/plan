'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Состояние для активного элемента

    const menuItems = [
        { name: 'Events', icon: '/event.svg', path: '/' },
        { name: 'Students', icon: '/student.svg', path: '/students' },
        { name: 'Teachers', icon: '/teacher.svg', path: '/teachers' },
    ];

    const handleClick = (index: number) => {
        setActiveIndex(index); // Устанавливаем активный элемент
    };

    return (
        <nav className='block'>
            <div className='w-[345px] h-[1295px] bg-[#4CBC9A]'>
                <div className='flex items-center text-[36px] font-bold pt-[50px] ml-[46px] '>
                    <a href="/"><Image src='/logo.png' alt='' width={50} height={50} className='rounded-[10px] cursor-pointer' /></a>
                    <h1 className='ml-[16px] text-white '>Cosinus</h1>
                </div>
                <ul className='mt-[50px] ml-[70px] items-center'>
                    {menuItems.map((item, index) => {
                        const isHovered = hovered === index;
                        const isActive = activeIndex === index; 

                        return (
                            <li
                                key={index}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => handleClick(index)} 
                                className={`flex text-[18px] items-center pt-[12px] pb-[12px] pl-[5px] rounded-l-xl cursor-pointer transition-all duration-300 
                                ${isActive ? 'bg-[#F3F4FF] text-[#4CBC9A]' : isHovered ? 'bg-white text-[#4CBC9A]' : 'text-white hover:bg-[#F3F4FF] hover:text-[#4CBC9A]'}`}
                            >
                                {/* Inline SVG icon */}
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={35}
                                    height={35}
                                    className={`mr-[24px] transition-all duration-300 ${isActive ? 'text-[#4CBC9A]' : isHovered ? 'text-[#4CBC9A]' : 'text-white'}`} // Изменение цвета на основе активного состояния
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
