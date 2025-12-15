import { Block } from 'payload'

export const WhyUs: Block = {
  slug: 'whyUs',
  labels: {
    singular: {
      en: 'Why Us?',
      fa: 'چرا ما؟',
    },
    plural: { en: 'Why Us?', fa: 'چرا ما؟' },
  },

  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: { en: 'Section Title', fa: 'عنوان بخش' },
      localized: true,
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      label: { en: 'features', fa: 'ویژگی‌ها' },
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: { en: 'Title', fa: 'عنوان' },
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: { en: 'Description', fa: 'توضیحات' },
          localized: true,
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: { en: 'Icon', fa: 'آیکون' },
          required: true,
        },
      ],
    },
  ],
}
