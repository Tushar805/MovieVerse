import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route,Routes} from 'react-router-dom';
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import { createContext,  useState } from "react";
import Login from './components/Login';
import Signup from './components/Signup'

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div>
  
    <Header />
    <Routes>
      <Route path='/' element={<Cards />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="/detail/:id" element={<Detail />} /> {/*detail page me movie ki id bhej re hai aise taki uss particular movie ki detail show ho  */}
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
