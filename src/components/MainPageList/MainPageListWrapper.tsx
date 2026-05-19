import { Suspense } from 'react'
import MainPageList from './MainPageList'
import { UiProject } from '@/types/ui/project'

interface MainPageListWrapperProps {
    sectionTitle: string
    items: UiProject[]
}

function MainPageListWrapper({ sectionTitle, items }: MainPageListWrapperProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainPageList sectionTitle={sectionTitle} items={items} />
        </Suspense>
    )
}

export default MainPageListWrapper