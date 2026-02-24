"use client"

import { useState } from "react";
import "./ProfileDetails.page.css"
import Button from "../Button";
import ContactModal from "../ContactModal/ContactModal";
import MyImage from "../MyImage/MyImage";

interface Profile {
    id: number; 
    nameKr: string; 
    nameEn: string; 
    nickname?: string; 
    birthdate?: string; 
    phoneNumber?: string; 
    email?: string; 
    github?: string; 
    blog?: string; 
    youtube?: string;
}

interface ProfileDetailsProps {
    profile: Profile;
}

function ProfileDetails({ profile }: ProfileDetailsProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (msg: string) => {
        setMessage(msg);
        setModalOpen(true);
    };

    try {
        return (
        <div className="profile-inner">
            <section className="profile-header-section">
                <MyImage 
                    src={"/images/icon/profile.jpg"}
                    alt={"유일한"}
                    fill
                    className={"profile-image-wrap"}
                    isClickable={false}
                />
                <div className="social-links-group">
                    <Button
                        href={profile.github ? profile.github : "#"}
                        className={"button is-img"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img"}}
                    >
                        GitHub
                    </Button>
                    <Button
                        type={"button"}
                        className={"button is-img"}
                        onClick={() => openModal("Blog는 현재 준비중입니다.")}
                        image={{src: "/images/icon/blog.png", alt: "Blog", imgClassName: "btn-img"}}
                    >
                        Blog
                    </Button>
                    <Button
                        type={"button"}
                        className={"button is-img"}
                        onClick={() => openModal("YouTube는 현재 준비중입니다.")}
                        image={{src: "/images/icon/youtube.png", alt: "YouTube", imgClassName: "btn-img"}}
                    >
                        YouTube
                    </Button>
                </div>
            </section>

            {modalOpen && (
                <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
                    <div className="modal ready" onClick={(e) => e.stopPropagation()}>
                        <p>{message}</p>
                        <button className="modal-close ready" onClick={() => setModalOpen(false)}>확인</button>
                    </div>
                </div>
            )}

            <section className="profile-details-section">
                <p className="detail-item">{profile.nameKr}</p>
                <p className="detail-item">{profile.birthdate}</p>
                {/* <p className="detail-item">{profile.phoneNumber}</p> */}
                <div className="email-group">
                    <p className="detail-item">{profile.email}</p>
                    <Button
                        type={"button"}
                        className={"button is-img"}
                        onClick={() => setIsModalOpen(true)}
                        image={{src: "/images/icon/contact.png", alt: "Contact", imgClassName: "btn-img"}}
                    >
                        Contact
                    </Button>
                </div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
    } catch(error) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        return <h1>{msg}</h1>;
    }
}

export default ProfileDetails