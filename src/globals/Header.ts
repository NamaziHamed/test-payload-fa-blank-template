import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: {
    en: 'Header',
    fa: 'هدر',
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      label: {
        en: 'Site Title',
        fa: 'عنوان سایت',
      },
      required: true,
      localized: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Logo', fa: 'لوگو' },
      required: true,
    },
    {
      name: 'navMenuItems',
      type: 'array',
      label: { en: 'Navigation Menu Items', fa: 'آیتم‌های منو' },
      localized: true,
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: { en: 'Label', fa: 'عنوان' },
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: ['pages', 'categories'],
          label: { en: 'Link', fa: 'لینک' },
          required: true,
        },
      ],
    },
  ],
}
