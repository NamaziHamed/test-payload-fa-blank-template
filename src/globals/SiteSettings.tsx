import { GlobalConfig } from "payload";


export const SiteSettings: GlobalConfig = {
    slug: "site-settings",
    label: {en: "Site Settings", fa: "تنظیمات سایت"},
    access:{ read: () => true  },
    fields:[
        {
            name: 'siteName',
            type: 'text',
            label: {en: "Site Name", fa: "نام سایت"},
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            label: {en: "Logo", fa: "لوگو"},
        },
        {
            name: 'homePage',
            type: 'relationship',
            relationTo: 'pages',
            label: {en: "Home Page", fa: "صفحه اصلی"},
            required: true,
        }
    ]
}