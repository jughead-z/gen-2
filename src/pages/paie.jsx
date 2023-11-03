import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PaieHero from "@/components/generafi-paie/PaieHero";
import PaieImage from "@/components/generafi-paie/PaieImage";
import PaieAbout from "@/components/generafi-paie/PaieAbout";
import PaieAtout from "@/components/generafi-paie/PaieAtout";
import PaieFaq from "@/components/generafi-paie/PaieFaq";
import PaieCta from "@/components/generafi-paie/PaieCta";
import PaieVideo from "@/components/generafi-paie/PaieVideo";
import PaieSecond from "@/components/generafi-paie/PaieSecond";


export default function Paie ( ) {
    return(
        <div>
            <Head>
                <title>Paie</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer3">
                    <PaieHero/>
                    <PaieImage/>
                    <PaieAbout/>
                    <PaieVideo/>
                    <PaieSecond/>
                    <PaieAtout/>
                    <PaieFaq/>
                    <PaieCta/>
                </RootLayout>
            </main>
        </div>
    )
}