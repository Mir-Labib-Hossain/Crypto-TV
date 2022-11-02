import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Video from "./pages/video";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
