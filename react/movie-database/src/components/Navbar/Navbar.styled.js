import styled from "styled-components";

const StyledNavbar = styled.div`
   /* Small Screen */
   background-color: red;
   padding: 1rem;
   color: #fff;

   nav {
      display: flex;
      flex-direction: column;
   }

   h1 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
   }

   ul {
      display: flex;
      flex-direction: column;
      list-style: none;
   }

   li {
      margin-bottom: 1rem;
   }

   a {
      text-decoration: none;
      color: white;
      cursor: pointer;
   }

   /* Medium Screen */
   @media (min-width: 768px) {
   nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }

   h1 {
      margin-bottom: 0;
   }

   ul {
      flex-direction: row;
   }

   li {
      margin: 0 1rem;
   }
   }

   /* Large Screen */
   @media (min-width: 992px) {
   /* 
      * Nothing TODO HERE.
      * We haven't styling Navbar.
      */
   }
`;

export default StyledNavbar;