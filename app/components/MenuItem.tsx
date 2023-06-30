'use client'

import { useRouter } from 'next/navigation';

export default function MenuItem({ url, children }: { url: string, children: React.ReactNode}) {
  const router = useRouter();

  return (
    <div className="bg-indigo-50 rounded-lg mt-4 p-4">
      <button onClick={() => router.push(url)} className="text-left text-indigo-900 flex">
        {children}
      </button>
    </div>
  )
}
