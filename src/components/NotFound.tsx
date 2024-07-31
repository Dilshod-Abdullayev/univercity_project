import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>Not found the page</h1>
            <button className="contact-btn"><Link to={"/"}>Go to the main page</Link></button>
        </div>
    )
}
