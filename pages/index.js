import firebase from "../firebase"

import NavBar from "../components/navbar/navbar"
import Brand from "../components/brand/brand"

function Home() {
  console.log(firebase)
  return (
    <>
      <NavBar brand={"To-Dos"} company={"Directory"} login={"User Login"}/>
      <Brand title={"Hekin hek"} tagline={"The coolest tagline you've ever heard" }/>
    </>
  )
}

export default Home