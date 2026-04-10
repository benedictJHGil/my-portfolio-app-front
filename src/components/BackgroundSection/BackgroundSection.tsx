import { cx } from '@/utils/cx'
import styles from './BackgroundSection.module.css'
import AcademicItem from '../AcademicItem/AcademicItem';
import CertificateItem from '../CertificateItem/CertificateItem';

interface Academic {
    id: number; 
    name: string; 
    startdate: string; 
    enddate: string | null; 
    major: string; 
    grade: string | null;
    isFinal: boolean; 
}

interface Certificate {
    id: number; 
    name: string; 
    organization: string; 
    date: string; 
    level: string | null; 
    score: number | null; 
    evaluate: string;
}

interface BackgroundSectionProps {
    academics: Academic[]
    certificates: Certificate[]
}


function BackgroundSection({ academics, certificates }: BackgroundSectionProps) {
    return (
        <div className={cx(styles, "background-inner")}>
            <div className={styles["academic-section"]}>
                <h2 className={cx(styles, "section-title")}>학력</h2>
                <div className={cx(styles, "background-grid", "left")}>
                    {academics.map(academic => (
                        academic.isFinal && <AcademicItem key={academic.id} academic={academic} />
                    ))}
                </div>
            </div>

            <div className={styles["certificate-section"]}>
                <h2 className={cx(styles, "section-title")}>자격</h2>
                <div className={cx(styles, "background-grid", "right")}>
                    {certificates.map(certificate => (
                        <CertificateItem key={certificate.id} certificate={certificate} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BackgroundSection