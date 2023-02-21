import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'


export function NavBar() {
    return (
        <>
            <ul className={styles.navBarCont}>
                <Link className={styles.navLink} href="/characters">View Characters</Link>
                <Link className={styles.navLink} href="/">Home</Link>
                <Image className={styles.navIcon} src={"Wish_Impact_Icon.svg"} width={50} height={50} />
            </ul>
        </>
    )
}


