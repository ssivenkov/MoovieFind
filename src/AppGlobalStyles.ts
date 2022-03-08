import { createGlobalStyle } from 'styled-components';

export const GlobalAppNullStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus, :active {
    outline: none;
}

a:focus, a:active {
    outline: none;
}

nav, footer, header, aside {
    display: block;
}

html, body {
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
html{
    scroll-behavior: smooth;
}
input, button, textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a, a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const GlobalAppStyles = createGlobalStyle`
body {
    font-size: 16px;
    color: var(--white);
}

// initial colors
html {
    --primary_light: #ff6e77;
    --primary: #ff4046;
    --primary_dim: #d2484d;
    --primary_medium: #b52634;
    --primary_almost-medium: #87293a;
    --primary_half-medium: #500608;
    --primary_dark: #3b0305;
    --background1: #c27481;
    --background2: #ffb8bc;
    --white: #fff;
    --gray: #444;
    --dark: #4f626c;
    --black: #000;
}

// width
html {
    --content-width: 1400px;
}

// hide default background color on click
* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
}
`;
