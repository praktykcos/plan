import Image from "next/image";
import Modal from './Modal';
import { useState } from "react";

const CardTeacher = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    <div className="relative w-[250px] h-[352px] bg-white rounded-[20px] overflow-hidden" >
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div className="flex flex-col items-center p-4 mt-[32px]">
        <Image  
          onClick={openModal}
          src="/teacher.jpg"
          alt="Teacher"
          width={120}
          height={120}
          className="rounded-full border-4 border-[#4CBC9A] mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">Dimitres Viga</h3>
        <p className="text-sm text-gray-500 mb-4">Mathematics</p>
        <div className="flex space-x-4">
          <div className="bg-[#4CBC9A] p-2 rounded-full flex justify-center items-center">
            <a href="" className="block">
              <Image
                src="/email.png"
                alt="Email"
                width={18}
                height={18}
                className="text-white"
              />
            </a>
          </div>
          <div className="bg-[#4CBC9A] p-2 rounded-full flex justify-center items-center">
            <a href="" className="block">
              <Image
                src="/phone.png"
                alt="Phone"
                width={20}
                height={20}
                className="text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeacher;
