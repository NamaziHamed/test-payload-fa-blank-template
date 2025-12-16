import { ContentProps } from '@/app/types/extractedTypes'
import ComponentWrapper from '@/components/customs/ComponentWrapper'
import { RichTextNode, Serialize } from '@/components/customs/jsonRenderer'
import React from 'react'

export default function Content(props: ContentProps) {
  const { sectionTitle, content } = props
  return (
    <ComponentWrapper>
      <div className="flex flex-col space-y-7">
        <h3 className="section-title">{sectionTitle}</h3>
        <div className='prose dark:prose-reversed prose-slate max-w-3xl'></div>
        <Serialize nodes={content as unknown as RichTextNode[]} />
      </div>
    </ComponentWrapper>
  )
}
    