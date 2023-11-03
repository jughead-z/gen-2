import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import StartupAgencyHero from "@/components/generafi-2/StartupAgencyHero";
import StartupAgencyFeature from "@/components/generafi-2/StartupAgencyFeature";
import StartupAgencyService from "@/components/generafi-2/StartupAgencyService";

import GenerafiProduction from "@/components/generafi-2/GenerafiProduction";
import GenerafiService from "@/components/generafi-2/GenerafiService";
import GenerafiCounter from "@/components/generafi-2/GenerafiCounter";
import GenerafiBrand from "@/components/generafi-2/GenerafiBrand";
import GenerafiTestimonial from "@/components/generafi-2/GenerafiTestimonial";
import GenerafiWorkflow from "@/components/generafi-2/GenerafiWorkflow"; 



const Generafi2 = () => {
  return (
    <div>
      <Head>
        <title>Genrafi</title>
        <meta name="description" content="Startup Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer4">
          <StartupAgencyHero />
          <GenerafiProduction/>
          <StartupAgencyService />
          <GenerafiService/>
          <StartupAgencyFeature />
          <GenerafiCounter/>
          <GenerafiWorkflow/>
          <GenerafiBrand/>
          <GenerafiTestimonial/>
        </RootLayout>
      </main>
    </div>
  );
};

export default Generafi2;
