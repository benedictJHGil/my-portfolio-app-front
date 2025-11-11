"use client"

import Image from "next/image";
import styles from './MyImage.module.css';

interface MyImageData {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    isClickable?: boolean
}

function MyImage({src, alt, width, height, className, isClickable}: MyImageData) {

    const cursorStyle = isClickable ? "pointer" : "default"

    return (
        <div className={styles[`${className}`]} style={{cursor: cursorStyle}}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
            />
        </div>
    )
}

export default MyImage