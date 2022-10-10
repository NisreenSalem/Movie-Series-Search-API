import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ShowPage from "./pages/ShowPage";

import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
