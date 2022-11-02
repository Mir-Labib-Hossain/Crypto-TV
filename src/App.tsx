import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
