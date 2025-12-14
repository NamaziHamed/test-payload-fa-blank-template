import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels:{
    singular:{en:'Media',fa:'رسانه'},
    plural:{en:'Media',fa:'رسانه‌ها'},
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: { en: 'Alt Text', fa: 'متن جایگزین' },
      localized: true,
    },
  ],
  upload: true,
}
