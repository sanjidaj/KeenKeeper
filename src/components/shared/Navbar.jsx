
import { NavLink} from "react-router";
import logoImg from "../../assets/logo.png"
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
                <img src={logoImg} alt="Logo" />
                 
                <ul className="hidden md:flex gap-4">
                    <li>
                        <NavLink to={"/" } className={({isActive})=>{
                            return `${isActive ? "bg-[#244D3F] text-white flex gap-1 items-center py-1 px-2 " : "bg-white flex gap-1 items-center p-1 "}`
                       }}
                        > <RiHome2Line/>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/timeline"}  className={({isActive})=>{
                            return `${isActive ? "bg-[#244D3F] text-white flex gap-1 items-center py-1 px-2 " : "bg-white flex gap-1 items-center p-1 "}`
                        }}><RiTimeLine/>Timeline</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stats"} className={({isActive})=>{
                            return `${isActive ? "bg-[#244D3F] text-white flex gap-1 items-center py-1 px-2" : "bg-white flex gap-1 items-center p-1"}`
                        }}><BsGraphUp/>Stats</NavLink>
                    </li>
                </ul>
                <div className="relative md:hidden">
                    <details>
                        <summary className="list-none cursor-pointer text-3xl">
                            <RxHamburgerMenu/>
                        </summary>

                        <ul className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg mb-2">
                            <li>
                                <NavLink to="/" className="flex items-center bg-gray-100 border mb-1  gap-2 px-4 py-2">
                                    <RiHome2Line />
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/timeline" className="flex items-center bg-gray-100 border mb-1 gap-2 px-4 py-2">
                                    <RiTimeLine />
                                    Timeline
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/stats" className="flex items-center bg-gray-100 border  gap-2 px-4 py-2">
                                    <BsGraphUp />
                                    Stats
                                </NavLink>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
        </nav>
      
    );
};

export default Navbar;