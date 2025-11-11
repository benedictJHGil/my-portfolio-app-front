import styles from "./CertificateItem.module.css"

interface Certificate {
    id: number; 
    name: string; 
    organization: string; 
    date: string; 
    level: string | null; 
    score: number | null; 
    evaluate: string;
}

interface CertificateItemProps {
    certificate: Certificate
}

function CertificateItem({ certificate }: CertificateItemProps) {
    const isLevel = !!certificate.level;
    const isScore = !!certificate.score;

    return (
        <div className={styles["certificate-item"]}>
            <div className="certificate-item__date">
                {certificate.date}
            </div>
            <p className={styles["certificate-item__name"]}>{certificate.name}</p>
            <p className={styles["certificate-item-mid"]}>
                {isLevel && (
                    <span className={styles["certificate-item__level"]}>{certificate.level}{' / '}</span>
                )}
                {isScore && (
                    <span className={styles["certificate-item__score"]}>{certificate.score}{'점'}{' / '}</span>
                )}                
                <span className={styles["certificate-item__evaluate"]}>{certificate.evaluate}</span>
            </p>
            <p className="certificate-item__organization">{certificate.organization}</p>
        </div>
    )
}

export default CertificateItem