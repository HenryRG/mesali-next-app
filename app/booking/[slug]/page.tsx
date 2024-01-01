import Navbar from "../../components/Navbar"
import Form from "./Form"
import Header from "./Header"


const page = () => {
    return(
        <main  className="bg-white max-w-screen-2xl m-auto ">
            <Navbar />
            {/* Header and Form layout */}
            <div className="border-t h-screen">
                <div className="w-3/5 py-9 m-auto">
                  <Header />
                  <Form />
                </div>
            </div>
        </main>
    )
}

export default page