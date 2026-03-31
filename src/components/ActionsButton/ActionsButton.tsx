'use client'

import styles from './ActionsButton.module.css'
import Button from "../Button";

type DetailActions = {
    github?: string | null
    site?: string | null
    extra?: { label: string; url: string }[]
}

interface ActionsButtonProps {
    actions?: DetailActions
}

function ActionsButton({ actions }: ActionsButtonProps) {
    const hasAnyAction =
        !!(actions?.github && actions.github.trim()) ||
        !!(actions?.site && actions.site.trim()) ||
        !!(actions?.extra && actions.extra.length > 0)

    return (
        <>
            {hasAnyAction && (
                <div className={styles["actions"]} role="group" aria-label="프로젝트 링크">
                    {actions?.github && actions.github.trim() && (
                        <Button
                            href={actions.github}
                            className={"button is-img"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img"}}
                        >
                            GitHub
                        </Button>
                    )}
                    {actions?.site && actions.site.trim() && (
                        <Button
                            href={actions.site}
                            className={"button is-img"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/link.png", alt: "link", imgClassName: "btn-img"}}
                        >
                            Link
                        </Button>
                    )}
                    {actions?.extra?.map((x) => (
                        <Button
                            key={x.url}
                            href={x.url}
                            className={"button is-img"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img"}}
                        >
                            {x.label}
                        </Button>
                    ))}
                </div>
            )}
        </>
    )
}

export default ActionsButton