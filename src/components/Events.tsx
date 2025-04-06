import React from 'react';
import Image from 'next/image';

const Events = () => {
    return (
        <section>
            <div className='w-[1007px] h-[1066px] bg-white mt-[40px] ml-[37px] rounded-[20px] '>
                <div className='flex pt-[32px]'>
                    <h2 className='text-[36px] text-[#4CBC9A] font-bold mr-[335px] ml-[32px]'>Calendar</h2>
                    <div className='flex w-[207px] h-[60px] border-[#4CBC9A] border-solid border-[2px] rounded-[40px] justify-center items-center mr-[24px]'>
                        <p className='text-[18px] text-[#4CBC9A]'>Class</p>
                        <button className='ml-[21px] cursor-pointer'><Image src="/btn.png" alt="" width={20} height={12} /></button>
                    </div>
                    <div className='flex w-[207px] h-[60px] border-[#4CBC9A] border-solid border-[2px] rounded-[40px] justify-center items-center'>
                        <p className='text-[18px] text-[#4CBC9A]'>January</p>
                        <button className='ml-[21px] cursor-pointer'><Image src="/btn.png" alt="" width={20} height={12} /></button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Events;