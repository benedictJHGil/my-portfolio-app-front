import "./CareerSection.page.css"
import CareerItem from "../CareerItem/CareerItem";

interface Career {
    id: number; 
    name: string; 
    startdate: string; 
    enddate: string | null; 
    duration: string; 
    reason: string; 
    department: string; 
    rank: string; 
    work: string; 
    pay: string; 
    location: string; 
    task: string; 
    dev_env: string[]; 
    content: string;
}

interface CareerSectionProps {
  total: string;
  careers: Career[];
}

function CareerSection( { total, careers }: CareerSectionProps) {
    return (
        <div className="career-inner">
            <h2 className="section-title">
                경력
                <p className="total-duration">총 {total}</p>
            </h2>
            
            <div className="career-grid">
                {careers.map(career => (
                    <CareerItem key={career.id} career={career} />
                ))}
            </div>
        </div>
    )
}

export default CareerSection