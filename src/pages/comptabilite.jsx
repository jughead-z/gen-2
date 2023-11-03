import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ComptaHero from "@/components/generafi-compta/ComptaHero";
import ComptaAbout from "@/components/generafi-compta/ComptaAbout";
import Comptaf from "@/components/generafi-compta/Comptaf";
import ComptaWork from "@/components/generafi-compta/ComptaWork";
import ComptClients from "@/components/generafi-compta/ComptaClients";
import ComptaVideo from "@/components/generafi-compta/ComptaVideo";
import ComptaFaq from "@/components/generafi-compta/ComptaFaq";
import ComptaCta from "@/components/generafi-compta/ComptaCta";
import ComptaClients from "@/components/generafi-compta/ComptaClients";
import ComptaImage from "@/components/generafi-compta/ComptaImage";

export default function Comptabilte ( ) {
    return(
        <div>
            <Head>
                <title>Comptabilté</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer3">
                    <ComptaHero/>
                    <ComptaAbout/>
                    <Comptaf/>
                    <ComptaWork/>
                    <ComptaClients/>
                    <ComptaFaq/>
                    <ComptaCta/>
                </RootLayout>
            </main>
        </div>
    )
}
