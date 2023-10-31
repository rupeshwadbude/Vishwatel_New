import { useTranslation } from "react-i18next";
import { AdminLayout } from "../layouts";
// import { userRoutes } from "./User";
// import { NotFound } from "../pages";
import { adminRoutes } from "./Admin";

export const routes = () => {
  const { t } = useTranslation();
  return [
    {
      element: <AdminLayout />,
      children: [...adminRoutes(t)],
    },
    // {
    //   element: <MainLayout />,
    //   children: [...userRoutes(t)],
    // },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ];
};

export const routesList = () => {
  const { t } = useTranslation();
  let routeArr = [
    // ...userRoutes(t)[0].children,
    // ...userRoutes(t)[1].children,
    ...adminRoutes(t)[0].children,
    ...adminRoutes(t)[1].children,
  ];
  return [...routeArr];
};

export const moduleRoutesList = () => {
  // const { t } = useTranslation();
  let routeArr = {
    // user: [...userRoutes(t)[0].children, ...userRoutes(t)[1].children],
    admin: [...adminRoutes()[0].children, ...adminRoutes()[1].children],
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
