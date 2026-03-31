import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './OverviewTab.module.css'

interface Props {
  data: ProjectDetailData
}

function OverviewTab({ data }: Props) {

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
                    <span className="label">목적</span>
                    <p className={cx(styles, "desc", "overview-desc")}>
                        {data.overview.purpose}
                    </p>
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