import { createGlobalStyle } from "styled-components";
import "./css/reset.css";
import "./css/common.css";

const Globalstyle = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  outline-style: none;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color : inherit;
}

button {
  font-family: "Inter", "Pretendard", "BMJUA";
  font-weight: 300;
  font-style: normal;
  font-optical-sizing: auto;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
}

html {
  overflow-x: hidden;
}

body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    background-color: var(--color-bg-sub);
    color: var(--color-text-primary);
    line-height: 1.6;
    margin: 0;
  }

:root {
  --color-error: #f6532b;
  --color-success: #b5f400;
  --color-highlight: #d1ecff;
  --color-accent-mint: #c6dbda;
  --color-accent-coral: #ffc5bf;
  --color-accent-lavender: #ecd5e3;
  --color-accent-amber: #fae39d;
  --color-accent-olive: #99aa8c;
  --color-text-primary: #2a1b07;
  --color-text-secondary: #374151;
  --color-bg-white: #fff;
  --color-bg-sub: #fcfaf7; 
  --color-border: #eeeae5;
}
`;

export default Globalstyle;
