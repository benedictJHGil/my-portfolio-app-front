import styles from "./AcademicItem.module.css";
import { UiAcademic } from "@/types/ui/about";

interface AcademicItemProps {
    academic: UiAcademic
}

function AcademicItem({ academic }:AcademicItemProps) {
    return (
        <>
        {/* <div className={styles["academic-item"]}> */}
            {/* <div className={styles["academic-item__duration"]}>
                {academic.startdate} ~ {academic.enddate}
            </div> */}
            <p className={styles["academic-item__name"]}>{academic.name}</p>
            <p className={styles["academic-item__major"]}>{academic.major}</p>
        {/* </div> */}
        </>
    )
}

export default AcademicItem