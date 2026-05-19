import styles from "./CertificateItem.module.css"
import { UiCertificate } from "@/types/ui/about"

interface CertificateItemProps {
    certificate: UiCertificate
}

function CertificateItem({ certificate }: CertificateItemProps) {
    // const isLevel = !!certificate.level;
    // const isScore = !!certificate.score;

    return (
        <>
        {/* <div className={styles["certificate-item"]}> */}
            {/* <div className={styles["certificate-item__date"]}>
                {certificate.date}
            </div> */}
            <p className={styles["certificate-item__name"]}>{certificate.name}</p>
            {/* <p className={styles["certificate-item-mid"]}>
                {isLevel && (
                    <span className={styles["certificate-item__level"]}>{certificate.level}{' / '}</span>
                )}
                {isScore && (
                    <span className={styles["certificate-item__score"]}>{certificate.score}{'점'}{' / '}</span>
                )}                
                <span className={styles["certificate-item__evaluate"]}>{certificate.evaluate}</span>
            </p>
            <p className={styles["certificate-item__organization"]}>{certificate.organization}</p> */}
        {/* </div> */}
        </>
    )
}

export default CertificateItem