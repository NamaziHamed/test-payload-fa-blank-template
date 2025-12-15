import React from 'react'
import '../globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata = {
  description: 'Bailemos con Payload',
  title: 'Dance studio built with Payload CMS',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fa" suppressHydrationWarning>
      <body dir='rtl'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
