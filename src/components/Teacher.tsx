import React from 'react';
import Image from 'next/image';
import CardTeacher from './CardTeacher';
import Modal from './Modal'

const Teachers = () => {
    return (
        <section>
            <div className=''>
                <button className='flex bg-[#4CBC9A] w-[207px] h-[60px] mt-[56px] justify-center items-center rounded-[40px] text-white cursor-pointer ml-auto mr-[50px]'><Image src="/plus.png" alt="" width={16} height={16} className='mr-[16px]'/>New Student</button>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-[40px] mt-[50px]">
                <CardTeacher />
                <CardTeacher />
                <CardTeacher />
                <CardTeacher />
                
            </div>
            <Modal />
        </section>
    );
};

export default Teachers;