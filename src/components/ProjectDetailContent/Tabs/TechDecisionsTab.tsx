import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './TechDecisionsTab.module.css'

interface Props {
  data: ProjectDetailData
}

function TechDecisionsTab({ data }: Props) {

    const decisions = data.techDecisions ?? []

    return (
        <div className="tab-section">
            {decisions.length > 0 && (
                <div className={cx(styles, "layer", "tech-decisions")}>
                    {decisions.map((item, i) => (
                        <div key={i} className={cx(styles, "card", "decision-card")}>
                            <h4 className={cx(styles, "title", "decision-title")}>
                                {item.tech_name}
                            </h4>

                            {item.decision_reason && (
                                <div className={cx(styles, "block", "decision-block")}>
                                    <span className="label">선택 이유</span>
                                    <p className={cx(styles, "desc", "decision-desc")}>
                                        {item.decision_reason}
                                    </p>
                                </div>
                            )}

                            {(item.alternatives?.length ?? 0) > 0 && (
                                <div className={cx(styles, "block", "decision-block")}>
                                    <span className="label">대안</span>
                                    <ul>
                                        {item.alternatives!.map((alt, idx) => <li key={idx}>{alt}</li>)}
                                    </ul>
                                </div>
                            )}

                            {item.trade_off && (
                                <div className={cx(styles, "block", "decision-block")}>
                                    <span className="label">트레이드오프</span>
                                    <p className={cx(styles, "desc", "decision-desc")}>
                                        {item.trade_off}
                                    </p>
                                </div>
                            )}

                            {item.result && (
                                <div className={cx(styles, "block", "decision-block")}>
                                    <span className="label">결과</span>
                                    <p className={cx(styles, "desc", "decision-desc")}>
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

export default TechDecisionsTab