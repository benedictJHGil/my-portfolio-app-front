"use client"

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from './Header.module.css';
import MyImage from "../MyImage/MyImage";
import MainMenu from "../MainMenu/MainMenu";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const currentPath = usePathname();

    const isMenuAvailable = currentPath === '/portfolio/main' || currentPath === '/portfolio/about';

    // main, about 페이지일 때
    useEffect(() => {
        setIsOpen(isMenuAvailable)
    }, [isMenuAvailable])
    
    const handleLogoClick = () => {
        setIsOpen(true);
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["page-logo"]}>
                <Link href="/portfolio/home">
                    <MyImage
                        src={"/images/page_loge.png"}
                        alt={"유일한 포트폴리오"}
                        fill
                        className={"page-logo-image"}
                        isClickable={true}
                    />
                </Link>
            </div>
            <div onClick={handleLogoClick}>
                {!isOpen && (
                    <MyImage 
                        src={"/images/personal_logo.png"}
                        alt={"유일한"}
                        fill
                        className={"personal-logo-image-wrap"}
                        isClickable={true}
                    />
                )}
            </div>

            {isOpen && (
                <MainMenu onClose={() => setIsOpen(false)} />
            )}
        </header>
    )
}

export default Header;