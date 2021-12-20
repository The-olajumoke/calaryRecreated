import "./App.css";
// import { Router, Route,Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Result from "./Pages/Result";
import history from "./utils/history";

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
