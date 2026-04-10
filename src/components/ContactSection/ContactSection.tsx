"use client"

import { useState } from "react";
import { cx } from '@/utils/cx'
import styles from './ContactSection.module.css'
import ContactModal from "../ContactModal/ContactModal";
import Button from "../Button";

interface Contact {
    id: number; 
    phoneNumber?: string; 
    email?: string;
    resume?: string;
    github?: string; 
    blog?: string; 
    youtube?: string;
}

interface ContactSectionProps {
    contact: Contact;
}

function ContactSection({ contact }: ContactSectionProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (msg: string) => {
        setMessage(msg);
        setModalOpen(true);
    };

    const [toast, setToast] = useState<string | null>(null)

    const isMobile = typeof window !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    const copyEmail = async () => {
        await navigator.clipboard.writeText(`${contact.email}`)

        if (!isMobile) {
            setToast("이메일이 복사되었습니다")
            setTimeout(() => setToast(null), 2000)
        }
    }

    return (
        <div className={cx(styles, "contact-inner")}>
            <h2 className={cx(styles, "section-title")}>프로필 & 링크</h2>
            <div className={cx(styles, "grid", "contact-grid")}>
                <div className={styles["contact-info"]}>
                    <div className={styles["info-row"]}>
                        <p className={styles["info"]}>{contact.email}</p>
                        <div className={styles["info-actions"]}>
                            <Button 
                                type={"button"}
                                className={"button oriented is-reverse"}
                                onClick={copyEmail}
                                rel={"noopener noreferrer"}
                            >
                                복사
                            </Button>
                            <Button
                                href={contact.email ? `mailto:${contact.email}` : undefined}
                                type={"button"}
                                className={"button oriented is-reverse"}
                                rel={"noopener noreferrer"}
                            >
                                이메일
                            </Button>
                        </div>
                    </div>
                    
                    <div className={styles["info-row"]}>
                        <p className={styles["info"]}>{contact.phoneNumber}</p>
                    </div>
                </div>

                <div className={styles["contact-actions"]}>
                    <Button
                        type={"button"}
                        className={"button cta-button cta-sub-style has-icon"}
                        onClick={() => setIsModalOpen(true)}
                        image={{src: "/images/icon/contact.png", alt: "Contact", imgClassName: "btn-img", hasIcon: true}}
                    >
                        메시지 보내기
                    </Button>
                    <div className={styles["links-group"]}>
                        <Button
                            href={contact.github ? contact.github : "#"}
                            className={"button has-icon is-reverse"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img", hasIcon: true}}
                        >
                            GitHub
                        </Button>
                        <Button
                            type={"button"}
                            className={"button has-icon is-reverse"}
                            onClick={() => openModal("Blog는 현재 준비중입니다.")}
                            image={{src: "/images/icon/blog.png", alt: "Blog", imgClassName: "btn-img", hasIcon: true}}
                        >
                            Blog
                        </Button>
                        <Button
                            type={"button"}
                            className={"button has-icon is-reverse"}
                            onClick={() => openModal("YouTube는 현재 준비중입니다.")}
                            image={{src: "/images/icon/youtube.png", alt: "YouTube", imgClassName: "btn-img", hasIcon: true}}
                        >
                            YouTube
                        </Button>
                        <Button
                            href={contact.resume ? contact.resume : "#"}
                            className={"button has-icon is-reverse"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/resume.png", alt: "Resume", imgClassName: "btn-img", hasIcon: true}}
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                {modalOpen && (
                    <div className={cx(styles, "modal-backdrop")} onClick={() => setModalOpen(false)}>
                        <div className={cx(styles, "modal", "modal-ready")} onClick={(e) => e.stopPropagation()}>
                            <p>{message}</p>
                            <button className={cx(styles, "modal-close", "modal-close-ready")} onClick={() => setModalOpen(false)}>확인</button>
                        </div>
                    </div>
                )}

                <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                {toast && <div className={styles["toast"]}>{toast}</div>}
            </div>
        </div>
    )
}

export default ContactSection