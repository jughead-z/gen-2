import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ImmoHero  from "@/components/generafi-immobilisations/ImmoHero"
import ImmoImage from "@/components/generafi-immobilisations/ImmoImage";
import ImmoAbout from "@/components/generafi-immobilisations/ImmoAbout";
import ImmoAtout from "@/components/generafi-immobilisations/ImmoAtout";
import ImmoA from "@/components/generafi-immobilisations/ImmoA";


export default function Generafi ( ) {
    return(
        <div>
            <Head>
                <title>Immobilisations</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer3">
                    <ImmoHero/>
                    <ImmoImage/>
                    <ImmoAbout/>
                    <ImmoAtout/>
                    <ImmoA/>
                </RootLayout>
            </main>
        </div>
    )
}