"use client"
import {useRouter} from 'next/navigation'
import {useState} from 'react'



const SearchBarArea = () => {
  // useRouter is 
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
          // Right here I'm setting the query on URL
          onClick={()=>{
            if(location === "") return;
            router.push(`/s?city=${location}`)  // http://localhost:3000/s?city=cityname
            setLocation("")
          }}
          >Let's Go
        </button>

    </div>
  )
}

export default SearchBarArea