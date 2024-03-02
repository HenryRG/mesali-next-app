import ReservationButton from "./ReservationButton"

const Reservation = () => {
  return (
        // Card Position
    <div className="w-[27%] relative">
        {/* Reservation Card */}
        <div className="bg-white rounded p-3 drop-shadow-lg mb-5">
            <div className="text-center text-reg border-b p-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            {/* options */}
            <div className="my-3 flex flex-col">
                <label htmlFor="#person">Party Size</label>
                <select name="" id="#person" className="my-3 font-light border-b">
                    <option value="">1 person</option>
                    <option value="">2 people </option>
                </select>
            </div> 
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="#date">Date</label>
                    <input type="text" id="#date" className="py-3 px-2 font-light w-26 border-b" />
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="#time">Time</label>
                    <select name="" id="#time" className="py-3 font-light border-b">
                        <option value="">12:00 PM</option>
                        <option value="">08:30 PM</option>
                    </select>
                </div>
            </div>
            {/* Reservation Button */}
            <ReservationButton />
        </div>
    </div>
  )
}

export default Reservation