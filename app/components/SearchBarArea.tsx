"use client"

import {useRouter} from 'next/navigation'
import {useState} from 'react'


const SearchBarArea = () => {
  const router = useRouter()
  const [location, setLocation] = useState("")
  return (
  
    <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input className="rounded mr-3 p-2 w-[450px]" 
          type="text" 
          placeholder="State, city or town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button 
          className="rounded bg-red-600 text-white px-9 py-2 font-light"
          onClick={()=>{
            if(location === "elbow") return;
            router.push('/s')
          }}
          >Let's Go
        </button>

    </div>
  )
}

export default SearchBarArea