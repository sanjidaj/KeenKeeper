import { FaHome } from "react-icons/fa";
import { Link } from "react-router";


const NotFoundPage = () => {
    return (
        <div className="text-center space-y-2 mt-40 ">
            <h1 className="text-8xl font-bold text-[#244D3F]">404</h1>
            <p className="text-xl font-bold font-serif">Page Not Found</p>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
            <button className="btn bg-[#244D3F] text-white  p-6"><FaHome/>Go back home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;