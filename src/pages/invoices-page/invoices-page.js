import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SideBar, SiteHeader } from "../../components";
import { ErrorMessage } from "../../components/error";
import { InvoiceList } from "../../components/invoice-list/invoice-list";
import { Spinner } from "../../components/spinner/spinner";
import { API_URL } from "../../consts";
import { invoicesActions } from "../../store/invoices";

export const InvoicesPage = () => {
  const dispatch = useDispatch();
  const { invoicesList, loading, error } = useSelector((state) => state.invoices);

  useEffect(() => {
    if (!invoicesList) {
      dispatch(invoicesActions.setLoading())
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => dispatch(invoicesActions.setInovices(data)))
        .catch(dispatch(invoicesActions.setError(error)));
    }
  }, []);

  if (loading) return <Spinner/>  
  // if (error) return <p>error</p>
  return (
    <>
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <SideBar />
        <Container>
          <InvoiceList />
          {!error? <ErrorMessage children={"Uppps, something went wrong :("}/> : <p>shmeolo</p>}

        </Container>
      </main>
    </>
  );
};