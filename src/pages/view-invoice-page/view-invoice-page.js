import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../consts";
import { Button, Container, SideBar, GoBack, InvoiceContentWrapper, PaidStatus } from "../../components";
import "./view-invoice-page.scss"

export const ViewInvoicePage = () => {
  const { id } = useParams();
  const [currentInvoice, setCurrentInvoice] = useState();

  useEffect(() => {
    fetch(API_URL + "/" + id)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setCurrentInvoice(data);
      });
  }, [id]);

  if (!currentInvoice) {
    return <p>error</p>;
  }
  console.log(currentInvoice.to);

  return (
    <Container>
      <SideBar />
      <GoBack to={"/"} />
      <div className="view-page">
        <h1 className="visually-hidden">Viewing invoice in detail</h1>
        <InvoiceContentWrapper className="view-page--status-content-wrapper">
          <div className="view-page__status-wrapper">
            <p className="view-page__status">Status</p>
            <PaidStatus>{currentInvoice.paid ? "Paid" : "Pending"}</PaidStatus>
          </div>
          <div className="view-page__buttons-wrapper">
            <Button className="view-page--edit-btn">Edit</Button>
            <Button className="view-page--delete-btn">Delete</Button>
            <Button className="view-page--mark-btn">Mark as Paid</Button>
          </div>
        </InvoiceContentWrapper>

        <InvoiceContentWrapper>

        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
