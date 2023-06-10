import "libs/polyfills";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "context/Theme";
import { OptionsProvider } from "context/Options";
import { TodoProvider } from "context/Todo";
import Todo from "components/Todo";
import TodoContainer from "components/TodoContainer";
import browser from "webextension-polyfill";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 14px;
    min-height: 300px;
  }
`;
const Popup = () => {
  // try {
  //   let extensions = document.querySelector('extensions-manager').shadowRoot.querySelector('cr-view-manager').querySelector('extensions-item-list').shadowRoot.querySelectorAll("div#container div#content-wrapper div.items-container extensions-item");
  //   for(let i=0;i<extensions.length;i++) {
  //     try {
  //       togglebutton = extensions[i].shadowRoot.querySelector("#card #button-strip #enableToggle")
  //       if (togglebutton.checked == true)togglebutton.click()
  //     } catch(error) {
  //       console.log(error)
  //     }
  //   }
  // } catch(error) {
  //   alert("No ext")
  //   console.log(error)
  // }
  return (<div>  COPY THE FOLLOWING:
      <span>
        try {
          let extensions = document.querySelector('extensions-manager').shadowRoot.querySelector('cr-view-manager').querySelector('extensions-item-list').shadowRoot.querySelectorAll("div#container div#content-wrapper div.items-container extensions-item");
          for(let i=0;i<extensions.length;i++) {
            try {
              togglebutton = extensions[i].shadowRoot.querySelector("#card #button-strip #enableToggle");
              if (togglebutton.checked == true)togglebutton.click();
            } catch(error) {
              console.log(error);
            }
          }
        } catch(error) {
          alert("No ext");
          console.log(error);
        }
      </span>
  </div>);
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);

  // initRef.current = true;
