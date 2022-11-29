import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SideBar, SiteHeader } from "../../components";
import { InvoiceList } from "../../components/invoice-list/invoice-list";
import { API_URL } from "../../consts";
import { invoicesActions } from "../../store/invoices";

export const InvoicesPage = () => {
  const dispatch = useDispatch();
  const { invoicesList, loading } = useSelector((state) => state.invoices);

  useEffect(() => {
    if (!invoicesList) {
      dispatch(invoicesActions.setLoading())
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => dispatch(invoicesActions.setInovices(data)));
    }
  }, []);

  if (loading) return <p>Loading ...</p>

  return (
    <>
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <SideBar />
        <Container>
          <InvoiceList />
        </Container>
      </main>
    </>
  );
};
