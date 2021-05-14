import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <h1>APP</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
