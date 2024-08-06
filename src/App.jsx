import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./MainLayout/MainLayout";
import JobsPage from "./pages/JobPages";
import NotFoundPage from "./pages/NotFoundPage";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {" "}
        {/* the path '/' must be followed */}
        <Route index element={<Homepage />} />{" "}
        {/*  index route is used to render a component when the parent's route is EXACTLY matched */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
