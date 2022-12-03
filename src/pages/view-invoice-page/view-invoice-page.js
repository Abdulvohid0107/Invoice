import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container, GoBack,
  InvoiceContentWrapper,
  PaidStatus, SideBar
} from "../../components";
import { API_URL } from "../../consts";
import { axiosInstance } from "../../services";
import { invoicesActions } from "../../store";
import "./view-invoice-page.scss";

export const ViewInvoicePage = () => {
  const { id } = useParams();
  const [currentInvoice, setCurrentInvoice] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(API_URL + "/" + id)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       return res.json();
    //     }
    //     return Promise.reject(res);
    //   })
    //   .then((data) => {
    //     setCurrentInvoice(data);
    //   });

    axiosInstance.get(`/invoices/${id}`).then(data => setCurrentInvoice(data.data))

  }, [id]);

  if (!currentInvoice) {
    return <p>error</p>;
  }

  const handleDeleteClick = () => {
    // fetch(API_URL + "/" + id, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-type": "Application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     return res.json()
    //   }
    //   return Promise.reject(res)
    // }).then(() => {
    //   dispatch(invoicesActions.deleteInvoice(id))
    //   navigate("/")
    // })

    axiosInstance.delete(`/invoices/${id}`).then(() => {
      dispatch(invoicesActions.deleteInvoice(id));
      navigate("/");
    });
  };

  const handleMarkClick = () => {

    const markPaid = {
      userId: user.id,
      paid: true
    }

    // fetch(API_URL + "/" + id, {
    //   method: "PATCH",
    //   headers: {
    //         "Content-type": "Application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //   body: JSON.stringify(markPaid)
    // })
    // console.log(markPaid);

    axiosInstance.patch(`invoices/${id}`, markPaid).then((data) => setCurrentInvoice(data.data))
  }

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
            <Button
              to={user ? "edit" : "/login"}
              className="view-page--edit-btn"
              state={{
                redirect: !user && "/add",
              }}
            >
              Edit
            </Button>
            <Button
              to={user? "" : "/login"}
              onClick={handleDeleteClick}
              className="view-page--delete-btn"
            >
              Delete
            </Button>
            {!currentInvoice.paid ? (
              <Button onClick={handleMarkClick} className="view-page--mark-btn">Mark as Paid</Button>
            ) : (
              ""
            )}
          </div>
        </InvoiceContentWrapper>

        <InvoiceContentWrapper className="view-page--invoice-wrapper">
          <ul className="view-page__list">
            <li className="view-page__item view-page__item--id">
              <h3 className="view-page__item-title view-page__item-title--id">
                {currentInvoice.id}
              </h3>
              <p className="view-page__item-label">
                {currentInvoice.description}
              </p>
            </li>
            <li className="view-page__item">
              <p className="view-page__item-label">Invoice Date</p>
              <p className="view-page__item-title">
                {currentInvoice.createdDate}
              </p>
            </li>
            <li className="view-page__item">
              <p className="view-page__item-label">Bill To</p>
              <p className="view-page__item-title">{currentInvoice.to}</p>
            </li>
            <li className="view-page__item">
              <p className="view-page__item-label">Sent to</p>
              <p className="view-page__item-title">{currentInvoice.email}</p>
            </li>
            <li className="view-page__item view-page__item--payment">
              <p className="view-page__item-label">Payment Due</p>
              <p className="view-page__item-title">{currentInvoice.dueDate}</p>
            </li>
          </ul>
          <InvoiceContentWrapper className="view-page--money-wrapper">
            <p className="view-page__money-amount">Amount Due</p>
            <h3 className="view-page__money">£ {currentInvoice.price}</h3>
          </InvoiceContentWrapper>
        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
