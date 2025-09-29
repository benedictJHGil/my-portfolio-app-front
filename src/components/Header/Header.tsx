import Image from "next/image";
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.page_logo}>
                <Image
                    src="/images/page_loge.png"
                    alt="유일한 포트폴리오"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className={styles.personal_logo}>
                <Image
                    src="/images/personal_logo.png"
                    alt="유일한"
                    width={60}
                    height={60}
                    priority
                />
            </div>
        </header>
    )
}

export default Header;