import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './OperationsTab.module.css'

interface Props {
  data: ProjectDetailData
}

function OperationsTab({ data }: Props) {

    const items = data.operationsExperience ?? []

    return (
        <div className="tab-section">
            {items.length > 0 && (
                <div className={cx(styles, "block", "operations-block")}>
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

export default OperationsTab