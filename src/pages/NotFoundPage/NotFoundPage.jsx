import { Link } from "react-router";


const NotFoundPage = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <Link to="/">
            <button className="btn btn-primary">Go back home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;