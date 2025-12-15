'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import type { Page, Media } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type Layout = NonNullable<Page['layout']>
type HeroSliderBlock = Extract<Layout[number], { blockType: 'heroSlider' }>

export function HeroSliderComponent(props: HeroSliderBlock) {
  const { slides } = props

  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  if (!slides || !Array.isArray(slides)) return null

  return (
    <div className="w-full flex justify-center py-10">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => {
            const bgImage = slide.BackgroundImage as Media
            const imgUrl = bgImage?.url

            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="relative aspect-video p-0">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                        style={{
                          backgroundImage: imgUrl ? `url('${imgUrl}')` : undefined,
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{slide.headline}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}
