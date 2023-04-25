import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './styles/stylesProyect.css';

const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

export default function App() {

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <React.Suspense fallback={<>...</>}>
            <Login />
          </React.Suspense>
        }
      />
      <Route
        path="dashboard/*"
        element={
          <React.Suspense fallback={<>...</>}>
            <Dashboard />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}