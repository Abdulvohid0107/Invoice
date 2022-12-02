import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { InvoicesPage, AddInvoice, ViewInvoicePage, Login, NotFound } from "../pages";

const routes = [
  {
    path: "/",
    element: <InvoicesPage />,
  },
  {
    path: "/add",
    element: <AddInvoice />,
  },
  {
    path: "/view-invoice/:id",
    children: [
      {
        path: "",
        element: <ViewInvoicePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  },
];

export const Routes = () => {
  const user = useSelector((state) => state.user.user);
  const elements = useRoutes([
    ...(!user
      ? [
          {
            path: "/login",
            element: <Login />,
          },
        ]
      : []),
    ...routes,
  ]);
  return elements;
};
