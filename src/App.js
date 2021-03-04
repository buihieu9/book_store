import "./App.css";
import Layout from "antd/lib/layout/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import Books from "./pages/Books";

// const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
      </Layout>
      <Layout>
        <Switch>
          <Suspense fallback={<div>loading</div>}>
            <Route path="/" exact render={Home} />

            <Route path="/books" render={Books} />
          </Suspense>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
