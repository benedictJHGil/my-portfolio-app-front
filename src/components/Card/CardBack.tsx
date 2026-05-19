import { BusinessCardData } from "@/types/ui/about";
import { cx } from "@/utils/cx"
import styles from "./card.module.css";
import MyImage from "@/components/MyImage/MyImage";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection/ContactSection";

interface CardBackProps {
  data: BusinessCardData;
}

export default function CardBack({ data }: CardBackProps) {
    return (
        <div className={cx(styles, "face", "back")}>
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
                <div className={styles["contact-section"]}>
                    <ContactSection contact={data.contact} isCard={true} />
                </div>

                <div className={styles["main-button-section"]}>
                    <Button
                        href={"/portfolio"}
                        className={"button cta-button has-icon card-cta-button is-wide"}
                        onClick={(e) => {e.stopPropagation()}}
                        target={"_self"}
                        rel={"noopener noreferrer"}
                        image={{src: "/images/icon/arrow.png", alt: "arrow", imgClassName: "btn-img", doChangeColor: true}}
                    >
                        포트폴리오 바로가기
                    </Button>
                    <Button
                        href={"/about"}
                        className={"button cta-button has-icon card-cta-button is-wide"}
                        onClick={(e) => {e.stopPropagation()}}
                        target={"_self"}
                        rel={"noopener noreferrer"}
                        image={{src: "/images/icon/arrow.png", alt: "arrow", imgClassName: "btn-img", doChangeColor: true}}
                    >
                        프로필 바로가기
                    </Button>
                </div>
            </div>
        </div>
    )
}