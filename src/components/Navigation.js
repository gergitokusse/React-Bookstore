import { Link, Route } from "react-router-dom"
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/categories">categories</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
