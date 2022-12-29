import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Landing from './Componentes/Landing';
import Home from './Componentes/Home';
import Detail from './Componentes/Detail';
import Nav from './Componentes/Nav';
//import axios from 'axios';
//axios.defaults.baseURL= 'http://localhost:3001';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/home" component={Nav} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </>

  );
}

export default App;
