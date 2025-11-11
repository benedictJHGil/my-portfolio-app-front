import CertificateItem from "../CertificateItem/CertificateItem";

interface Certificate {
    id: number; 
    name: string; 
    organization: string; 
    date: string; 
    level: string | null; 
    score: number | null; 
    evaluate: string;
}

interface CertificateSectionProps {
    certificates: Certificate[]
}

function CertificateSection({ certificates }: CertificateSectionProps) {
    return (
        <div className="certificate-inner">
            <h2 className="section-title">자격</h2>

            <div className="card-grid">
                {certificates.map(certificate => (
                    <CertificateItem key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </div>
    )    
}

export default CertificateSection