import { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  labels: {
    singular: { en: 'FAQ Item', fa: 'سوالات متداول' },
    plural: { en: 'FAQ Items', fa: 'سوالات متداول' },
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: { en: 'Section Title', fa: 'عنوان بخش' },
    },
    {
      name: 'faqPairs',
      type: 'array',
      label: { en: 'FAQ Pairs', fa: 'سوال و جواب' },
      fields: [
        {
          name: 'question',
          label: { en: 'Question', fa: 'سوال' },
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: { en: 'Answer', fa: 'جواب' },
          type: 'textarea',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 20,
      required: true,
    },
  ],
}
