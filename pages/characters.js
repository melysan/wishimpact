import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Character.module.css'
import record from '../data/genshin_characters.json'
import { useState, useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'


export default function Characters() {
    const [number, setNumber] = useState(1890);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumber(number + 90);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [number]);

    return (
        <>
            <Head>
                <title>Wish Impact Characters</title>
                <meta name="description" content="View All Genshin Characters" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Wish_Impact_Icon.svg" />
            </Head>
            <NavBar />
            <div>
                <div id="primogemCounter" className={styles.charPrimogems}><b>Primogems:</b> {number}</div>
                <div className={styles.charMain}>
                    <h1 className={styles.charTitle}>
                        <Image src={"Wish_Impact_Icon.svg"} width={25} height={25} />
                        Wish Impact Characters
                        <Image src={"Wish_Impact_Icon.svg"} width={25} height={25} />
                    </h1>

                    <h2 id="pyroElement" className={styles.elementTitle}>Pyro</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Pyro" ? <div className={styles.charPyro} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>
                    <h2 id="hydroElement" className={styles.elementTitle}>Hydro</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Hydro" ? <div className={styles.charHydro} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>

                    <h2 id="anemoElement" className={styles.elementTitle}>Anemo</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Anemo" ? <div className={styles.charAnemo} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>

                    <h2 id="electroElement" className={styles.elementTitle}>Electro</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Electro" ? <div className={styles.charElectro} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>

                    <h2 id="cryoElement" className={styles.elementTitle}>Cryo</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Cryo" ? <div className={styles.charCryo} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>

                    <h2 id="geoElement" className={styles.elementTitle}>Geo</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Geo" ? <div className={styles.charGeo} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>

                    <h2 id="dendroElement" className={styles.elementTitle}>Dendro</h2>
                    <div className={styles.charElements}>
                        {
                            record.map((rec, index) => {
                                return (
                                    <>
                                        <>{rec.vision == "Dendro" ? <div className={styles.charDendro} key={index}>
                                            <div className={styles.charText}>{rec.character_name}</div>
                                            <div className={styles.charRarity}>{rec.rarity}*</div>
                                            <Image src={rec.image_url} width={100} height={100} />
                                        </div> : <></>}</>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
