import type { ProjectDetail } from '@/types/api/project'
import { cx } from '@/utils/cx'
import styles from './OverviewTab.module.css'

interface Props {
  data: ProjectDetail
}

function OverviewTab({ data }: Props) {

    const problems = data.overview?.problems ?? []
    const features = data.overview?.main_features ?? []

    return (
        <div className="tab-section">
            {data.outline && (
                <p className={styles["overview-highlight"]}>
                    {data.outline}
                </p>
            )}

            {data.overview?.purpose && (
                <div className={cx(styles, "block", "overview-block")}>
                    <span className="label">프로젝트 목적</span>
                    <p className={cx(styles, "desc", "overview-desc")}>
                        {data.overview.purpose}
                    </p>
                </div>
            )}

            {problems.length > 0 && (
                <div className={cx(styles, "block", "overview-block")}>
                    <span className="label">해결해야 할 문제</span>
                    <ul>
                        {problems.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.overview?.team_size && (
                <div className={cx(styles, "block", "overview-block")}>
                    <span className="label">팀 규모</span>
                    <p className={cx(styles, "desc", "overview-desc")}>
                        {data.overview.team_size}
                    </p>
                </div>
            )}

            {features.length > 0 && (
                <div className={cx(styles, "block", "overview-block")}>
                    <span className="label">핵심 기능</span>
                    <ul>
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default OverviewTab