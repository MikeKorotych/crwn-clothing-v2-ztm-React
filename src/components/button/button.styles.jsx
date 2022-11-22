import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  // padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  // font-family: "Open Sans Condensed";
  font-family: inherit;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: 1px solid black;
  padding: 0 25px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #adccff;
    border: none;
    border: 1px solid white;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// .button-container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   // padding: 0 35px 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   // font-family: "Open Sans Condensed";
//   font-family: inherit;
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

//   &.google-sign-in {
//     background-color: #ffffff;
//     color: rgb(0, 0, 0);
//     border: 1px solid black;
//     padding: 0 25px;

//     svg {
//       margin-right: 5px;
//     }

//     &:hover {
//       background-color: #adccff;
//       border: none;
//       border: 1px solid white;
//     }
//   }

//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: white;
//       border: none;
//     }
//   }
// }
