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
        imgClassName?: string
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
    const classNameTrim = className?.trim().split(" ")
    const buttonStyle = classNameTrim?.map(c => styles[c] ?? c)
        .filter(Boolean)
        .join(" ")
    
    const buttonClasses = `${buttonStyle}${isActive ? ' ' + styles.active : ''}`;

    const {
        src = "",
        alt = "",
        width = 30,
        height = 30,
        imgClassName = ""
    } = image ?? {};

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
                        width={width}
                        height={height}
                        className={imgClassName}
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
                    width={width}
                    height={height}
                    className={imgClassName}
                />
            )}
            {children}
        </button>
    )
}

export default Button;