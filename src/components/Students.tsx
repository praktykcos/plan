'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import ModalStudent from './ModalStudent';

const Students = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <section>
            <ModalStudent inOpen={isModalOpen} onClose={closeModal}/>
            <div>
                <button 
                    onClick={openModal}
                    className='flex bg-[#4CBC9A] w-[207px] h-[60px] mt-[56px] justify-center items-center rounded-[40px] text-white cursor-pointer ml-auto mr-[50px]'
                >
                    <Image src="/plus.png" alt="Add Student" width={16} height={16} className='mr-[16px] cursor-pointer'/>
                    Add Students
                </button>
            </div>
        </section>
    );
};

export default Students;
