// 'use server'

// import Item from "../components/Item";

export default function CreateGame() {
  return (
    <main className="h-screen">
      <div className="hidden absolute w-full top-1/4">
        <div className="rounded-lg bg-white shadow p-2 m-2">
          <div className="text-xl font-bold mb-3 text-indigo-700">ゲームを検索する</div>
          <input type="text" className="h-8 p-2 bg-gray-200 w-full rounded text-gray-600" />
          <div className="p-2 mt-4">
            <div className="text-sm font-bold text-gray-600">・ ダーツ</div>
          </div>
          <div className="p-2 mt-4">
            <div className="text-sm font-bold text-gray-600">・ ダーツ</div>
          </div>
          <div className="p-2 mt-4">
            <div className="text-sm font-bold text-gray-600">・ ダーツ</div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-indigo-600 flex text-white font-bold text-xl">
        <div className="my-auto pl-4">Create Game</div>
      </div>
      <div className="h-auto p-8">
        {/* <Item action={() => {console.log()}}>Select User</Item> */}
      </div>
    </main>
  )
}