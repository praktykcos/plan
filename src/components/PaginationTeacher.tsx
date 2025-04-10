import React from 'react';
import Image from 'next/image';

const PaginationTeacher = () => {
    return (
        <div className='flex justify-end mt-[50px] mr-[100px] mb-[30px]'>
            <button><Image src='/dropdown-left.png' alt='' width={32} height={12} className='cursor-pointer' /></button>
            <div className='w-[50px] h-[50px] bg-[#4CBC9A] text-white rounded-[30px] flex justify-center items-center text-[18px] mr-[10px]'>1</div>
            <div className='w-[50px] h-[50px] bg-[#ffffff] text-gray-400 rounded-[30px] flex justify-center items-center text-[18px] border-[2px] border-[#A098AE] mr-[10px]'>2</div>
            <div className='w-[50px] h-[50px] bg-[#ffffff] text-gray-400 rounded-[30px] flex justify-center items-center text-[18px] border-[2px] border-[#A098AE]'>3</div>
            <button><Image src='/dropdown-right.png' alt='' width={32} height={12} className='cursor-pointer'/></button>
        </div>
    );
};

export default PaginationTeacher;