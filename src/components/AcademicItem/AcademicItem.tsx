import styles from "./AcademicItem.module.css";

interface Academic {
    id: number; 
    name: string; 
    startdate: string; 
    enddate: string | null; 
    major: string; 
    grade: string | null;
}

interface AcademicItemProps {
    academic: Academic
}

function AcademicItem({ academic }:AcademicItemProps) {
    return (
        <div className={styles["academic-item"]}>
            <div className={styles["academic-item__duration"]}>
                {academic.startdate} ~ {academic.enddate}
            </div>
            <p className={styles["academic-item__name"]}>{academic.name}</p>
            <p className={styles["academic-item__major"]}>{academic.major}</p>
        </div>
    )
}

export default AcademicItem