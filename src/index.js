import ReactDom from 'react-dom/client';
import React from "react";

import App from './App.js';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'))       //new features after react 17 version

root.render(<App/>);