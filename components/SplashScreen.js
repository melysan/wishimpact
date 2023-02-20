import styles from '@/styles/SplashScreen.module.css'

export function SplashScreen() {
    return (
        <>
            <div className={`${styles.splashMain} ${styles.splashFade}`}>
                <h1 className={styles.splashTitle}>✨ Wish Impact ✨</h1>
                <h2 className={styles.splashDescription}>Entering Teyvat soon...</h2>
            </div>
        </>
    )
}
