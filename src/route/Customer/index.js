import { CustomerPrivateLayout, CustomerPublicLayout } from "../../layouts";
import publicRoutes from "./public.route";
import privateRoutes from "./private.route";

export const customerRoutes = (t) => {
  return [
    {
      element: <CustomerPublicLayout />,
      children: [...publicRoutes(t)]
    },
    {
      element: <CustomerPrivateLayout />,
      children: [...privateRoutes(t)]
    }
  ];
};
