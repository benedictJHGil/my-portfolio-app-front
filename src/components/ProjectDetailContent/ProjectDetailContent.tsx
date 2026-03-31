'use client'

import type { TabKey, ProjectDetailData } from '@/types/projectDetail'
import OverviewTab from './Tabs/OverviewTab'
import ArchitectureTab from './Tabs/ArchitectureTab'
import CoreFeaturesTab from './Tabs/CoreFeaturesTab'
import TechDecisionsTab from './Tabs/TechDecisionsTab'
import TroubleshootingTab from './Tabs/TroubleshootingTab'
import PerformanceTab from './Tabs/PerformanceTab'
import OperationsTab from './Tabs/OperationsTab'
import RetrospectiveTab from './Tabs/RetrospectiveTab'
import './ProjectDetailContent.page.css'

interface ProjectDetailContentProps {
    activeTab: TabKey
    data: ProjectDetailData
}

function ProjectDetailContent({ activeTab, data }: ProjectDetailContentProps) {
    const TAB_COMPONENT_MAP = {
        overview: OverviewTab,
        architecture: ArchitectureTab,
        coreFeatures: CoreFeaturesTab,
        techDecisions: TechDecisionsTab,
        troubleshooting: TroubleshootingTab,
        performanceImprovements: PerformanceTab,
        operationsExperience: OperationsTab,
        retrospective: RetrospectiveTab,
    }

  const ActiveComponent = TAB_COMPONENT_MAP[activeTab]

  return <ActiveComponent data={data} />
}

export default ProjectDetailContent