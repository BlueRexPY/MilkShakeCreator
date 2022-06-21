import { HOME_ROUTE, CREATE_ROUTE, SHAKE_ROUTE } from "../utils/consts";
import HomePage from "./HomePage";
import CreatePage from "./CreatePage";
import ShakePage from "./ShakePage";

export const publicRouts = [
    {
    path: HOME_ROUTE,
    Component: HomePage,
    }   
]

export const privatRouts = [
    {
    path: CREATE_ROUTE,
    Component: CreatePage,
    },
    {
    path: HOME_ROUTE,
    Component: HomePage,
    },
    {
    path: SHAKE_ROUTE,
    Component: ShakePage,
    }           
]