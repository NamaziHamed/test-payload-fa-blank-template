import { Block } from 'payload'

export const FeaturedProducts: Block = {
  slug: 'featuredProducts',
  labels: {
    singular: { en: 'Featured Products', fa: 'محصولات ویژه' },
    plural: { en: 'Featured Products', fa: 'محصولات ویژه' },
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
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      label: { en: 'Products', fa: 'محصولات' },
      hasMany: true,
      required: true,
      minRows: 3,
      maxRows: 9,
    },
  ],
}
