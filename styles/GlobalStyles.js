import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura PT';
    src: url('/font/FuturaPTMedium.otf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Century Gothic';
    src: url('font/SansSerifFLF-Demibold.otf');
    font-weight: normal;
    font-style: normal;
  }
  html {

    --laptop-screen: 1440px;
    --tablet-screen: 1100px;
    --large-phone-screen: 750px;
    --medium-phone-screen: 600px;
    --small-phone-screen: 450px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --pale-green: #D3FCEE;
    --green: #8FF1D0;
    --medium-green: #54B7A2;
    --dark-green: #214337;
    --orange: #FAB392;
    --peach: #FDF2DE;
    --blue: #D3FCEE;
    --light-peach: #FCFAF2;
    --pale-blue: #EEFAF6;
    --dark-gray: #3C3C3B;
    --light-gray: #0202023c;
    --container-horizontal-padding:22rem;
    --header-height: 9rem;
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
    @media only screen and (max-width: 1600px){
      --container-horizontal-padding: 18rem;
    }
    @media only screen and (max-width: 1440px){
      --container-horizontal-padding: 4rem;
    }
    @media only screen and (max-width: 600px){
      --container-horizontal-padding: 2rem;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;

  }
  body {
    font-family: 'Futura PT',
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: var(--dark-gray);

  }
  a {
    text-decoration: none;
    color: var(---black);
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Futura PT'
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Century Gothic';
    color: var(--dark-green);
  }
  h3{
    font-size: 3rem;
  }
  h4{
    font-size: 2.5rem;
  }
  p {
    line-height:1.5;
    font-size: 1.8rem;
    font-weight: 300;
  }

`;
