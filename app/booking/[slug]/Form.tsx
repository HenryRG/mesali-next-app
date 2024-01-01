

const Form = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
        <input type="text" 
            placeholder="First Name"
            className="w-80 rounded mb-4 border border-black p-3 "
        />
        <input type="text" 
            placeholder="Last Name"
            className="w-80 rounded mb-4 border border-black p-3 "
        />
        <input type="text" 
            placeholder="Phone Number"
            className="w-80 rounded mb-4 border border-black p-3 "
        />
        <input type="text" 
            placeholder="Email"
            className="w-80 rounded mb-4 border border-black p-3 "
        />
        <input type="text" 
            placeholder="Occasion (optional)"
            className="w-80 rounded mb-4 border border-black p-3 "
        />
        <input type="text" 
            placeholder="Special Requests (optional)"
            className="w-80 rounded mb-4 border border-black p-3 "
        />

        <button type="submit" className="text-white w-full rounded bg-orange-600 p-1 font-semibold hover:bg-black">
            Complete Reservation
        </button>
            {/* Use of Term text */}
        <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing <label className="text-blue-500 cursor-pointer">elit</label>. Repellat quod consequuntur voluptatibus sequi, natus, ea qui quam quas enim libero recusandae expedita similique iure. Illum, nobis praesentium! Dignissimos, corrupti corporis.
        </p>
    </div>
  )
}

export default Form