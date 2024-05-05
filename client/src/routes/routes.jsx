import {createBrowserRouter} from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import Home from "../pages/Home/Home";
import {AdminLayout} from "../layout/AdminLayout";
import RootLayout from "../layout/RootLayout";
import AddFood from "../admin/pages/AddFood/AddFood";
import {FoodList} from "../admin/pages/FoodList/FoodList";
import Orders from "../admin/pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
    ],
  },
  {
    path: "/admin-panel",
    element: <AdminLayout />,
    children: [
      {
        path: "add-food",
        element: <AddFood />,
      },
      {
        path: "food-list",
        element: <FoodList />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;
