import NavBar from "../components/navbar/navbar";
import Brand from "../components/brand/brand";

function SignUp() {
    return (
        <div>
            <NavBar brand={"To-Dos"} company={"Directory"} login={"User Login"}/>
            <Brand title={"Sign Up Page"} tagline={"Sign Up Here"}/>
        </div>
    )
}

export default SignUp