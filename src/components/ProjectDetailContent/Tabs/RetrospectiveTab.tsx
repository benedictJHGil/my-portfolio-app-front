import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './RetrospectiveTab.module.css'

interface Props {
  data: ProjectDetailData
}

function RetrospectiveTab({ data }: Props) {

    const items = data.retrospective ?? []

    return (
        <div className="tab-section">
            {items.length > 0 && (
                <div className={cx(styles, "block", "retrospective-block")}>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default RetrospectiveTab