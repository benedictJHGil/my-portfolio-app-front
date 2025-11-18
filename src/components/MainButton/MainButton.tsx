"use client"

import Button from "@/components/Button/Button"

function MainButton() {
    const mainPath = '/portfolio/main'

    return (
        <Button
            href={mainPath}
            className={"button main-btn"}
        >
            보러가기
        </Button>
    )
}

export default MainButton;