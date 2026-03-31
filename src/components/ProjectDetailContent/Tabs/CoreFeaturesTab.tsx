import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './CoreFeaturesTab.module.css'

interface Props {
  data: ProjectDetailData
}

function CoreFeaturesTab({ data }: Props) {

    const features = data.coreFeatures ?? []

    return (
        <div className="tab-section">
            {features.length > 0 && (
                <div className={cx(styles, "layer", "features-list")}>
                    {features.map((feature, i) => (
                        <div key={i} className={cx(styles, "card", "feature-card")}>

                        <h4 className={cx(styles, "title", "feature-title")}>
                            {feature.feature_name}
                        </h4>

                        {feature.description && (
                            <p className={cx(styles, "desc", "feature-desc")}>
                                {feature.description}
                            </p>
                        )}

                        {feature.implementation?.length && (
                            <div className={cx(styles, "block", "feature-implementation")}>
                                <span className="label">구현</span>
                                <ul>
                                    {feature.implementation.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                        )}

                        {feature.tech_stack?.length && (
                            <div className={styles["feature-tech"]}>
                                <span className="label">기술 스택</span>
                                <ul>
                                    {feature.tech_stack.map((tech, idx) => <li key={idx}>{tech}</li>)}
                                </ul>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CoreFeaturesTab