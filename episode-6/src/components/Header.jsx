import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

    // let btnName = "Login";

    const[btnNameReact, setbtnNameReact] = useState("Login")
    console.log("Header ReRender")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <button className="login" 
                        onClick = {()=>{
                        btnName = "Logout";
                        console.log(btnName)}}>{btnName}</button> */}
                    <button className="login" onClick={()=>{
                        // setbtnNameReact("Logout") // React will re-render once this state variable change but with normal variable it does't rerender and change the value
                        btnNameReact == "Login"
                        ? setbtnNameReact("Logout") 
                        : setbtnNameReact("Login") 
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;