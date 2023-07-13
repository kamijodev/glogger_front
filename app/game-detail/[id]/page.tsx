
export default async function GameDetail({
  params: { id }
}: {
  params: { id: string }
}) {

  const getGameDetail = async () => {
    const result = await fetch(`http://localhost:8000/games/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (result.status === 200)  {
      const data = await result.json()
      console.log(data)
    }
  }

  const a = await getGameDetail()

  return (
    <main className="h-screen bg-slate-100 animate-slide-up">
      <div className="flex flex-col h-full">
        <div className="h-20 bg-white flex items-center justify-center text-gray-500 font-bold text-xl shadow-xl">
          <div className="pl-4">{ id }</div>
        </div>
        <div className="p-4">
          <div className="p-1">GAME 1</div>
          <div className="p-2 bg-white shadow-xl">け + 1</div>
          <div className="p-2 bg-white shadow-xl">け + 1</div>
          <div className="p-2 bg-white shadow-xl">け + 1</div>
        </div>
      </div>
    </main>
  )
}