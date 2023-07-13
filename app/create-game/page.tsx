'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function CreateGame() {
  const router = useRouter()
  const now = new Date()
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [date, setDate] = useState(now.getDate())
  const [hour, setHour] = useState(now.getHours())
  const [minute, setMinute] = useState(now.getMinutes())

  const daysInMonth = (year: number, month: number) => {
      return new Date(year, month, 0).getDate()
  }

  const zeroPadding = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  const save = async () => {
    const result = await fetch('http://localhost:8000/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        date_and_time: new Date(`${year}-${zeroPadding(month)}-${zeroPadding(date)} ${zeroPadding(hour)}:${zeroPadding(minute)}:00`).toISOString()
      })
    })
    if (result.status === 200)  {
      const { id } = await result.json()
      router.push(`/game-detail/${id}`)
    }
  }

  return (
    <main className="h-screen bg-slate-100 animate-slide-up">
      <div className="flex flex-col h-full">
        <div className="h-20 bg-white flex items-center justify-center text-gray-500 font-bold text-xl shadow-xl">
          <div className="pl-4">新規ゲーム作成</div>
        </div>
        <div className="p-8 text-gray-600">
          <div className="bg-white shadow-xl p-4">
            <div className="mb-4">
              <span>ゲーム名</span>
              <input onChange={(e) => setTitle(e.target.value)} type="text" className="w-full p-3 border-b" />
            </div>
            <div className="mb-4">
              <span>タグ設定</span>
              <input type="text" className="w-full p-3 border-b" />
            </div>
            <div className="mb-4">
              <span>日付</span>
              <div>
                <select onChange={(e) => setYear(e.target.value)} value={year} className="w-1/3 border-b py-3 text-center">
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
                <select onChange={(e) => setMonth(e.target.value)} value={month} className="w-1/3 border-b py-3 text-center">
                  {new Array(12).fill(0).map((_, i) => {
                    return <option key={i} value={i + 1}>{i + 1}</option>
                  })}
                </select>
                <select onChange={(e) => setDate(e.target.value)} value={date} className="w-1/3 border-b py-3 text-center">
                  {new Array(daysInMonth(year, month)).fill(0).map((_, i) => {
                    return <option key={i} value={i + 1}>{i + 1}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <span>時間</span>
              <div>
                <select onChange={(e) => setHour(e.target.value)} value={hour} className="w-1/2 border-b py-3 text-center">
                  {new Array(24).fill(0).map((_, i) => {
                    return <option key={i} value={i}>{i}</option>
                  })}
                </select>
                <select onChange={(e) => setMinute(e.target.value)} value={minute} className="w-1/2 border-b py-3 text-center">
                  {new Array(60).fill(0).map((_, i) => {
                    return <option key={i} value={i}>{i}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="mb-4 mt-8">
              <button onClick={() => save()} type="button" className="w-full bg-blue-500 text-white h-12">作成</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}