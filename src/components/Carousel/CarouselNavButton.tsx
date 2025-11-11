import React from 'react'
import styles from './Carousel.module.css'
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  side: 'left' | 'right'
  onClick?: () => void
  disabled?: boolean
  hidden?: boolean
}

function CarouselNavButton({ side, disabled, hidden, ...rest }: Props) {
    return (
        <button
            type="button"
            className={`${styles["nav-button"]} ${side === 'left' ? styles["nav-left"] : styles["nav-right"]}${hidden ? " " + styles["hidden"] : ""}`}
            aria-label={side === 'left' ? '이전 항목' : '다음 항목'}
            disabled={disabled}
            aria-hidden={hidden || undefined}
            tabIndex={hidden ? -1 : 0}
            {...rest}
        >
            {side === 'left' ? 
                <IoChevronBack className={styles["arrow-icon"]} /> 
                : <IoChevronForward className={styles["arrow-icon"]} />}
        </button>
    )
}

export default CarouselNavButton