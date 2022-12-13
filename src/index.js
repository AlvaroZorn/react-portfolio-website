import "./index.css";
import "./i18n/config";

import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
  );