import { createBrowserRouter, RouterProvider } from "react-router"

// component
import Home from "./pages/Home.jsx"
import ListSurvey from "./pages/List.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/list",
    element: <ListSurvey/>
  },
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
