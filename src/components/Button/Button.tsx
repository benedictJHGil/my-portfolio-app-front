"use client"

import Link, { type LinkProps } from 'next/link';
import MyImage from "../MyImage/MyImage";
import styles from './Button.module.css';

interface ButtonProps {
    href?: LinkProps['href']
    isActive?: boolean
    children: React.ReactNode
    onClick?: () => void
    className?: string
    target?: "_blank" | "_self" | "_parent" | "_top"
    rel?: string 
    type?: "button" | "submit" | "reset"
    image?: {
        src: string
        alt: string
        width?: number
        height?: number
        fill?: boolean
        imgClassName?: string
        isClickable?: boolean
    }
}

function Button({
    href, 
    isActive, 
    children, 
    onClick, 
    className, 
    target, 
    rel,
    type,
    image
}: ButtonProps) {
    const {
        src = "",
        alt = "",
        fill = true,
        imgClassName = "",
        isClickable = true
    } = image ?? {};

    const classNameTrim = className?.trim().split(" ")
    const buttonStyle = classNameTrim?.map(c => styles[c] ?? c)
        .filter(Boolean)
        .join(" ")
    
    const buttonClasses = `${buttonStyle}${isActive ? ' ' + styles.active : ''}`;

    const imgClassNameTrim = imgClassName?.trim().split(" ")
    const imgStyle = imgClassNameTrim?.map(c => styles[c] ?? c)
        .filter(Boolean)
        .join(" ")

    const imgClasses = `${imgStyle}`;

    if (href) {
        return (
            <Link 
                href={href}
                className={buttonClasses}
                onClick={onClick}
                target={target}
                rel={rel}
            >
                {src && (
                    <MyImage 
                        src={src}
                        alt={alt}
                        fill={fill}
                        className={imgClasses}
                        isClickable={isClickable}
                    />
                )}
                {children}
            </Link>
        )
    }

    return (
        <button 
            type={type} 
            className={buttonClasses} 
            onClick={onClick}
        >
            {src && (
                <MyImage 
                    src={src}
                    alt={alt}
                    fill={fill}
                    className={imgClasses}
                    isClickable={isClickable}
                />
            )}
            {children}
        </button>
    )
}

export default Button;