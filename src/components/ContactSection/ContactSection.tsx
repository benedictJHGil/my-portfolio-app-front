"use client"

import { useState, useEffect } from "react";
import {cx} from '@/utils/cx'
import styles from './ContactSection.module.css'
import {UiContact} from "@/types/ui/about";
import ContactModal from "../ContactModal/ContactModal";
import Button from "../Button";
import {withCdn} from "@/utils/cdn";
import Portal from "../Portal/Portal";

interface ContactSectionProps {
    contact: UiContact;
    isCard?: boolean;
}

function ContactSection({ contact, isCard }: ContactSectionProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    const openModal = (msg: string) => {
        setMessage(msg);
        setModalOpen(true);
    };

    const [toast, setToast] = useState<string | null>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            setIsMobileDevice(mobileCheck);
        }
    }, []);

    const copyEmail = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.stopPropagation()

        await navigator.clipboard.writeText(`${contact.email}`)

        if (!isMobileDevice) {
            setToast("이메일이 복사되었습니다")
            setTimeout(() => setToast(null), 2000)
        }
    }

    return (
        <div className={cx(styles, "contact-inner")}>
            <h2 className={cx(styles, "section-title", `${isCard ? "is-hidden" : ""}`)}>프로필 & 링크</h2>
            <div className={cx(styles, "grid", "contact-grid")}>
                <div className={cx(styles, "contact-info", `${isCard ? "card-contact-info" : ""}`)}>
                    <div className={cx(styles, "info-row")}>
                        <p className={cx(styles, "info", `${isCard ? "is-no-bullet-mark" : ""}`)}>{contact.email}</p>
                        <div className={cx(styles, "info-actions", `${isCard ? "is-small-gap" : ""}`)}>
                            <Button 
                                type={"button"}
                                className={`button oriented ${isCard ? "" : "is-reverse"} card-no-text-button ${isCard ? "card-oriented" : ""}`}
                                onClick={copyEmail}
                                rel={"noopener noreferrer"}
                                image={{src: "/images/icon/copy.png", alt: "Copy", imgClassName: "btn-img card-btn-img", doChangeColor: true}}
                            >
                                복사
                            </Button>
                            <Button
                                href={contact.email ? `mailto:${contact.email}` : undefined}
                                type={"button"}
                                className={`button oriented ${isCard ? "" : "is-reverse"} card-no-text-button ${isCard ? "card-oriented" : ""}`}
                                onClick={(e) => e.stopPropagation()}
                                rel={"noopener noreferrer"}
                                image={{src: "/images/icon/email.png", alt: "Email", imgClassName: "btn-img card-btn-img", doChangeColor: true}}
                            >
                                이메일
                            </Button>
                        </div>
                    </div>
                    
                    <div className={styles["info-row"]}>
                        <p className={cx(styles, "info", `${isCard ? "is-no-bullet-mark" : ""}`)}>{contact.phoneNumber}</p>
                        <div className={cx(styles, "info-actions", `${isCard ? "is-small-gap" : ""}`)}>
                            <Button
                                href={contact.phoneNumber ? `tel:${contact.phoneNumber.replace(/[^0-9]/g, "")}` : undefined}
                                type={"button"}
                                className={`button oriented ${isCard ? "" : "is-reverse"} card-no-text-button ${isCard ? "card-oriented" : ""} ${isCard && isMobileDevice ? "" : "is-hidden"}`}
                                onClick={(e) => e.stopPropagation()}
                                rel={"noopener noreferrer"}
                                image={{src: "/images/icon/phone.png", alt: "Phone", imgClassName: "btn-img card-btn-img", doChangeColor: true}}
                            >
                                전화 걸기
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx(styles, "contact-actions", `${isCard ? "card-contact-section" : ""}`)}>
                    <Button
                        type={"button"}
                        className={`button cta-button cta-sub-style ${isCard ? "card-cta-sub-style" : ""} has-icon ${isCard ? "card-cta-button" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsModalOpen(true)
                        }}
                        image={{src: "/images/icon/contact.png", alt: "Contact", imgClassName: "btn-img", doChangeColor: true}}
                    >
                        문의하기
                    </Button>
                    <div className={styles["links-group"]}>
                        <Button
                            href={contact.github ? contact.github : "#"}
                            className={`button has-icon is-reverse ${isCard ? "card-no-text-button" : ""}`}
                            onClick={(e) => e.stopPropagation()}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img", doChangeColor: true}}
                        >
                            GitHub
                        </Button>
                        <Button
                            type={"button"}
                            className={`button has-icon is-reverse ${isCard ? "card-no-text-button" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                openModal("Blog는 현재 준비중입니다.")
                            }}
                            image={{src: "/images/icon/blog.png", alt: "Blog", imgClassName: "btn-img", doChangeColor: true}}
                        >
                            Blog
                        </Button>
                        <Button
                            type={"button"}
                            className={`button has-icon is-reverse ${isCard ? "card-no-text-button" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                openModal("YouTube는 현재 준비중입니다.")
                            }}
                            image={{src: "/images/icon/youtube.png", alt: "YouTube", imgClassName: "btn-img", doChangeColor: true}}
                        >
                            YouTube
                        </Button>
                        <Button
                            href={contact.resume ? withCdn(contact.resume) : "#"}
                            className={`button has-icon is-reverse ${isCard ? "is-hidden" : ""}`}
                            onClick={(e) => e.stopPropagation()}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            image={{src: "/images/icon/resume.png", alt: "Resume", imgClassName: "btn-img", doChangeColor: true}}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                
                <Portal>
                    {modalOpen && (
                        <div className={cx(styles, "modal-backdrop")} onClick={() => setModalOpen(false)}>
                            <div className={cx(styles, "modal", "modal-ready")} onClick={(e) => e.stopPropagation()}>
                                <p>{message}</p>
                                <button className={cx(styles, "modal-close", "modal-close-ready")} onClick={() => setModalOpen(false)}>확인</button>
                            </div>
                        </div>
                    )}

                    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </Portal>

                {toast && <div className={styles["toast"]}>{toast}</div>}
            </div>
        </div>
    )
}

export default ContactSection