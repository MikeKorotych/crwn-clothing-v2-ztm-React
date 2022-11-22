import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 25px; */
  margin: 0 25px 25px 25px;
  padding: 0 20px;
`;

export const LogoContainer = styled(Link)`
  /* width: 70px; */
  /* padding: 25px; */
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 1px;
    width: 0;
    background-color: #000;
    transition: all 0.2s ease;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

// .navigation {

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }

//     a {
//       position: relative;
//     }

//     a::after {
//       content: "";
//       position: absolute;
//       left: 50%;
//       bottom: 0;
//       height: 1px;
//       width: 0;
//       background-color: #000;
//       transition: all 0.2s ease;
//     }

//     a:hover::after {
//       width: 100%;
//       left: 0;
//     }
//   }
// }
