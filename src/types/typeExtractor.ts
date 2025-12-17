import { Page } from '@/payload-types'

export type PageLayout = NonNullable<Page['layout']>

export type PageBlock = PageLayout[number]

export type BlockData<T extends PageBlock['blockType']> = Extract<PageBlock, { blockType: T }>
