import { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { demoContext } from "./App";

function Addtion({ user }) {
    const data = useContext(demoContext)
    console.log(data.role);

    console.log(user)
    const navigate = useNavigate()
    return (
        <>

            <h1>
                {data?.admin || "client"}
            </h1>
            <h1>
                welcome {user.user}
            </h1>
            <p>
                {user.ar}
            </p>

            <button onClick={
                () => navigate("hook-state")
            }>
                Click to change State hook
            </button>

            <Link to="hooks/ref">
                Change to Ref
            </Link>

            <NavLink to="hooks/my-component" >
                My component
            </NavLink>

            <Outlet />
        </>
    )
}

export default Addtion;