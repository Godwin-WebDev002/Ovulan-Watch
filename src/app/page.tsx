import { Header } from "../components/Header";
import { OvulanIcon } from "../components/OvulanIcon";
import { Subscribe } from "../components/Subscribe";
import { TimeArt } from "../components/TimeArt";
import { TopCollection } from "../components/TopCollection";
import { WhatPeopleSay } from "../components/WhatPeopleSay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black w-full">
      <Header />
      <TopCollection />
      <TimeArt />
      <OvulanIcon />
      <WhatPeopleSay />
      <Subscribe />
    </main>
  );
}
