import styles from "./CareerItem.module.css"

interface Career {
    id: number; 
    name: string; 
    startdate: string; 
    enddate: string | null; 
    duration: string; 
    reason?: string | null; 
    department: string; 
    rank: string; 
    work: string; 
    pay: string; 
    location: string; 
    task: string; 
    dev_env: string[];
    content: string;
}

interface CareerItemProps {
  career: Career;
}

function CareerItem({ career }: CareerItemProps) {
    const hasAnyReason = career.reason && career.reason.trim();

    return (
        <div className={styles["career-item"]}> 
            <div className={styles["career-item__left"]}> 
                <div className="career-item__top">
                    <p className={styles["career-item__name"]}>{career.name}</p>
                    <p className={styles["career-item__work-info"]}>
                        <span className="career-item__department">{career.department}</span>
                        {' / '}
                        <span className="career-item__rank">{career.rank}</span>
                        {' / '}
                        <span className="career-item__job-title">{career.work}</span>
                    </p>
                </div>
                
                <p className={styles["career-item__duration"]}>
                    {career.startdate} ~ {career.enddate} 
                    <span className="career-item__total-duration"> ({career.duration})</span>
                </p>

                <div className={styles["career-item__etc"]}>
                    <p className={`${styles["career-item__etc-info"]} ${styles["career-item__pay"]}`}>연봉: {career.pay}만원</p>
                    <p className={`${styles["career-item__etc-info"]} ${styles["career-item__location"]}`}>근무지역: {career.location}</p>
                    {hasAnyReason && (
                        <p className={`${styles["career-item__etc-info"]} ${styles["career-item__reason"]}`}>퇴사사유: {career.reason}</p>
                    )}
                </div>
            </div> 

            <div className={styles["career-item__right"]}> 
                <div className="career-item__tasks">
                    <p className={styles["career-item__title"]}>주요 업무</p>
                    <p className={styles["career-item__content"]}>{career.task}</p>
                </div>

                <div className="career-item__dev-env">
                    <p className={styles["career-item__title"]}>개발 환경</p>
                    <p className={styles["career-item__content"]}>{career.dev_env.join(", ")}</p>
                </div>

                <div className="career-item__detail-content">
                    <p className={styles["career-item__title"]}>상세 기술/성과</p>
                    <ul className="career-item__content__list">
                        {career.content.split('|').map((item, index) => (
                            <li key={index} className={styles["career-item__content"]}>
                                {item.trim()}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default CareerItem