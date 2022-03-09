import { useState } from "react";
import { Wrapper } from "./Header.styles";
import { Link } from "react-router-dom";



const Header = () => {


  
       
  return (
    <Wrapper>
      <header className="header">
       
        <div className="title">
          <h1> Welcome to Shopee </h1>

          <div className="login">
            {(localStorage.getItem("email") === "abc@gmail.com" 
            && localStorage.getItem("password") === "password") ? 
            (<button onClick={() => localStorage.clear()}><Link to="login">Logout</Link></button>) : 
            (<button><Link to="login">Sign In</Link></button>)}
            
      
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Header;
