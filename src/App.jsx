import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const User = lazy(() => import("./pages/User"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>

      <Suspense fallback={<p>Carregando...</p>}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/user/:id"
            element={<User />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </Suspense>

    </Layout>
  );
}

export default App;