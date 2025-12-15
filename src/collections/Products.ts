import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: { en: 'Product', fa: 'دوره' },
    plural: { en: 'Products', fa: 'دوره‌ها' },
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: { en: 'Name', fa: 'نام' },
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: { en: 'Description', fa: 'توضیحات' },
      required: true,
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
      label: { en: 'Price', fa: 'قیمت' },
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: { en: 'Categories', fa: 'دسته‌بندی‌ها' },
      hasMany: true,
      required: true,
    },
    {
      name: 'videos',
      type: 'array',
      label: { en: 'Videos', fa: 'ویدیوها' },
      fields: [
        {
          name: 'videoTitle',
          type: 'text',
          label: { en: 'Video Title', fa: 'عنوان ویدیو' },
          required: true,
          localized: true,
        },
        {
          name: 'videoFile',
          type: 'upload',
          relationTo: 'media',
          label: { en: 'Video File', fa: 'فایل ویدیو' },
          required: true,
        },
        {
          name: 'isDemo',
          type: 'checkbox',
          label: { en: 'Select as demo video', fa: 'انتخاب به عنوان ویدیو دمو' },
          defaultValue: false,
        },
      ],
    },
  ],
}
