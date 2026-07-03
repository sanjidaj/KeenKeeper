
import { NavLink} from "react-router";
import logoImg from "../../assets/logo.png"
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto flex justify-between py-2">
                <img src={logoImg} alt="Logo" />

                <ul className="flex gap-4">
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
            </div>
        </nav>
      
    );
};

export default Navbar;