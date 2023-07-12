import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  ErrorMessage,
  GoBack,
  InoviceForm,
  InvoiceContentWrapper,
  SideBar,
} from "../../components";
import { axiosInstance } from "../../services";
import { invoicesActions } from "../../store";
import "./edit-invoice.scss";

export const EditInvoice = () => {
  var currentTime = new Date();
  const time = `${currentTime.getDay()}-${currentTime.getDate()}-${currentTime.getFullYear()}`;

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentInvoice, setCurrentInvoice] = useState();

  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const { error, loading } = useSelector((state) => state.invoices);
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
    axiosInstance
      .get(`/invoices/${id}`)
      .then((data) => setCurrentInvoice(data.data));
  }, [id]);

  if (!currentInvoice) return <p>not found</p>;

  const handleFormSubmit = (values) => {
    const editInvoice = {
      userId: user.id,
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

    // fetch(API_URL + "/" + id, {
    //   method: "PUT",
    //   body: JSON.stringify(editInvoice),
    //   headers: {
    //     "Content-type": "Application/JSON",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       return res.json();
    //     }
    //     return Promise.reject(res);
    //   })
    //   .then((data) => {
    //     dispatch(invoicesActions.editInvoice(data));
    //     navigate("/");
    //   });

    dispatch(invoicesActions.setLoading())
    axiosInstance
      .put(`/invoices/${id}`, editInvoice)
      .then(
        (data) => dispatch(invoicesActions.editInvoice(data.data)),
        navigate(`/view-invoice/${id}`)
      )
      .catch((err) => invoicesActions.setError(err));
  };

  return (
    <Container>
      <SideBar />
      <GoBack to={`/view-invoice/${id}`} />
      <div className="edit-invoice">
        {loading ? "loading" : ""}
        <InvoiceContentWrapper>
          <h1 className="edit-invoice__title">
            Edit <span className="edit-invoice__id">#</span>
            {currentInvoice.id}
          </h1>
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
              <Button
                className="edit-invoice__cancel-btn"
                to={`/view-invoice/${id}`}
              >
                Cancel
              </Button>
              <Button className="edit-invoice__changes-btn" type={"submit"}>
                Save Changes
              </Button>
              {error && <ErrorMessage />}
            </div>
          </InoviceForm>
        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
