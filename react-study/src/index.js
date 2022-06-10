import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#222",
};

const lightTheme = {
  textColor: "#222",
  backgroundColor: "whitesmoke",
};
// theme color를 사용하기 위해서 provider를 이용할 수 있다.
// 각 theme의 prop name이 같아야 한다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      ㄴ
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
