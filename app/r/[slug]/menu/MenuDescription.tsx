import { Item } from "@prisma/client"
import MenuCard from "./MenuCard"


const MenuDescription = ({menu}: {menu: Item[]}) => {
  return (
      <>
          {/* <DescriptionNavbar /> */}
        {/* Title */}
        <div className="mt-4 border-b pb-6 ">
            <h1 className="text-6xlg font-bold ">Menu Title</h1>
        </div>
        {/* Menu Card*/}
        <div className="flex flex-wrap justify-between">
          {menu.length ? ( 
            menu.map(item => (
              <MenuCard key={item.id} item={item}/>
            ))) : (
              <p className="text-lg">This restaurant does not have a menu</p>
            )
          }
        </div>
      </>  
  )
}

export default MenuDescription