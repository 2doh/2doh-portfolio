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
    /* background-color: var(--color-bg-sub); */
    /* background: linear-gradient(135deg, var(--color-bg-white) 0%, var(--color-bg-sub) 100%);
    background-attachment: fixed; */
    color: var(--color-text-primary);
    line-height: 1.6;
    margin: 0;
  }

.text-gradient {
  background: linear-gradient(90deg, var(--color-text-primary), var(--color-accent-olive));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
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
  --color-deep-teal : #2d5a58;
  --color-soft-blue: #E0E7FF;
  --color-warm-gray: #F2EFED;
  --color-vivid-orange: #FF8A65;
  --color-muted-purple: #9A89A3;
  --color-deep-brown: #4a3a2a;
  --color-soft-green: #e2f0d9;
}
`;

export default Globalstyle;
