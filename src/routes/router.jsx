import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <h1 className="text-5xl text-center my-4 text-red-600">Hello World</h1>
      }
    ]
  },
])

export default router;