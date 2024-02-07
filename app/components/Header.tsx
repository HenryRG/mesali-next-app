import SearchBarArea from "./SearchBarArea";

const Header = () => {
    return (
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
            <div className="text-center pt-10">
                <h1 className="text-white text-2xlg font-bold mb-2 md:text-4xlg">Find Your Table For Any Occasion</h1>
                {/* search bar and button from SearchBarArea */}
                <SearchBarArea />
            </div>
        </div>
    )
} 
export default Header;