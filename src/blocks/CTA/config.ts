import { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: { en: 'Call to Action', fa: 'دعوت به اقدام' },
    plural: { en: 'Call to Actions', fa: 'دعوت به اقدام‌ها' },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { en: 'Title', fa: 'عنوان' },
      localized: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      label: { en: 'Button Text', fa: 'متن دکمه' },
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      label: { en: 'Subtitle', fa: 'توضیحات' },
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Background Image', fa: 'تصویر پس‌زمینه' },
    },
  ],
}
