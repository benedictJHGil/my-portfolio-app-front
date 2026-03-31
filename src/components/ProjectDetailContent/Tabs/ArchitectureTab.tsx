import type { ProjectDetailData } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './ArchitectureTab.module.css'
import MyImage from '@/components/MyImage/MyImage'
import { withCdn } from '@/utils/cdn'

interface Props {
  data: ProjectDetailData
}

function ArchitectureTab({ data }: Props) {

    const layers = data.architecture?.description?.layers ?? []

    return (
        <div className="tab-section">
            {data.architecture?.imageUrl && (
                <div className={styles["architecture-image"]}>
                    <MyImage 
                        src={withCdn(data.architecture.imageUrl)}
                        alt={"arch-image"}
                        fill
                        objectFit={'contain'}
                        className={"arch-image"}
                    />
                </div>
            )}

            {layers.length > 0 && (
                <div className={cx(styles, "layer", "architecture-layers")}>
                {layers.map((layer, i) => (
                    <div key={i} className={cx(styles, "card", "layer-card")}>
                        <h4 className={cx(styles, "title", "layer-title")}>
                            {layer.name}
                        </h4>
                        <p className={cx(styles, "desc", "layer-desc")}>
                            {layer.description}
                        </p>
                    </div>
                ))}
                </div>
            )}

        </div>
    )
}

export default ArchitectureTab