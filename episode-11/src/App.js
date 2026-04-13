import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))


const AppLayout = () => {

    const [userName, setuserName] = useState();

    // authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Aashish Rana"
        };
        setuserName(data.name);
    }, [])

    return (
        // Outside Default value
        // Providing new value
        <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
            {/* Here value is Aashish Rana*/}
            <div className="app">
                {/* <UserContext.Provider value={{loggedInUser: "Header Bolte Khopdi kholte"}}> */}
                {/* Here value is Header Bolte Khopdi kholte */}
                <Header />
                {/* </UserContext.Provider> */}
                <Outlet />
            </div>
        </UserContext.Provider>
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
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading..</h1>}>
                    <Grocery />
                </Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
        ],
        element: <AppLayout />,
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)