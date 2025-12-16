import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card'
import Image from 'next/image'
import { featuredDataProps } from '@/app/types/extractedTypes'

export default function FeaturesCard({ data }: { data: featuredDataProps }) {
  const iconData = typeof data.icon === 'object' && data.icon !== null ? data.icon : null
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {iconData && iconData.url && (
          <Image src={iconData?.url} alt={iconData?.alt || data.title} width={50} height={50} />
        )}
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
