import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
//import IconButton  from "@material-ui/core/IconButton";


export const Wrapper = styled.header`

      
       display: grid;
       padding: 2px;
      background-color: black;
       color: white;
       h1{
        color: white;
        text-shadow: 2px 2px 5px red;
      }
       
         
        .title{
          text-align: center;
          justify-content: center;
        }
    
      
 .login{
   margin-top: auto;
    margin-left: 1100px;
  
 }


`;


export const Button = styled(IconButton)`
width:80px;
height:  20px;
border-radius: 2px;
background-color: black;
color: white;
margin-left: 1100px;
 padding: 15px; 
`; 
