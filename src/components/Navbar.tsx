import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className='w-[345px] h-screen bg-[#4CBC9A]'>
                <div className='flex items-center text-[36px] font-bold pt-[50px] ml-[46px]'>
                    <Image src="/logo.svg" alt="" width={48} height={48} />
                    <h1 className='ml-[16px] text-white'>Cosinus</h1>
                </div>
                <ul className='mt-[50px] ml-[70px] items-center'>
                    <li className='flex text-[18px] items-center'><Image src='/events.png' alt='' width={35} height={35} className='mr-[24px]'/><a className='text-white' href="/">Events</a></li>
                    <li className='flex text-[18px] items-center mt-[40px]'><Image src='/student.png' alt='' width={35} height={35} className='mr-[24px]'/><a className='text-white' href="/students">Students</a></li>
                    <li className='flex text-[18px] items-center mt-[40px]'><Image src='/teacher.png' alt='' width={35} height={35} className='mr-[24px]'/><a className='text-white' href="/teachers">Teachers</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;