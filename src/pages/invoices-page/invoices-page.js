import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SideBar, SiteHeader } from "../../components";
import { InvoiceList } from "../../components/invoice-list/invoice-list";
import { Spinner } from "../../components/spinner/spinner";
import { axiosInstance } from "../../services/axios";
import { invoicesActions } from "../../store/invoices";

export const InvoicesPage = () => {
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState()

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
      axiosInstance.get(`/invoices`, {
        params: {
          paid_like: filterValue
        }
      }).then((data) => {
        dispatch(invoicesActions.setInovices(data.data))
      })
    // } 
  }, [filterValue])

  const handleFilterChange = (evt) => {
    setFilterValue(evt.target.value)
  }

  if (loading) return <Spinner />;

  return (
    <>
      <header>
        <SiteHeader onChange={handleFilterChange}></SiteHeader>
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
