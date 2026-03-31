import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './TroubleshootingTab.module.css'

interface Props {
  data: ProjectDetailData
}

function TroubleshootingTab({ data }: Props) {

    const issues = data.troubleshooting ?? []
    
    return (
        <div className="tab-section">            
            {issues.length > 0 && (
                <div className={cx(styles, "layer", "troubleshooting")}>
                    {issues.map((item, i) => (
                        <div key={i} className={cx(styles, "card", "issue-card")}>
                            <h4 className={cx(styles, "title", "issue-title")}>
                                {item.title}
                            </h4>

                            {item.problem && (
                                <div className={cx(styles, "block", "issue-block")}>
                                    <span className="label">문제</span>
                                    <p className={cx(styles, "desc", "issue-desc")}>
                                        {item.problem}
                                    </p>
                                </div>
                            )}

                            {item.cause && (
                                <div className={cx(styles, "block", "issue-block")}>
                                    <span className="label">원인</span>
                                    <p className={cx(styles, "desc", "issue-desc")}>
                                        {item.cause}
                                    </p>
                                </div>
                            )}

                            {item.solution && (
                                <div className={cx(styles, "block", "issue-block")}>
                                    <span className="label">해결</span>
                                    <p className={cx(styles, "desc", "issue-desc")}>
                                        {item.solution}
                                    </p>
                                </div>
                            )}

                            {item.result && (
                                <div className={cx(styles, "block", "issue-block")}>
                                    <span className="label">결과</span>
                                    <p className={cx(styles, "desc", "issue-desc")}>
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

export default TroubleshootingTab