"use client"

import Image from "next/image";
import styles from './MyImage.module.css';
import { withCdn } from '@/utils/cdn'
import MyIcon from "../MyIcon/MyIcon";

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
    hasIcon?: boolean
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
    hasIcon
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
                    src={withCdn(src)}
                    alt={alt}
                    fill
                    style={{objectFit}}
                    priority={priority}
                />
            </div>
        )
    }

    if (hasIcon) {
        return (
            <div className={myImageStyle} style={{cursor: cursorStyle}}>
                <MyIcon
                    src={withCdn(src)}
                />
            </div>
        )
    }

    return (
        <div className={myImageStyle} style={{cursor: cursorStyle}}>
            <Image
                src={withCdn(src)}
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