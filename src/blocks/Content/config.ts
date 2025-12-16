import { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  labels: { singular: 'Content', plural: 'Contents' },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: { en: 'Section Title', fa: 'عنوان بخش' },
      localized: true,
      admin: {
        description: 'عنوان بخش محتوا',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: { en: 'Content', fa: 'محتوا' },
      localized: true,
      admin: {
        description: 'محتوای اصلی این بخش را وارد کنید',
      },
    },
  ],
}
