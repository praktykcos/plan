"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import CardTeacher from './CardTeacher';

const Teachers = () => {

    return (
        <section>
            <div className=''>
                <button 
                    className='flex bg-[#4CBC9A] w-[207px] h-[60px] mt-[56px] justify-center items-center rounded-[40px] text-white cursor-pointer ml-auto mr-[50px]'
                >
                    <Image src="/plus.png" alt="" width={16} height={16} className='mr-[16px] cursor-pointer'/>Add Teacher
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-[40px] mt-[50px]">
                <CardTeacher />
                <CardTeacher />
                <CardTeacher />
                <CardTeacher />
            </div>

        </section>
    );
};

export default Teachers;
