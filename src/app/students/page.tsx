import Nav from '@/components/Nav';
import React from 'react';
import Students from '@/components/Students';

const page = () => {
    return (
        <section className='bg-[#F3F4FF] h-full'>
            <Nav nav={'Students'} key='3'/>
            <Students />
            
        </section>
    );
};

export default page;