import styles from '@/styles/SplashScreen.module.css'
import Head from 'next/head'
import Image from 'next/image'

export function SplashScreen() {
    return (
        <>
            <Head>
                <title>Entering Teyvat...</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Wish_Impact_Icon.svg" />
            </Head>
            <div className={`${styles.splashMain} ${styles.splashFade}`}>
                <h1 className={styles.splashTitle}>
                    <Image src={"Wish_Impact_Icon.svg"} width={100} height={100} />
                    Wish Impact
                    <Image src={"Wish_Impact_Icon.svg"} width={100} height={100} /></h1>
                <h2 className={styles.splashDescription}>Entering Teyvat soon...</h2>
            </div>
        </>
    )
}
