import Index from "./pages";
import Create from "./pages/create";
import Update from "./pages/update";
import View from "./pages/view";

export const userRoutes = [
  {
    path: "user/create",
    element: <Create />,
  },
  {
    path: "user/index",
    element: <Index />,
  },
  {
    path: "user/update/:user_id",
    element: <Update />,
  },
  {
    path: "user/view/:user_id",
    element: <View />,
  },
];
