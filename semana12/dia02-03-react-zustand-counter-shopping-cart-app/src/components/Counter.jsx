const Counter = () => {
  return (
    <div className="border rounded p-2 flex flex-col gap-2 items-center">
      <h3 className="font-bold">Counter with zustand</h3>

      <div className="flex items-center gap-2">
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
        >
          -1
        </button>
        <h1 className="bg-slate-300 p-2 min-w-14 rounded font-bold text-center">
          0
        </h1>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default Counter