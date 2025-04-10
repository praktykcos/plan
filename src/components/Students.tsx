'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ModalStudent from './ModalStudent';
import StudentCard from './StudentCard';
import Pagination from './Pagination';

const Students = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const students = [
    {
      name: 'Samanta William',
      id: '#123456789',
      date: 'March 25, 2021',
      parentName: 'Mana William',
      city: 'Jakarta',
      grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
    {
        name: 'Samanta William',
        id: '#123456789',
        date: 'March 25, 2021',
        parentName: 'Mana William',
        city: 'Jakarta',
        grade: 'VII A',
    },
  ];

  return (
    <section>
      <ModalStudent inOpen={isModalOpen} onClose={closeModal} />
      
      <div>
        <button
          onClick={openModal}
          className="flex bg-[#4CBC9A] w-[207px] h-[60px] mt-[56px] justify-center items-center rounded-[40px] text-white cursor-pointer ml-auto mr-[50px]"
        >
          <Image src="/plus.png" alt="Add Student" width={16} height={16} className="mr-[16px]" />
          Add Students
        </button>
      </div>

      <div className="w-full max-w-[1460px] h-auto bg-white rounded-[30px] ml-[50px] mt-[30px] p-6">
        <div className="overflow-x-auto">
          <div className="mb-6">
            <ul className="flex justify-between text-gray-600">
              <li className="font-semibold">Name</li>
              <li className="font-semibold">ID</li>
              <li className="font-semibold">Date</li>
              <li className="font-semibold">Parent Name</li>
              <li className="font-semibold">City</li>
              <li className="font-semibold">Contact</li>
              <li className="font-semibold">Grade</li>
            </ul>
          </div>

          <div>
            {students.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Students;
