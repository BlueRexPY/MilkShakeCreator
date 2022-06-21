import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import HomePage from "./components/HomePage";
import { theme } from "./styles/them";
import { RootState } from "./utils/store/index";

function App() {

  const [login, setLogin] = useState(true)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

        <AppRouter login={login}/>
        
        
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
