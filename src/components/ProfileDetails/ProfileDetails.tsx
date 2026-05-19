import { UiProfile } from "@/types/ui/about"; 
import { renderText } from "@/utils/renderText";
import styles from "./ProfileDetails.module.css"
import Button from "../Button";
import MyImage from "../MyImage/MyImage";

interface ProfileDetailsProps {
    profile: UiProfile;
}

function ProfileDetails({ profile }: ProfileDetailsProps) {
    try {
        return (
            <div className={styles["profile-container"]}>
                <div className={styles["profile-inner"]}>
                    <section className={styles["profile-header-section"]}>
                        <MyImage 
                            src={"/images/about/profile.jpg"}
                            alt={"유일한"}
                            fill
                            className={"profile-image-wrap"}
                            isClickable={false}
                        />
                    </section>

                    <section className={styles["profile-details-section"]}>
                        <div className={styles["profile-item-group"]}>
                            <p className={styles["detail-item"]}>{profile.nameKr}</p>
                            <p className={styles["detail-item"]}>{profile.job}</p>
                            {profile.introduction && (
                                <p className={styles["detail-item"]}>
                                    {renderText(profile.introduction.intro, profile.introduction.highlights, (word, key) => (
                                        <span key={key} className={styles.highlight}>
                                            {word}
                                        </span>
                                    ))}
                                </p>
                            )}
                        </div>
                        <div className={styles["profile-button-group"]}>
                            <div className={styles["profile-buttons"]}>
                                {/* <Button
                                    href={profile.email ? `mailto:${profile.email}` : undefined}
                                    className={"button has-icon is-reverse"}
                                    rel={"noopener noreferrer"}
                                    image={{src: "/images/icon/email.png", alt: "Email", imgClassName: "btn-img", doChangeColor: true}}
                                >
                                    Email
                                </Button> */}
                                <Button
                                    href={profile.github ? profile.github : "#"}
                                    className={"button has-icon is-reverse"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                    image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img", doChangeColor: true}}
                                >
                                    GitHub
                                </Button>
                            </div>
                            <div className={styles["portfolio-button"]}>
                                <Button
                                    href={"/portfolio"}
                                    className={"button cta-button has-icon"}
                                    target={"_self"}
                                    rel={"noopener noreferrer"}
                                    image={{src: "/images/icon/arrow.png", alt: "arrow", imgClassName: "btn-img", doChangeColor: true}}
                                >
                                    포트폴리오 바로가기
                                </Button>
                            </div>
                        </div>
                        
                    </section>
                </div>

                <div className={styles["profile-summary-section"]}>
                    <h2 className="section-title">한눈에 보기</h2>
                    {profile.introduction && profile.introduction.summary.length > 0 && (
                        <div className={styles["profile-summary"]}>
                            {profile.introduction.summary.map((item, i) => (
                                <div key={i} className={styles["summary-card"]}>
                                    <p className={styles["summary"]}>{item}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    } catch(error) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        return <h1>{msg}</h1>;
    }
}

export default ProfileDetails