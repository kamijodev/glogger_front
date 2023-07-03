'use client'

import { useRouter } from 'next/navigation'

export default function Item({ url, children }: { url?: string | null, children: React.ReactNode}) {
  const router = useRouter()

  // if (!url && !) return <></>;

  const clickHandler = () => {
    if (url)  {
      router.push(url)
    }
    // if (action) {
    //   action();
    // }
  }

  return (
    <div className="bg-indigo-50 rounded-lg mt-4 p-4">
      <button onClick={clickHandler} className="text-left text-indigo-900 flex">
        {children}
      </button>
    </div>
  )
}
