import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css'

// import App from './App'

import Intern from "./intern";

// import  Textutils from './Textutils'

// ReactDom.render(
//     <BrowserRouter>
//     <Textutils />
//     </BrowserRouter>,
//   document.getElementById('root')
//   )

ReactDom.render(<Intern />,document.getElementById('root'))