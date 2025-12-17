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
          name: 'sliderBanner',
          type: 'upload',
          relationTo: 'media',
          label: { en: 'Background Image', fa: 'تصویر پس‌زمینه' },
          admin: {
            description: {
              en: 'Recommended dimensions: 2000x500 pixels',
              fa: 'ابعاد پیشنهادی: 2000x500 پیکسل',
            },
          },
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
