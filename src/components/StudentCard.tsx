import React from 'react';
import Image from 'next/image';

const StudentCard = ({ student }: any) => {
  return (
    <div className="flex items-center justify-between py-4 border-t">
      <div className="flex items-center">
        <Image src="/student.png" alt="Student Image" width={48} height={48} className="rounded-full" />
        <div className="ml-4 flex">
          <p className="font-semibold mr-[35px]">{student.name}</p>
          <p className='text-[#4CBC9A] font-semibold mr-[120px]'>{student.id}</p>
          <p className='text-[#A098AE] mr-[110px]'>{student.date}</p>
          <p className='mr-[180px]'>{student.parentName}</p>
          <p className='mr-[155px]'>{student.city}</p>
        </div>
      </div>
      <div className="flex items-center mr-[100px]">
        <button className="bg-[#4CBC9A] p-2 rounded-full">
          <Image src="/phone.png" alt="Phone" width={20} height={20} />
        </button>
        <button className="bg-[#4CBC9A] p-3 rounded-full ml-2">
          <Image src="/email.png" alt="Phone" width={20} height={20} />
        </button>
      </div>
      <div className="ml-4 w-[80px] h-[40px] bg-amber-300 flex items-center justify-center rounded-[20px]">
          <p className="text-white">{student.grade}</p>
      </div>
    </div>
  );
};

export default StudentCard;
