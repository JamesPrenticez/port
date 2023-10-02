import React, { lazy, Suspense, type ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const About = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/About"),
    new Promise((resolve) => setTimeout(resolve, 500)), // Adds a controlled delay to suspense
  ]);
  return moduleExports;
});

const NotFound = (): ReactElement => <h1>404 - Not Found</h1>;

const App = (): ReactElement => {
  return (
    <Suspense fallback={<Loading fullScreen={true} backgroundColor="rgb(249 250 251)" />}>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Layout> */}
    </Suspense>
  );
};

export default App;
