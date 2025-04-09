import Image from "next/image";

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[800px] h-[550px] relative">
        {/* Кнопка закрытия модалки */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <Image src="/close-modal.png" alt="Close" width={20} height={20} />
        </button>

        {/* Кнопка редактирования */}
        <button className="absolute top-4 right-14">
          <Image src="/edit-modal.png" alt="Edit" width={20} height={20} />
        </button>

        {/* Контент модалки */}
        <div className="flex items-center mt-6">
          <Image
            src="/modal.jpg"
            alt="Teacher"
            width={250}
            height={250}
            className="rounded-full border-4 border-black"
          />
          <div className="ml-6">
            <p className="text-2xl font-bold">Name: Mike</p>
            <p className="text-2xl font-bold">Surname: Djon</p>
          </div>
        </div>

        {/* Список информации */}
        <ul className="text-[15px] mt-8 space-y-3">
          <li>
            STATUS: <span className="text-[#1FC125]">WORK</span>
          </li>
          <li>PESEL: 1111111111111</li>
          <li>Object: Education</li>
          <li>Start: 2025</li>
          <li>End: Present</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
