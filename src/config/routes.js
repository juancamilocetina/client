
import layaoutAdmin from "../layaouts/layaoutAdmin";
import layaoutBasic from "../layaouts/layaoutBasic";

import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Error404 from "../pages/Error404";

const routes = [
    {
        path:"/admin",
        component: layaoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSingIn,
                exact: true
            },
            {
                component: Error404,
            }
        ]
    },
    {
        path: "/",
        component: layaoutBasic,
        exact: false,
        routes: [
            {
                path:"/",
                component: Home,
                exact: true
            },
            {
                path:"/contact",
                component: Contact,
                exact: true
            },
            {
                component: Error404,
            }
        ]
    }
]

export default routes;