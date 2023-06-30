
export default function GameLogs() {
  return (
    <main className="h-screen bg-purple-950">
      <div className="p-10 pt-28 h-1/6">
        <h1 className="text-5xl text-center font-bold text-white italic">GLogger</h1>
      </div>
      <div className="bg-white shadow rounded-t-3xl p-5 h-5/6">
        <h1 className="text-2xl font-bold text-purple-950">Login</h1>
        <div className="relative z-0 w-full mb-6 group mt-8">
          <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User ID</label>
        </div>
        <div className="relative z-0 w-full mb-6 group mt-8">
          <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <button className="block rounded-lg w-2/3 mx-auto bg-purple-950 text-white mt-8 p-2">Login</button>
        <div className="pt-8 text-center text-purple-700">register new account</div>
      </div>
    </main>
  );
}