
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

  const sections = []

  const createSection = () => {
    return {
      scores: [
        {
          user_id: 0,
          score: 100,
        },
        {
          user_id: 1,
          score: -250,
        },
        {
          user_id: 2,
          score: 150,
        },
      ]
    }
  }

  const getScoreText = (score: number) => {
    if (score === 0) return '± 0'
    return score > 0 ? <span className="text-blue-500">+ ${score}</span> : <span className="text-red-400">- ${Math.abs(score)}</span>
  } 

  const getUserName =  (userId: number) => {
    return ['上條', '山口', '寺田'][userId]
  }

  sections.push(createSection())
  sections.push(createSection())
  sections.push(createSection())
  sections.push(createSection())
  sections.push(createSection())

  const getTotal  = (sections) => {
    const users = [0, 0, 0]
    sections.forEach(section => {
      section.scores.forEach(score => {
        users[score.user_id] += score.score
      })
    })
    return users
  }


  const a = await getGameDetail()

  return (
    <main className="h-screen bg-slate-100 animate-slide-up">
      <div className="h-full flex flex-col relative">
        <div className="h-20 sticky bg-white flex items-center justify-center text-gray-500 font-bold text-xl shadow-xl">
          <div className="pl-4">播州カタン部 in 九州 day1</div>
        </div>
        <div className="sticky bg-white flex items-center justify-center text-gray-500 font-bold text-xl shadow-xl">
          <div className="pl-4">
            { getTotal(sections) }
          </div>
        </div>
        <div className="p-4 text-gray-500 overflow-y-auto relative">
          {sections.map((section, sI) => {
            return (
              <>
                <div className="p-1 font-bold">GAME {sI + 1}</div>
                <div className="p-2 bg-white shadow-xl mb-3">
                  {
                    section.scores.map(score  => {
                      return (
                        <div key={score.user_id} className="pb-2 border-b border-gray-200">
                          <span className="font-bold text-gray-500 mr-2">
                            {getUserName(score.user_id)}
                          </span>
                          {getScoreText(score.score)}
                          <button className="bg-green-400 text-white text-sm px-2 py-1 float-right rounded" type="button">編集</button>
                        </div>
                      )
                    })
                  }
                </div>
              </>
            )
          })}
        </div>
      </div>
    </main>
  )
}