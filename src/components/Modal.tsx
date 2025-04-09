import Image from "next/image"

const Modal = () => {
    return (
        <div className="absolute w-[800px] h-[500px] bg-white top-0 ">
            <div className="mt-[10px] ml-[40px]">
                <div>
                    <button><img src="" alt="" /></button>
                    <button><img src="" alt="" /></button>
                </div>
                <div className="flex items-center">
                    <Image src="/modal.jpg" alt="" width={250} height={250} className="rounded-full border-4 border-black" />
                    <div className="ml-[30px] ">
                        <p className="text-[30px]">Name: Mike</p>
                        <p className="text-[30px]">Surname: Djon</p>
                    </div>
                </div>
                <ul className="text-[20px] mt-[30px]">
                    <li>STATUS: <span className="text-[#1FC125]">WORK</span></li>
                    <li>PESEL: 1111111111111</li>
                    <li>Object: Education</li>
                    <li>Start: 2025</li>
                    <li>End: Present</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal