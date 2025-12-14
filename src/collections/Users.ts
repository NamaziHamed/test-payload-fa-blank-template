import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: { en: 'User', fa: 'کاربر' },
    plural: { en: 'Users', fa: 'کاربران' },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Profile Image', fa: 'تصویر پروفایل' },
      localized: true,
      admin: {
        condition: (data) => {
          return !!data?.id
        },
      },
    },
  ],
}
