import { useRoutes } from "react-router-dom";
import { InvoicesPage, AddInvoice, ViewInvoicePage } from "../pages";

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
 
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
