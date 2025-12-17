import React from 'react'
import Content from '@/blocks/Content/component'
import CTA from '@/blocks/CTA/component'
import FAQ from '@/blocks/FAQ/component'
import FeaturedProducts from '@/blocks/FeaturedProducts/component'
import HeroSlider from '@/blocks/HeroSlider/component'
import Testimonials from '@/blocks/Testimonials/component'
import WhyUs from '@/blocks/WhyUs/component'
import { PageLayout } from '@/types/typeExtractor' // Ensure this path is correct

export default function ComponentRenderer({ Layout }: { Layout: PageLayout | null | undefined }) {
  if (!Layout || !Array.isArray(Layout)) return null

  return (
    <div className="flex flex-col">
      {Layout.map((block, index) => {
        const blockType = block.blockType

        switch (blockType) {
          case 'content':
            return <Content key={index} {...block} />
          case 'cta':
            return <CTA key={index} {...block} />
          case 'faq':
            return <FAQ key={index} {...block} />
          case 'featuredProducts':
            return <FeaturedProducts key={index} {...block} />
          case 'heroSlider':
            return <HeroSlider key={index} {...block} />
          case 'testimonials':
            return <Testimonials key={index} {...block} />
          case 'whyUs':
            return <WhyUs key={index} {...block} />
          default:
            return null
        }
      })}
    </div>
  )
}
