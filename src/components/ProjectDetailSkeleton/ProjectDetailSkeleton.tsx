import { cx } from '@/utils/cx'
import styles from "./ProjectDetailSkeleton.module.css"

function ProjectDetailSkeleton() {
  return (
    <div className="tab-section">

      <div className={cx(styles, "skeleton-tabs", "pc")}>
        <div className={styles["skeleton-tab"]} />
        <div className={styles["skeleton-tab"]} />
        <div className={styles["skeleton-tab"]} />
      </div>

      <div className={cx(styles, "skeleton-dropdown", "mobile")}>
        <div className={styles["skeleton-select"]} />
      </div>

      <div className={styles["skeleton-block"]} />
      <div className={styles["skeleton-block"]} />
      <div className={styles["skeleton-block"]} />

    </div>
  )
}

export default ProjectDetailSkeleton