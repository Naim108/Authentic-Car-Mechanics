import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./components/About/About";
import Found from "./components/Found/Found";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/friends">
          <Friends></Friends>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route>
          <Found></Found>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
