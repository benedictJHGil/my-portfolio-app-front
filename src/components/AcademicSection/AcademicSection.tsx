import "./AcademicSection.page.css"
import AcademicItem from "../AcademicItem/AcademicItem";

interface Academic {
    id: number; 
    name: string; 
    startdate: string; 
    enddate: string | null; 
    major: string; 
    grade: string | null;
}

interface AcademicSectionProps {
    academics: Academic[]
}

function AcademicSection({ academics }: AcademicSectionProps) {
    return (
        <div className="academic-inner">
            <h2 className="section-title">
                학력
                <p className="final-academic">대학교(4년) 졸업</p>
            </h2>

            <div className="card-grid">
                {academics.map(academic => (
                    <AcademicItem key={academic.id} academic={academic} />
                ))}
            </div>
        </div>
    )
}

export default AcademicSection