'use client'

import { useRouter } from "next/navigation"
import Input from "../components/Input"
import { useEffect } from "react"

export default function Login() {
  const router = useRouter()
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 処理
    router.push('/menu')
  }

  useEffect(() => {
    document.addEventListener('touchstart', event => {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    }, {passive: false})
  }, [])

  return (
    <main className="h-screen bg-white animate-opacity">
      <div className="h-1/4 flex justify-center">
        <h1 className="animate-opacity-slow my-auto pt-5 text-5xl text-center font-bold text-blue-400 italic"><span className="text-6xl">G</span>Logger </h1>
      </div>
      <form onSubmit={handleLogin} className="p-5 pt-10 h-4/5">
        <h1 className="text-2xl font-bold text-gray-500">Login</h1>
        <Input type="text" label="User Id"></Input>
        <Input type="password" label="Password"></Input>
        <button type="submit" className="block rounded-lg w-2/3 mx-auto bg-blue-400 text-white mt-8 p-2">Login</button>
        <div className="pt-8 text-center text-blue-500">register new account</div>
      </form>
    </main>
  )
}