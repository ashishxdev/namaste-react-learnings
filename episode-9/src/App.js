import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Error = lazy(() => import('./components/Error'))
const Grocery = lazy(() => import("./components/Grocery")) // This one line of code is powerful
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>Loading..</h1>}>
                    <About />
                </Suspense>)
            },
            {
                path: "/contact",
                element: (<Suspense fallback={<h1>Trying and testing....</h1>}>
                    <Contact />
                </Suspense>
                )
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading..</h1>}>
                    <Grocery />
                </Suspense>)
            },
            {
                path: "/restaurants/:resId", // here resId is dynamic it changes according to the id of the restaurant
                element: <RestaurantMenu />
            },
        ],
        element: <AppLayout />,
        errorElement: (<Suspense fallback={<h1>Error Op.........</h1>}><Error /></Suspense>
        )
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)