import Nav from "@/components/Nav";
import Events from "@/components/Events";

export default function Home() {
  return (
    <section className="w-full h-full bg-[#F3F4FF]">
      <Nav nav={'Events'} key='1'/>
      <Events />
    </section>
  );
}
