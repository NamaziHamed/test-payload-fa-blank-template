import React from 'react'

export default function ComponentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='container max-w-5xl'>
        {children}
    </section>
  )
}
