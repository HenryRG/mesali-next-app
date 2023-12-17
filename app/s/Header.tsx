import SearchBarArea from "../components/SearchBarArea";


const Header = () => {
    return (
        <div className=" bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="">
                {/* search bar and button from SearchBarArea */}
                <SearchBarArea />
            </div>
        </div>
    )
} 
export default Header;