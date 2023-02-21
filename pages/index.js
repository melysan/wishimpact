import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import record from '../data/genshin_characters.json'
import { useState, useEffect } from 'react'
import { SplashScreen } from '@/components/SplashScreen'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'


export default function Home() {
  const [randomChar, setRandomChar] = useState(0)

  const giveRandomCharacter = () => {
    const randomChar = Math.floor(Math.random() * record.length);
    setRandomChar(randomChar)

    let wishReveal = document.getElementById("charDiv");
    wishReveal.style.display = "block"
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (<SplashScreen />);
  }

  return (
    <>
      <Head>
        <title>Wish Impact</title>
        <meta name="description" content="Make A Wish to See Genshin Character" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Wish_Impact_Icon.svg" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div>
          <h1 className={styles.mainTitle}>
            <Image src={"Wish_Impact_Logo.svg"} width={1000} height={100} ></Image></h1>

          <div className={styles.wishContainer}>
            <div id="charDiv" style={{ display: "none" }}>
              <div className={styles.wishCharacterName}>You got {record[randomChar].character_name}!</div>
              <Image className={styles.wishCharacterImage} src={record[randomChar].image_url} width={400} height={400}></Image>
            </div>
          </div>
        </div>
        <button id="gacha" className={styles.buttonStyle} onClick={giveRandomCharacter}>Make a Wish!</button>

      </main>
      <Footer />
    </>
  )
}
