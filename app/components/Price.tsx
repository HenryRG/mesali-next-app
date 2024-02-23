"use server"
import { PRICE } from "@prisma/client"

    // Component that return the logic about PRICE: "CHEAP, REGULAR, EXPENSIVE"
const Price = ({price}: {price: PRICE}) => {
    const priceLogic = () =>{
        if(price == PRICE.CHEAP)
        return  <>
                    <span>$$</span><span className="text-gray-400">$$</span>
                </>;
        else if(price == PRICE.REGULAR)
        return  <>
                    <span>$$$</span><span className="text-gray-400">$</span>
                </>;
        else
        return  <>
                    <span>$$$$</span>
                </>;
    }
    
  return (
    <p className="mx-3">
        {/* because is a function I need to invoce inside the component */}
        {priceLogic()}
    </p>
  )
}

export default Price