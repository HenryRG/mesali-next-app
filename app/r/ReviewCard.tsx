
/**
 * Review Card is inside the Reviews
 */
const ReviewCard = () => {
  return (
    <div className="border-b pb-7 mb-7">
        <div className="flex">
            {/* Circle and Name column */}
            <div className="w-1/6 flex flex-col items-center">
                {/* Circle White the user initials */}
                <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                    <h2 className="font-bold text-white">MJ</h2>
                </div>
                {/* End of Circle */}
                <p className="font-bold text-center">Michael B. Jordan</p>
            </div>
            {/* End of Circle Column */}
            {/* Reviews column start */}
            <div className="ml-10 w-5/6">
                    {/* star div */}
                <div className="flex items-center">
                    <div className="flex mr-5">
                        ******
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-lg font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis alias qui nam aliquid vitae numquam, sed omnis. Repudiandae obcaecati est laborum iure dignissimos totam, magnam porro deserunt? Dolores, architecto non. 
                    </p>
                </div>

            </div>
            {/* Reviews column end */}
        </div>
    </div>
  )
}

export default ReviewCard