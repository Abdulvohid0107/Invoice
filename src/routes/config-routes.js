import { useRoutes } from "react-router-dom";
import { InvoicesPage } from "../pages";
import { ViewInvoicePage } from "../pages/view-invoice-page/view-invoice-page";

const routes = [
  {
    path: "/",
    element: <InvoicesPage />,
  },
  {
    path: "/view-invoice/:id",
    children: [
      {
        path: "",
        element: <ViewInvoicePage />
      }
    ]
  }
];

export const Routes = () => {
  const elements = useRoutes(routes)
  return elements
}
