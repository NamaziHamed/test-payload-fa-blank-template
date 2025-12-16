import { BlockData } from "./helpers";

export type featuredDataProps = NonNullable<BlockData<"whyUs">["features"]>[number];
export type ContentProps = BlockData<"content">