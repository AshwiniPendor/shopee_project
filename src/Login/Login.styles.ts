import IconButton from "@mui/material/IconButton";
import styled from "styled-components";



export const form = styled.div`{
  .container{
    display: flex;
    flexWrap: wrap;
    justify-content: center;
    width: 100px;
    margin-top: 20px;
    margin: 0 auto;
    
    .loginBtn {
      marginTop: 2px;
      flexGrow: 1;
    }
    .header {
      textAlign: center;
      background: '#212121';
      color: '#fff';
    }
    .card {
      marginTop: 10px;
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