import Home from "./views/home/home.components"
import Detail from "./views/detail/detail.components"
import Form from "./views/createDog/createDog.components"
import Landing from "./views/landing/landing.components"
import {Routes, Route, useLocation} from "react-router-dom"
import NavBar from "./components/navbar/navbar.components";
import style from './app.module.css'



function App() {

  const{pathname}= useLocation();

return (
    <div style={style.root}>
      
      {pathname !== "/" &&  <NavBar />}
<Routes>
           <Route exact path="/" element={<Landing />} />
           <Route path="/home" element={<Home />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/form" element={<Form />} />
         
</Routes>


      
    </div>
  );
}

export default App;
