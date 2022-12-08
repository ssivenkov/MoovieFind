import { COLORS } from 'colors/colors';
import { createGlobalStyle } from 'styled-components';

import { SOURCE_SANS_PRO } from './enum/fontFamilies';

export const GlobalNullStyles = createGlobalStyle`
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
    font-size: 16px;
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

export function fontFace(params: {
  folderName: string;
  fontFamily: string;
  fontFileName: string;
  // eslint-disable-next-line no-magic-numbers
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  fontStyle?: 'normal' | 'italic';
}) {
  const {
    folderName,
    fontFileName,
    fontFamily,
    fontWeight,
    fontStyle = 'normal',
  } = params;

  return `
      @font-face {
        src:
          url(${require('./fonts/' +
            folderName +
            '/' +
            fontFileName +
            '.woff')}) format("woff"),
          url(${require('./fonts/' +
            folderName +
            '/' +
            fontFileName +
            '.ttf')}) format("truetype");
        font-family: "${fontFamily}";
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
      }
  `;
}

const {
  WILD_WATERMELON,
  CORAL_RED,
  MAHOGANY,
  STILETTO,
  BURNT_MAROON,
  BLACK,
  TUNDORA,
  WHITE,
  COD_GRAY,
} = COLORS;

export const GlobalAppStyles = createGlobalStyle`
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Light',
  fontFileName: 'sourcesansprolight',
  fontWeight: 300,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Light Italic',
  fontFileName: 'sourcesansprolightitalic',
  fontStyle: 'italic',
  fontWeight: 300,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro',
  fontFileName: 'sourcesanspro',
  fontWeight: 400,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Italic',
  fontFileName: 'sourcesansproitalic',
  fontStyle: 'italic',
  fontWeight: 400,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Semi-bold',
  fontFileName: 'sourcesansprosemibold',
  fontWeight: 600,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Semi-bold Italic',
  fontFileName: 'sourcesansprosemibolditalic',
  fontStyle: 'italic',
  fontWeight: 600,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Bold',
  fontFileName: 'sourcesansprobold',
  fontWeight: 700,
})}
${fontFace({
  folderName: 'sourcesanspro',
  fontFamily: 'Source Sans Pro Bold Italic',
  fontFileName: 'sourcesansprobolditalic',
  fontStyle: 'italic',
  fontWeight: 700,
})}
  
body {
    font-family: ${SOURCE_SANS_PRO.REGULAR};
    font-size: 16px;
    color: var(--textLight);
}

// initial colors
html {
    --primary_light: ${WILD_WATERMELON};
    --primary: ${CORAL_RED};
    --primary_medium: ${STILETTO};
    --primary_half-dark: ${MAHOGANY};
    --primary_dark: ${BURNT_MAROON};
    --textLight: ${WHITE};
    --textDark: ${BLACK};
    --disabledText: ${TUNDORA};
    --disabled: ${COD_GRAY};
}

// links
* a {
  color: var(--primary);
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
