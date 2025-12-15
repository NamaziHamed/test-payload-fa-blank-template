import { Block } from 'payload'

export const HeroSlider: Block = {
  slug: 'heroSlider',
  labels: {
    singular: { en: 'Hero Slider', fa: 'اسلایدر' },
    plural: { en: 'Hero Sliders', fa: 'اسلایدرها' },
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: { en: 'Slides', fa: 'اسلایدها' },
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'headline',
          type: 'text',
          label: { en: 'Headline', fa: 'تیتر' },
          localized: true,
          required: true,
        },
        {
          name: 'BackgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: { en: 'Background Image', fa: 'تصویر پس‌زمینه' },
          required: true,
        },
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          label: { en: 'Product', fa: 'محصول' },
          required: true,
        },
      ],
    },
  ],
}
