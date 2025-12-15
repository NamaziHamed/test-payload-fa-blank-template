import { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  fields: [
    {
      name: 'featuredReviews',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      min: 1,
      max: 10,
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
  ],
}
