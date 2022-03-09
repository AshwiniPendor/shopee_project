import styled from "styled-components";



export const Wrapper = styled.div`
  display: grid;
   grid-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  margin-top: 10px;
  

  button{
      border-radius: 0 0 20px 20px;
      color: red;
      
      
  }

  img{
     max-height: 200px;
     object-fit: cover;
     margin-left: 20px;
     padding: 20px;
     border-radius: 20px 20px 0 0;
  }

  div{
      font-family: Arial, Helvetica, sans-serif;
      padding: 1rem;
     

  }
`;