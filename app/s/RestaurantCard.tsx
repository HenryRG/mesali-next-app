import Link from "next/link"

const RestaurantCard = () => {
  return (
        // Restaurant layout
    <div className="mb-7">
            <Link href="/booking/@">
            {/* Restaurant Card */}
            <div className="border flex h-44">
                <img src="data:image/jpeg;base64,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" 
                    alt="" className="rounded w-44 h-44 mr-4" 
                />
                <div className="flex-wrap">
                    <h2 className="text-2xlg font-bold text-cyan-600">Restaurant Lorem</h2>
                    <div className="flex">
                        <p className="text-4xlg mr-2">******</p>
                        <p className="text-lg mt-1 text-gray-600 mr-2">Exceptional</p>
                        <p className="text-lg mt-1 text-gray-500">(302)</p>
                    </div>
                    <div className="flex -mt-2 text-reg font-light pb-8">
                        <p className="mr-4">$$$$$$</p> * 
                        <p className="mx-4">Canadian</p> * 
                        <p className="mx-4">Toronto</p>
                    </div>
                    <div className="">
                        <Link href="" className="text-white bg-red-700 rounded-l p-2">Click For More Information</Link>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default RestaurantCard