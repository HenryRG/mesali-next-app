
// Galery is on description
const Galery = () => {
  return (
    <div>
        <h1 className="font-bold text-3xlg mt-10 mb-7 border-b pb-5">
            5 Photos
        </h1>
        <div className="flex flex-wrap">
            <img className="w-56 h-44 mr-1 mb-1" src="https://source.unsplash.com/random/?city" alt="" />
            <img className="w-56 h-44 mr-1 mb-1" src="https://source.unsplash.com/random/?person" alt="" />
            <img className="w-56 h-44 mr-1 mb-1" src="https://source.unsplash.com/random/?car" alt="" />
            <img className="w-56 h-44 mr-1 mb-1" src="https://source.unsplash.com/random/?food" alt="" />
            <img className="w-56 h-44 mr-1 mb-1" src="https://source.unsplash.com/random" alt="" />
        </div>

    </div>
  )
}

export default Galery