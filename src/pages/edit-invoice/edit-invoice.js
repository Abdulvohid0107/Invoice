import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  GoBack,
  InoviceForm,
  InvoiceContentWrapper,
  SideBar,
} from "../../components";
import { API_URL } from "../../consts";
import { invoicesActions } from "../../store/invoices";
import "./edit-invoice.scss";

export const EditInvoice = () => {
  var currentTime = new Date();
  const time = `${currentTime.getDay()}-${currentTime.getDate()}-${currentTime.getFullYear()}`;

  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentInvoice, setCurrentInvoice] = useState();

  const token = useSelector((state) => state.user.token);

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

  if (!currentInvoice) return <p>not found</p>;

  console.log(currentInvoice.to);

  const handleFormSubmit = (values) => {
    const editInvoice = {
      userId: 1,
      paid: true,
      email: values.email,
      to: values.clientname,
      dueDate: values.date,
      term: values.terms,
      createdDate: time,
      description: values.project,
      price: values.price,
      id: Math.floor(Math.random() * 1000),
    };

    fetch(API_URL + "/" + id, {
      method: "PUT",
      body: JSON.stringify(editInvoice),
      headers: {
        "Content-type": "Application/JSON",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(invoicesActions.editInvoice(data));
        navigate("/");
      });
  };

  return (
    <Container>
      <SideBar />
      <GoBack to={"/"} />
      <div className="edit-invoice">
        <InvoiceContentWrapper>
          <h1></h1>
          <InoviceForm
            onSubmit={handleFormSubmit}
            initialValues={{
              clientname: `${currentInvoice.to}`,
              email: `${currentInvoice.email}`,
              project: `${currentInvoice.description}`,
              price: `${currentInvoice.price}`,
              date: `${currentInvoice.dueDate}`,
              terms: `${currentInvoice.term}`,
            }}
          >
            <div className="edit-invoice__btn-wrapper">
              <Button to={"/"}>Cancel</Button>
              <Button type={"submit"}>Save Changes</Button>
            </div>
          </InoviceForm>
        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
