import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  color: ${({ theme }) => theme.colors.BLACK};
 }

 html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;

    /* @media screen and (max-width:1440px) {
      font-size: 0.6944vw;
    } */

    /* @media screen and (max-width: 1020px) {
    font-size: 0.9804vw;
    } */
 }

  body {
	  line-height: 1;
    background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
    overflow: hidden;
  }

  ol, ul {
	list-style: none;
  }

  blockquote, q {
	  quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
	  content: '';
	  content: none;
  }

  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }

  button {
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

export default GlobalStyle;
