import { createGlobalStyle } from 'styled-components';
// import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';
import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
  }
  html,body,#root{
    height:100%;
    display:flex;
    flex-direction:column;
  }
  body{
    background:${() => colors.white};
    -webkit-font-smoothing:antialiased !important;
  }
  body,input,button{
    color:${() => colors.darkness};
    font:14px Roboto, sans-serif, Arial, Helvetica;
  }
  #root {
    /*max-width:1020px;
    margin:0 auto;
    padding: 0 20px 50px;*/
  }
  button{
    cursor:pointer
  }
`;
