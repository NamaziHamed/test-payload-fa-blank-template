import { BlockData } from '@/app/types/helpers'
import ComponentWrapper from '@/components/customs/ComponentWrapper'
import FeaturesCard from '@/components/customs/FeaturesCard'
import React from 'react'

type Props = BlockData<'whyUs'>

export default function WhyUs(props: Props) {
  const { sectionTitle, features } = props
  return (
    <ComponentWrapper>
      <div className="flex flex-col space-y-7">
        <h1 className="section-title">{sectionTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features?.map((feature, index) => (
            <FeaturesCard key={index} data={feature} />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  )
}
