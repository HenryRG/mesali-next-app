
const SearchSideBar = () => {
  return (
    <div className="w-1/5">
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Region</h1>
            <p className="font-light text-reg">Luanda</p>
            <p className="font-light text-reg">Benguela</p>
        </div>
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Cuisine</h1>
            <p className="font-light text-reg">Mexicain</p>
            <p className="font-light text-reg">Italian</p>
            <p className="font-light text-reg">Angolan</p>
            <p className="font-light text-reg">French</p>
            <p className="font-light text-reg">Japanese</p>
        </div>
        <div className="mt-3 b-4">
            <h1 className="font-bold pb-2">Price</h1>
            <div className="flex">
                <button className="border w-full rounded-l-lg hover:bg-green-500">$</button>
                <button className="border w-full rounded-none hover:bg-green-500">$$</button>
                <button className="border w-full rounded-r-lg hover:bg-green-500 ">$$$</button>
            </div>
        </div>
    </div> 
  )
}

export default SearchSideBar