import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { layoutRouter, nonLayoutRouter } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navBar = [ 
  {
    name: "User Create",
    path: "user/create",
  },
  {
    name: "User List",
    path: "user/index",
  },
 

];

const Layout = () => (
  <>
    <body>
      <div class='sidenav'>
        {navBar.map((ele) => (
          <Link to={ele.path}>{ele.name}</Link>
        ))}

        {/* <Link to='user/create'>user create</Link>
        <Link to='test'>Test</Link> */}
      </div>

      <div class='main'>
        <Outlet />
      </div>
    </body>
  </>
);

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {nonLayoutRouter.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))}
        <Route path='*' element={<h1>404</h1>} />

        <Route element={<Layout />}>
          {layoutRouter.map((ele) => (
            <Route path={ele.path} element={ele.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
