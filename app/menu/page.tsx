import Link from "next/link"
import { useEffect } from "react"

export default async function Menu() {
  return (
    <main className="h-screen w-full bg-slate-200 animate-slide-up">
      <Header />
      <div className="p-4 pt-8">
        <Link href="/create-game"><Item className="border-orange-400" title="新規ゲーム作成" /></Link>
        <Item className="border-cyan-400" title="ゲーム一覧" />
        <Item className="border-green-400" title="フレンド管理" />
        <Item className="border-purple-300" title="分析" />
      </div>
    </main>
  )
}

const Header = async () => {
  const res = await fetch('http://localhost:8000/users/me')
  const { id, user_name: userName} = await res.json()

  return (
    <div className="w-full bg-white flex flex-col items-end p-4 rounded-b-xl shadow-xl">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col">
          <p className="text-gray-700 font-bold text-lg text-left">{ userName }</p>
          <p className="text-gray-400">@{ id }</p>
        </div>
        <div className="flex flex-col items-end justify-end">
          <span className="text-blue-400"> + 124500</span>
          <p className="font-bold text-lg text-gray-600">
            21 
            <span className="text-green-400 mr-2"> WIN</span>
            34
            <span className="text-red-400"> LOSE</span>
          </p>
        </div>
      </div>
    </div>
  )
  
}
const Item = ({title, className}: {title: string, className: string}) => {
  return (
    <div className="animate-slide-slow-up w-full h-30 bg-white flex flex-col items-start justify-end p-4 mb-8 rounded-xl">
      <p className={`${className} border-l-2 text-gray-500 pl-2`}>{ title }</p>
    </div>
  )
}
