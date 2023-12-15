import { createBrowserRouter } from "react-router-dom";
import privetRouter from "./PrivetRouter";
import publicRouter from "./PublicRouter";

// create router
const router = createBrowserRouter([...privetRouter, ...publicRouter]);

// export
export default router;
