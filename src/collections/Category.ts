import { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: { en: 'Category', fa: 'دسته بندی' },
    plural: { en: 'Categories', fa: 'دسته بندی ها' },
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: { en: 'Name', fa: 'عنوان' },
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: { en: 'slug', fa: 'نامک' },
      localized: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: {
          en: 'A unique identifier for the category used in URLs',
          fa: 'یک شناسه منحصر به فرد برای دسته بندی که در آدرس‌ها استفاده می‌شود',
        },
      },
    },
  ],
  access:{
    read: () => true,
  }
}
