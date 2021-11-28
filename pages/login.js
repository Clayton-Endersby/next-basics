import NavBar from "../components/navbar/navbar";
import Brand from "../components/brand/brand";

function Login() {
    return (
        <div>
            <NavBar brand={"To-Dos"} company={"Directory"} login={"User Login"}/>
            <Brand title={"Login Page"} tagline={"Login!"}/>
        </div>
    )
}

export default Login