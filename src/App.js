import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Create from "./Pages/Create/Create";
import Search from "./Pages/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
import { useTheme } from "./Hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
