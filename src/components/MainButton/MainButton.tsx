"use client"

import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import styles from "./MainButton.module.css"

function MainButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/portfolio/main");
    }

    return (
        <Button
            className={styles['main-btn']}
            onClick={handleClick}
        >
            보러가기
        </Button>
    )
}

export default MainButton;