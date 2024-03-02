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
        <div className="h-96 overflow-hidden animate-pulse bg-slate-200 flex justify-center items-center">
            {/* Spin wheel */}
            <div className='w-10 h-10 bg-slate-200 border-4 border-gray-300 border-l-gray-500 rounded-full animate-spin'></div>
            <div className={`bg-center h-full`} />
        </div>
        <div className="flex  m-auto w-2/3 justify-between items-start 0 -mt-9">
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <nav className="flex text-reg border-b pb-2">
                <h4 className="mr-7">Overview</h4>
                <p className="mr-7">Menu</p>
                </nav>

                <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[400px] h-16 rounded"></div>

                <div className="flex items-end animate-pulse">
                <div className="ratings mt-2 flex items-center">
                    <div className="flex items-center bg-slate-200 w-56"></div>
                    <p className="text-reg ml-3"></p>
                </div>
                <div>
                    <p className="text-reg ml-4"> </p>
                </div>
                </div>
            </div>
        </div>
  </main>
  )
}
