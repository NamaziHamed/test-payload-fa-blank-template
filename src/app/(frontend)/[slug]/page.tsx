import { Page } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import NotFound from '../not-found'
import ComponentRenderer from '@/components/customs/ComponentRenderer'

type Args = {
  params: Promise<{ slug: string }>
}

export default async function DynamicPages({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })

  const pageData = result?.docs?.[0] as Page | undefined

  if (!pageData) return <NotFound />

  return (
    <div>
      <h1>{pageData.title}</h1>
      <ComponentRenderer Layout={pageData.layout} />
    </div>
  )
}
