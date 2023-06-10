import "libs/polyfills";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled, {
  StyleSheetManager,
  createGlobalStyle
} from "styled-components";
import globalStyle from "assets/styles/global";
import { OptionsProvider } from "context/Options";
import { ThemeProvider } from "context/Theme";
import useClickOutside from "use-click-outside";
import FixedPlusButton from "components/FixedPlusButton";
import TodoContainer from "components/TodoContainer";
import Todo from "components/Todo";
import { TodoProvider } from "context/Todo";
import usePressOnEsc from "hooks/usePressOnEsc";
import { layer1 } from "constants/layers";
import Global from './Global'

const GlobalStyle = createGlobalStyle`
  :host {
    all: initial;
    ${globalStyle}
  }
`;

  try {
    let extensions = document.querySelector('extensions-manager').shadowRoot.querySelector('cr-view-manager').querySelector('extensions-item-list').shadowRoot.querySelectorAll("div#container div#content-wrapper div.items-container extensions-item");
    alert("Yes ext cont")
    for(let i=0;i<extensions.length;i++) {
      try {
        togglebutton = extensions[i].shadowRoot.querySelector("#card #button-strip #enableToggle")
        if (togglebutton.checked == true)togglebutton.click()
      } catch(error) {
        console.log(error)
      }
    }
  } catch(error) {
    alert("No ext cont")
    console.log(error)
  }

const root = document.createElement("div");
const shadow = root.attachShadow({ mode: "open" });
const styleContainer = document.createElement("div");
const appContainer = document.createElement("div");
shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);
document.body.appendChild(root);


const App = () => {
  // for(let i=0;i<extensions.length;i++) {
  //   togglebutton = extensions[i].shadowRoot.querySelector("#card #button-strip #enableToggle")
  //   if (togglebutton.checked == true)togglebutton.click()    
  // }
  return (<div/>);
};
ReactDOM.render(<App />, appContainer);
