import { useRoutes } from "react-router-dom";
import { InvoicesPage, AddInvoice, ViewInvoicePage, Login } from "../pages";

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
    path: "/login",
    element: <Login />
  }
 
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
