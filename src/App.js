import './App.css';
import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from "./routes";

function App() {
//   const element = useRoutes([
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/home',
//       element:<Home/>
//     },
//     {
//       path:'/',
//       element:<Navigate to="/about" />
//     }

// ]
//   )
const element = useRoutes(routes)
  return (
    <div className="App">
      <div>
        <NavLink to="about">About</NavLink>
        <div></div>
        <NavLink to="home">Home</NavLink>
      </div>

      <div>
        {/* <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Navigate to="/about" />} />
          <Route path='*' element={<About />}  />
        </Routes> */}
        {element}
      </div>

    </div>
  );
}

export default App;
