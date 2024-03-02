"use client"

export default function Loading(){
  return (
    <main>
        <nav className="w-full bg-white p-2 flex justify-between">
            <h1 className='font-bold text-gray-700 text-3xlg animate-pulse'>Mesali</h1>
            <div>
                <div className='flex'>
                    <div className='bg-gray-300 p-5 px-8 rounded mr-3 animate-pulse'></div>
                    <div className='border p-5 px-8 rounded'></div>
                </div>
            </div>
        </nav>
        <div className="h-screen overflow-hidden animate-pulse bg-slate-200 flex justify-center items-center">
            {/* Spin wheel */}
            <div className='w-10 h-10 bg-slate-200 border-4 border-gray-300 border-l-gray-500 rounded-full animate-spin'></div>
            <div className={`bg-center h-full`} />
        </div>
        
  </main>
  )
}
