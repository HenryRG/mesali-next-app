import React from 'react'
import Header from './components/Header'

const Loading = () => {
  return (
    <main>
        <Header/>
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">

            { [1,2,3,4,5,6,7,8,9,10,11,12].map(cardNum=>(
                <div className='animate-pulse  w-64 h-72 rounded overflow-hidden cursor-pointer bg-gray-300 m-2' key={cardNum}></div>
            ))
                
            }
        </div>
    </main>
  )
}

export default Loading