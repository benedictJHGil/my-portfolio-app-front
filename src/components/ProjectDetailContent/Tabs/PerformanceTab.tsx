import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './PerformanceTab.module.css'

interface Props {
  data: ProjectDetailData
}

function PerformanceTab({ data }: Props) {

    const items = data.performanceImprovements ?? []

    return (
        <div className="tab-section">
            {items.length > 0 && (
                <div className={cx(styles, "layer", "performance")}>
                    {items.map((item, i) => (
                        <div key={i} className={cx(styles, "card", "performance-card")}>
                            {item.problem && (
                                <div className={cx(styles, "block", "performance-block")}>
                                    <span className="label">문제</span>
                                    <p className={cx(styles, "desc", "performance-desc")}>
                                        {item.problem}
                                    </p>
                                </div>
                            )}

                            {item.improvement && (
                                <div className={cx(styles, "block", "performance-block")}>
                                    <span className="label">개선</span>
                                    <p className={cx(styles, "desc", "performance-desc")}>
                                        {item.improvement}
                                    </p>
                                </div>
                            )}

                            {item.result && (
                                <div className={cx(styles, "block", "performance-block")}>
                                    <span className="label">결과</span>
                                    <p className={cx(styles, "desc", "performance-desc")}>
                                        {item.result}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PerformanceTab