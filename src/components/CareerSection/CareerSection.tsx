import { cx } from '@/utils/cx'
import styles from "./CareerSection.module.css"
import { UiCareer } from '@/types/ui/about';
import CareerItem from "../CareerItem/CareerItem";

interface CareerSectionProps {
    total: string;
    careers: UiCareer[];
}

function CareerSection( { careers }: CareerSectionProps) {
    return (
        <div className={cx(styles, "career-inner")}>
            <h2 className={cx(styles, "section-title")}>
                경력
                {/* <p className="total-duration">총 {total}</p> */}
            </h2>
            
            <div className={cx(styles, "grid", "career-grid")}>
                {careers.map(career => (
                    <CareerItem key={career.id} career={career} />
                ))}
            </div>
        </div>
    )
}

export default CareerSection