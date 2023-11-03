import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import GenerafiHero from "@/components/generafi-home/GenerafiHero";
import GenerafiRoll from "@/components/generafi-home/GenerafiRoll";
import GenerafiProduction from "@/components/generafi-home/GenerafiProduction";
import GenerafiTele from "@/components/generafi-home/GenerafiTele";
import GenerafiService from "@/components/generafi-home/GenerafiService";
import GenerafiAbout from "@/components/generafi-home/GenerafiAbout";
import GenerafiCounter from "@/components/generafi-home/GenerafiCounter";
import GenerafiWorkflow from "@/components/generafi-home/GenerafiWorkflow";
import GenerafiBrand from "@/components/generafi-home/GenerafiBrand";
import GenerafiTestimonial from "@/components/generafi-home/GenerafiTestimonial";
 






export default function Generafi ( ) {
    return(
        <div>
            <Head>
                <title>Generafi</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer3">
                    <GenerafiHero/>
                    <GenerafiRoll/>
                    <GenerafiProduction/>
                    <GenerafiTele/>
                    <GenerafiService/>
                    <GenerafiAbout/>
                    <GenerafiCounter/>
                    <GenerafiWorkflow/>
                    <GenerafiBrand/>
                    <GenerafiTestimonial/>
                </RootLayout>
            </main>
        </div>
    )
}