import Hero from "@/components/sections/Hero";
import { getHero } from "@/lib/actions";


export default async function Home() {
  const heroData = await getHero();
  return (
    <>
      <Hero data={heroData} />
    </>
  );
}
