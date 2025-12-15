import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: { en: 'Footer', fa: 'فوتر' },
  fields: [
    {
      name: 'copyrightNotice',
      type: 'text',
      label: { en: 'Copyright Notice', fa: 'متن کپی‌رایت' },
      required: true,
      localized: true,
      defaultValue: 'تمامی حقوق محفوظ است.',
    },
  ],
}
