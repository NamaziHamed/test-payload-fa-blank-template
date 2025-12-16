import { Content } from '@/blocks/Content/config'
import { CTA } from '@/blocks/CTA/config'
import { FAQ } from '@/blocks/FAQ/confit'
import { FeaturedProducts } from '@/blocks/FeaturedProducts/config'
import { HeroSlider } from '@/blocks/HeroSlider/config'
import { Testimonials } from '@/blocks/Testimonials/config'
import { WhyUs } from '@/blocks/WhyUs/config'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: { en: 'Page', fa: 'صفحه' },
    plural: { en: 'Pages', fa: 'صفحات' },
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: { en: 'Title', fa: 'عنوان' },
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: { en: 'Slug', fa: 'نامک' },
      required: true,
      localized: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      label: { en: 'Layout', fa: 'بلوک‌ها' },
      localized: true,
      blocks: [HeroSlider, FAQ, CTA, FeaturedProducts, Testimonials, WhyUs , Content],
    },
  ],
}
