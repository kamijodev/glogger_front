'use client'

import { useRouter } from "next/navigation"
import Input from "../components/Input"

export default function Login() {
  const router = useRouter()
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 処理
    router.push('/menu')
  }

  return (
    <main className="h-screen bg-indigo-600">
      <div className="h-2/6 flex justify-center">
        <h1 className="my-auto text-5xl text-center font-bold text-white italic"><span className="text-6xl">G</span>Logger</h1>
      </div>
      <form onSubmit={handleLogin} className="bg-white shadow rounded-t-3xl p-5 h-4/6">
        <h1 className="text-2xl font-bold text-indigo-700">Login</h1>
        <Input type="text" label="User Id"></Input>
        <Input type="password" label="Password"></Input>
        <button type="submit" className="block rounded-lg w-2/3 mx-auto bg-indigo-700 text-white mt-8 p-2">Login</button>
        <div className="pt-8 text-center text-indigo-500">register new account</div>
      </form>
    </main>
  )
}