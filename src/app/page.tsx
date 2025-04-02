import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-screen bg-[#F3F4FF]">
      <div className="flex items-center justify-between pt-[50px]">
        <h1 className="text-2xl mb-4 ml-[37px] text-[36px] font-bold">Events</h1>
        <div className="flex">
        <input
              type="text"
              placeholder="Search here..."
              className=""
            />
          <div className="text-left text-right mr-[24px]">
            <p className="font-bold">Jamal H.</p>
            <p className="text-sm">Admin</p>
          </div>
          <Image
            src="/avatar.jpg"
            className="rounded-full mr-[63px]"
            alt=""
            width={60}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}
