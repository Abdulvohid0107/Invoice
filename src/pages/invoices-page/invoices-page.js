import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SideBar, SiteHeader } from "../../components";
import { InvoiceList } from "../../components/invoice-list/invoice-list";
import { Spinner } from "../../components/spinner/spinner";
import { axiosInstance } from "../../services/axios";
import { invoicesActions } from "../../store/invoices";

export const InvoicesPage = () => {
  const dispatch = useDispatch();
  const { invoicesList, loading, error } = useSelector(
    (state) => state.invoices
  );

  // useEffect(() => {
  //   if (!invoicesList) {
  //     dispatch(invoicesActions.setLoading());
  //     fetch(API_URL)
  //       .then((res) => res.json())
  //       .then((data) => dispatch(invoicesActions.setInovices(data)))
  //       .catch(dispatch(invoicesActions.setError(error)));
  //   }
  // }, []);

  useEffect(() => {
    if (!invoicesList) {
      axiosInstance.get("").then((data) => {
        dispatch(invoicesActions.setInovices(data.data))
      })
    }
  }, [])

  if (loading) return <Spinner />;

  return (
    <>
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <SideBar />
        <Container>
          <InvoiceList />
          {error && <p>error</p>}
        </Container>
      </main>
    </>
  );
};
