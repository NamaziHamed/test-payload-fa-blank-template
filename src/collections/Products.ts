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
      type: 'richText',
      label: { en: 'Description', fa: 'توضیحات' },
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: { en: 'Slug', fa: 'نامک' },
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: {
          en: 'Unique identifier for the product URL',
          fa: 'شناسه یکتا برای آدرس محصول',
        },
      },
    },
    {
      name: 'price',
      type: 'number',
      label: { en: 'Price', fa: 'قیمت' },
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: { en: 'Categories', fa: 'دسته‌بندی‌ها' },
      hasMany: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Thumbnail', fa: 'تصویر شاخص' },
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Banner', fa: 'بنر' },
      admin: {
        position: 'sidebar',
        description: {
          en: 'Recommended size: 2000x500 pixels',
          fa: 'اندازه پیشنهادی: 2000x500 پیکسل',
        },
      },
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
