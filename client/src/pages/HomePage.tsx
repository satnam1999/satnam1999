import { Opening } from "@/components/editorial/Opening";
import { Orbit } from "@/components/editorial/Orbit";
import { WhoAmI } from "@/components/editorial/WhoAmI";
import { Numbers } from "@/components/editorial/Numbers";
import { WhatIDo } from "@/components/editorial/WhatIDo";
import { Groundwork } from "@/components/editorial/Groundwork";
import { OffTheClock } from "@/components/editorial/OffTheClock";
import { SayHello } from "@/components/editorial/SayHello";
import { Dock, ScrollProgress } from "@/components/editorial/Chrome";

const HomePage = () => {
  return (
    <>
      <ScrollProgress />
      <main className="overflow-x-clip">
        <Opening />
        <Orbit />
        <WhoAmI />
        <Numbers />
        <WhatIDo />
        <Groundwork />
        <OffTheClock />
        <SayHello />
      </main>
      <Dock />
    </>
  );
};

export default HomePage;
