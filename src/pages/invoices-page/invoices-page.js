import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  NoInvoice,
  SideBar,
  SiteHeader,
  ErrorMessage,
  InvoiceList,
  Spinner,
} from "../../components";
import { axiosInstance } from "../../services";
import { invoicesActions } from "../../store";

export const InvoicesPage = () => {
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState();

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
    // if (filterValue === "") filterValue = ""
    // else if (filterValue === "true") filterValue = "true"
    // else if (filterValue === "false") filterValue = "false"
    // if (!invoicesList) {
    dispatch(invoicesActions.setLoading());
    axiosInstance
      .get(`/invoices`, {
        params: {
          paid: filterValue,
        },
      })
      .then((data) => {
        dispatch(invoicesActions.setInovices(data.data));
      })
      .catch((err) => {
        dispatch(invoicesActions.setError(err));
        console.log(dispatch(invoicesActions.setError(err)));
      });
    // }
  }, [filterValue]);

  const handleFilterChange = (evt) => {
    setFilterValue(evt.target.value);
  };

  if (loading) return <Spinner />;

  return (
    <>
      <header>
        <SiteHeader onChange={handleFilterChange}></SiteHeader>
      </header>
      <main>
        <SideBar />
        <Container>
          {invoicesList?.length === 0 ? <NoInvoice /> : ""}
          <InvoiceList />
          {error && <ErrorMessage />}
        </Container>
      </main>
    </>
  );
};
