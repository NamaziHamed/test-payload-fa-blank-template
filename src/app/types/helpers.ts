import { Page } from "@/payload-types";


export type Layout = NonNullable<Page['layout']>;
export type LayoutBlock = Layout[number];
export type BlockData<T extends LayoutBlock['blockType']> = Extract<LayoutBlock, { blockType: T }>;
