import { NavLink } from 'react-router-dom'

export function Links() {
    return (
        <div className="links">
            <ul>
                <li>
                    <NavLink to="/" >Login</NavLink>
                </li>
                <li>
                    <NavLink to="/product">products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
            </ul>
        </div>
    );
}
