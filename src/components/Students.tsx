import React from 'react';
import Image from 'next/image'

const Students = () => {
    return (
        <section>
            <div className=''>
                <button 
                    className='flex bg-[#4CBC9A] w-[207px] h-[60px] mt-[56px] justify-center items-center rounded-[40px] text-white cursor-pointer ml-auto mr-[50px]'
                >
                    <Image src="/plus.png" alt="" width={16} height={16} className='mr-[16px] cursor-pointer'/>Add Students
                </button>
            </div>
        </section>

        
    );
};

export default Students;