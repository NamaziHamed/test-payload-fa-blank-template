import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: { en: 'Testimonial', fa: 'توصیه‌نامه' },
    plural: { en: 'Testimonials', fa: 'توصیه‌نامه‌ها' },
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customers',
      label: { en: 'Customer', fa: 'مشتری' },
      required: true,
    },
    {
      name: 'review',
      type: 'textarea',
      label: { en: 'Review', fa: 'نظر' },
      localized: true,
      required: true,
    },
    {
      name: 'stars',
      type: 'number',
      label: { en: 'Rating', fa: 'امتیاز' },
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      label: { en: 'Product', fa: 'محصول' },
      required: true,
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      label: { en: 'Approved', fa: 'تایید شده' },
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
