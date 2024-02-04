import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Login from "./pages/Login";
import AuthGuard from "./components/guards/AuthGuard";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthGuard />}>
        <Route index element={<Auth />} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}
    </>
  )
);

export default router;
