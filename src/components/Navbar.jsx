import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <>
        <div className="navbar">
            <NavLink to="/" className="navlink">SubmitForm</NavLink>
            <NavLink to="/textarea" className="navlink">TextArea</NavLink>
            <NavLink to="/select" className="navlink">Select</NavLink>
        </div>
        </>
    )
}