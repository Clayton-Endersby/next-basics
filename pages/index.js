import AppBar from "../components/appbar/appbar"
import Brand from "../components/brand/brand"

function Home() {
  return (
    <>
      <AppBar brand={"To-Dos"} company={"Directory"} login={"User Login"}/>
      <Brand title={"Hekin hek"} tagline={"The coolest tagline you've ever heard" }/>
    </>
  )
}

export default Home