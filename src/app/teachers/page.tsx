import Nav from '@/components/Nav';
import Teacher from '@/components/Teacher'
import React from 'react';

const page = () => {
    return (
        <section className='bg-[#F3F4FF] h-full'>
            <Nav nav={'Teachers'} key='2'/>
            <Teacher />
            
        </section>
    );
};

export default page;