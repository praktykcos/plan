import Events from "@/components/Events";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-full bg-[#F3F4FF]">
      <div className="flex items-center justify-between pt-[50px]">
        <h1 className="text-2xl mb-4 ml-[37px] text-[36px] font-bold text-[#303972]">Events</h1>
        <div className="flex">
        
        <div className="relative w-[350px] mr-[50px]">
          <button className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <img src="/search.png" alt="Search" className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full h-[60px] bg-white pl-[60px] pr-4 rounded-[100px] outline-none"
          />
        </div>

          <div className="text-left text-right mr-[24px]">
            <p className="font-bold text-[#4CA8BC]">Jamal H.</p>
            <p className="text-sm text-[#A098AE]">Admin</p>
          </div>
          <Image
            src="/avatar.jpg"
            className="rounded-full mr-[63px] cursor-pointer"
            alt=""
            width={60}
            height={60}
          />
        </div>

        
      </div>
      <Events />
    </section>
  );
}
