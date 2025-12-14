import { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  labels: {
    singular: { en: 'Customer', fa: 'مشتری' },
    plural: { en: 'Customers', fa: 'مشتریان' },
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: { en: 'Name', fa: 'نام' },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: { en: 'Email', fa: 'ایمیل' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Profile Image', fa: 'تصویر پروفایل' },
      admin: {
        condition: (data) => {
          return !!data?.id
        },
      },
    },
  ],
}
