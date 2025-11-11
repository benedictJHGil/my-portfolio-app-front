"use client"

import styles from './MainMenu.module.css'
import MyImage from "../MyImage/MyImage";
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai'

interface MenuProps {
    onClose?: () => void;
}

function MainMenu({onClose}: MenuProps) {
    const currentPath = usePathname();

    const mainPath = '/portfolio/main'
    const aboutPath = '/portfolio/about'

    const isMainActive = currentPath === mainPath
    const isAboutActive = currentPath === aboutPath

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <button
                    className={styles["close-button"]}
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <AiOutlineClose />
                </button>
                <MyImage
                    src={"/images/personal_logo.png"}
                    alt={"유일한"}
                    width={70} 
                    height={70}
                    className={"personal-logo"}
                    isClickable={false}
                />
                <div className={styles.profile}>
                    <p>길 재 형</p>
                    <p>(uniquehan)</p>
                </div>
                <Button 
                    href={mainPath} 
                    isActive={isMainActive}
                    className={"nav-button"}
                >
                    Main
                </Button>
                <Button 
                    href={aboutPath}
                    isActive={isAboutActive}
                    className={"nav-button"}
                >
                    About
                </Button>
            </div>
        </div>
    )
}

export default MainMenu