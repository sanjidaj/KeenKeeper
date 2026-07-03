import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const RootLayout = () => {
    return (
        <div>
            <Navbar />


            <main className=" bg-[#F8FAFC]">
                <div className="max-w-4xl  mx-auto">
                    <Outlet/>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default RootLayout;