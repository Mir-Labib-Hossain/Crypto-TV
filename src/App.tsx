import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const App = () => {
  const Home = lazy(() => import("./pages/home"));
  const Video = lazy(() => import("./pages/video"));
  const AddVideo = lazy(() => import("./pages/addVideo"));
  const EditVideo = lazy(() => import("./pages/editVideo"));

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
          <Route path="/videos/:videoId/:author" element={<Video />} />
          <Route path="/videos/edit/:videoId" element={<EditVideo />} />
          <Route path="/videos/add" element={<AddVideo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
