import { Suspense } from 'react'
import MainPageList from './MainPageList'
import type { IncomingProject } from '@/types/project'

interface Props {
    sectionTitle: string
    items: IncomingProject[]
}

function MainPageListWrapper({ sectionTitle, items }: Props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainPageList sectionTitle={sectionTitle} items={items} />
        </Suspense>
    )
}

export default MainPageListWrapper