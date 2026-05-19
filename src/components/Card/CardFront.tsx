import { BusinessCardData } from "@/types/ui/about";
import { renderText } from "@/utils/renderText";
import { cx } from "@/utils/cx"
import styles from "./card.module.css";
import MyImage from "../MyImage/MyImage";

interface CardFrontProps {
  data: BusinessCardData;
}

export default function CardFront({ data }: CardFrontProps) {
    return (
        <div className={cx(styles, "face", "front")}>
            <div className={styles["card-outline"]}>
                <MyImage
                    src={"/images/card/outline_tl.png"}
                    alt={"outline-top-left"}
                    className={"card-outline-top-left"}
                    isClickable={true}
                    doChangeColor={true}
                />
                <MyImage
                    src={"/images/card/outline_rb.png"}
                    alt={"outline-right-bottom"}
                    className={"card-outline-right-bottom"}
                    isClickable={true}
                    doChangeColor={true}
                />
            </div>
            <div className={styles["profile-section"]}>
                <div className={styles["personal-image"]}>
                    <MyImage
                        src={"/images/personal_logo_remove_bg.png"}
                        alt={"유일한"}
                        className={"card-personal-image"}
                        isClickable={true}
                        doChangeColor={true}
                    />
                </div>
                <div className={styles["content-section"]}>
                    <div className={styles["name-section"]}>
                        <p className={styles["name-kr"]}>{data.name}</p>
                        {/*<p className={styles["name-en"]}>{data.nameEn}</p>*/}
                        <div className={styles["profile-image"]}>
                            <MyImage
                                src={"/images/page_loge.png"}
                                alt={"유일한 포트폴리오"}
                                className={"card-profile-image"}
                                isClickable={true}
                                doChangeColor={true}
                            />
                        </div>
                    </div>

                    <p className={styles["job-section"]}>{data.job}</p>
                    <p className={styles["summary-section"]}>
                        {renderText(data.introduction.intro, data.introduction.highlights, (word, key) => (
                            <span key={key} className={styles.highlight}>
                                {word}
                            </span>
                        ))}
                    </p>

                    <div className={styles["qr-section"]}>
                        <MyImage
                            src={"/images/card/qrcode.png"}
                            alt={"유일한 명함"}
                            className={"card-qr-image"}
                            isClickable={true}
                            doChangeColor={true}
                        />
                        <p className={styles["qr-label"]}>▶ ENTER SYSTEM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}