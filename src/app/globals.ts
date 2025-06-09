"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --primary: #CC6237;
    --primary-light: #FFF1EC;
    --text: #333333;
    --text-light: #666666;
    --border: #EEEEEE;
    --background: #F5F5F5;
    --white: #FFFFFF;
    --success: #34A853;
    --success-light: #E6F4EA;
    --error: #EA4335;
    --error-light: #FCE8E8;
  }
`;
