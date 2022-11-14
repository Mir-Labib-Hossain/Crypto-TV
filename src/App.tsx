import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const App = () => {
  const Home = lazy(() => import("./pages/home"));
  const Video = lazy(() => import("./pages/video"));
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/video/:videoId/:author" element={<Video />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
