import { Item } from "@prisma/client"


const MenuCard = ({item}: {item: Item}) => {
  return (
    <div className="border rounded p-3 w-[40%] mb-2">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm mt-1">{item.description}</p>
        <p className="font-bold mt-7">{item.price}</p>
    </div>
  )
}

export default MenuCard