import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'


export function NavBar() {
    return (
        <>
            <ul className={styles.navBarCont}>
                <Link className={styles.navLink} href="/characters">View Characters</Link>
                <Link className={styles.navLink} href="/">Home</Link>
            </ul>
        </>
    )
}


