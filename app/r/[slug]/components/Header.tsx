

const Header = ({name, restaurant}: {name: string, restaurant: []}) => {
  const renderName = () =>{
    const nameWithDash = name.split("-");
    nameWithDash[nameWithDash.length - 1] = `(${nameWithDash[nameWithDash.length - 1]})`;

    return nameWithDash.join(" ")
  }

  return (
    // RESTAURANT HEADER PAGE
    <div className="h-96 overflow-hidden ">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xlg text-white capitalize text-shadow text-center ">
                {renderName()}
            </h1>
        </div>
    </div>
  )
}

export default Header