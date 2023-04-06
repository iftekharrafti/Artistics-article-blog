import React from 'react'
import Main from "./Layout/Main";
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

import "bootstrap/dist/css/bootstrap.min.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React tabs
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </div>
  );
}

export default App;
