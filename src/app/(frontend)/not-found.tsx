import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden gap-8">
      <h1>صفحه مورد نظر یافت نشد</h1>
      <Button variant={'outline'}>
        <Link href="..">بازگشت به صفحه اصلی</Link>
      </Button>
    </div>
  )
}
