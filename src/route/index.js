import { CustomerLayout, UserLayout } from "../layouts";
import { userRoutes } from "./User";
// import { NotFound } from "../pages";
import { customerRoutes } from "./Customer";

export const routes = () => {
  return [
    {
      element: <CustomerLayout />,
      children: [...customerRoutes()]
    },
    {
      element: <UserLayout />,
      children: [...userRoutes()]
    }
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ];
};

export const routesList = () => {
  let routeArr = [
    ...userRoutes()[0].children,
    ...userRoutes()[1].children,
    ...customerRoutes()[0].children,
    ...customerRoutes()[1].children
  ];
  return [...routeArr];
};

export const moduleRoutesList = () => {
  let routeArr = {
    user: [...userRoutes()[0].children, ...userRoutes()[1].children],
    admin: [...customerRoutes()[0].children, ...customerRoutes()[1].children]
  };
  return routeArr;
};

export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
