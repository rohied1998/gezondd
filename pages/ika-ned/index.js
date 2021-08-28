import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import Fade from "react-reveal/Fade";

export default function IkaNed() {
    return (
        <>
            <Head />
            <Nav className="fixed block w-screen z-10 bg-white text-black"/>
            <Fade>
                <section className="flex flex-col items-end flex-1 w-full h-full">
                    <div className="bg-doktor bg-no-repeat bg-cover bg-center mt-7 h-3/5">
                        <p className="text-2xl text-white font-bold text-left my-52 mx-72 tracking-widest ">
                            IKA Ned is een tweedelijns zorgorganisatie actief binnen de sectoren
                            overheid, semioverheidsinstellingen, zorg, handel, transport en
                            logistiek. IKA Ned baseert zich hierbij op de jarenlange ervaring van de
                            verschillende artsen en professionals opgedaan in profit en non-profit
                            sectoren. Daarnaast past IKA-Ned specialistische kennis toe op
                            verschillende voor organisaties van belang zijnde domeinen, zoals het
                            beoordelen van beroepsziekten en het versnellen van re-integratie
                            trajecten. Het gaat dan om de meer complexe problemen, waarbij een
                            bedrijfsarts, casemanager, de HR manager of betrokkene zelf, graag
                            advies krijgen van een expert{" "}
                        </p>
                    </div>
                </section>
            </Fade>
            <section className="flex flex-col mx-96 mt-24 tracking-widest">
                <div>
                    <ul className="list-disc mx-6 text-lg">
                        <Fade>
                            <li>
                                Advies bij reïntegratie, bij chronische aandoeningen zoals MS, of
                                complexe aandoeningen als kanker.
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                VDiagnostiek van beroepsziekten. IKA Ned is hét Centre of Excellence
                                in Nederland.
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                Advies bij keuringen, met name in het transport (railvervoer, bus).
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                Expertises: in rechtszaken, claim zaken (letselschade,
                                beroepsziekten), UWV beroepszaken.
                            </li>
                        </Fade>
                    </ul>
                    <Fade>
                        <p className="text-lg mt-12">
                            Gezondd werkt als arbodienst intensief samen met haar zusterorganisatie
                            IKA Ned voor die cliënten, die specialistische medische kennis vereisen
                            op het snijvlak van arbeid en zorg, voor diagnostiek bij beroepsziekten,
                            advies bij keuringen en expertises.
                        </p>
                    </Fade>
                </div>
                <Fade>
                    <p className="text-3xl mt-24">IKA Academy</p>
                    <p className="mt-12">
                        IKA Academy biedt excellente educatie door top docenten, waarbij u met
                        plezier leergangen kunt volgen én uw accreditatie punten kunt behalen. IKA
                        Academy organiseert hooggekwalificeerde nationale en internationale
                        opleiding en training speciaal ontwikkeld voor bedrijfs- en
                        verzekeringsartsen en andere Arbo professionals, maar ook voor
                        leidinggevenden, HR-profs en management.
                    </p>
                    <p className="mt-12">
                        Huidige research creëert nieuw wetenschappelijk bewijs. Het bewijs wordt
                        verwerkt en toegepast in een continue stroom van nieuwe standaarden en
                        professionele richtlijnen. Dat is het begin van onze opleiding! We leveren u
                        als deelnemer evidence based information, maar met een duidelijke lijn naar
                        praktische implicaties. Wetenschappelijke kennis moet vertaald worden naar
                        de praktijk.
                    </p>
                    <p className="mt-12">
                        De thema’s waarbinnen de verschillende modules vallen, zijn voorgedragen
                        door de praktiserende bedrijfsartsen binnen het IKA-netwerk. De keuze voor
                        die thema’s heeft alles te maken met het feit dat hier de kracht ligt van
                        onze experts. Ons netwerk groeit, dus ook de diversiteit aan expertise.{" "}
                    </p>
                </Fade>
                <Fade>
                    <p className="text-3xl mt-24">Het educatieve model</p>
                    <p className="mt-12">
                        De didactische benadering van IKA Academy is gebaseerd op leermethoden die
                        passen bij de huidige ontwikkelingen in het vak. De volgende principes
                        vormen de rode draad:
                    </p>
                    <ul className="list-disc mx-6 mt-12">
                        <li>De student staat centraal </li>
                        <li>Gerenommeerde subject matter experts uit het vak als docent </li>
                        <li>Diversiteit in leermethodes en leerstijlen</li>
                        <li>Gebaseerd op recente wetenschappelijke inzichten</li>
                        <li>Actief kennis en ervaring uitwisselen in kleine groepen</li>
                        <li>Een prettige stimulerende sfeer</li>
                    </ul>
                    <p className="mt-12">
                        Gezondd werkt samen met IKA Academy voor het ontwikkelen en geven van
                        (in-Company) trainingen en opleidingen. De vraag van de opdrachtgever staat
                        telkens centraal bij de invulling van het trainingsprogramma en
                        opleidingsdoelstellingen.
                    </p>
                </Fade>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
