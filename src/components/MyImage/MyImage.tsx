"use client"

import Image from "next/image";
import styles from './MyImage.module.css';

interface MyImageData {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    priority?: boolean;
    className?: string
    isClickable?: boolean
}

function MyImage({
    src, 
    alt, 
    width, 
    height, 
    fill, 
    objectFit="cover", 
    priority=false, 
    className, 
    isClickable,
}: MyImageData) {

    const classNameTrim = className?.trim().split(" ")
    const myImageStyle = classNameTrim?.map(c => styles[c] ?? c)
        .filter(Boolean)
        .join(" ")

    const cursorStyle = isClickable ? "pointer" : "default"

    if (fill) {
        return (
            <div className={myImageStyle} style={{cursor: cursorStyle}}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{objectFit}}
                    priority={priority}
                />
            </div>
        )
    }

    return (
        <div className={myImageStyle} style={{cursor: cursorStyle}}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{objectFit}}
                priority={priority}
            />
        </div>
    )
}

export default MyImage