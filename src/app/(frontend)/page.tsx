import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import ComponentRenderer from '@/components/customs/ComponentRenderer'

export default async function Home() {
  const payload = await getPayload({ config })

  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

  const homePage = typeof settings.homePage ==='object' ? settings.homePage : null

  return <div>
    <h1>{homePage?.title}</h1>
    <ComponentRenderer Layout={homePage?.layout} />
  </div>
}
