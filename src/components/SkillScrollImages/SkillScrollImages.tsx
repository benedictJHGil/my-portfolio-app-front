"use client"

import React from "react";
import Image from "next/image";
import styles from "./SkillScrollImages.module.css";

interface SkillScrollImagesProps {
    images: string[];
    diraction?: 'left' | 'right';
    duration?: string;
}

const SkillScrollImages = ({
    images,
    diraction = 'left',
    duration = '60s',
}: SkillScrollImagesProps) => {
    const duplicatedImages = [...images, ...images];

    return (
        <div className={styles.wrapper}>
            <div className={styles['fade-left']} />
            <div className={styles['fade-right']} />

            <div
                className={`${styles['images-container']} ${diraction === 'left' ? styles['scroll-left'] : styles['scroll-right']}`}
                style={{ '--scroll-duration': duration } as React.CSSProperties}
            >
                {duplicatedImages.map((src, index) => (
                    <div key={index} className={styles['image-item']}>
                        <Image
                            src={src}
                            alt={`Slide Image ${index + 1}`}
                            width={150}
                            height={150}
                            objectFit="contain"
                            priority={index < images.length / 2}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillScrollImages;