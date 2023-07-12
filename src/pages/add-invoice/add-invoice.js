import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import "./add-invoice.scss";

export const AddInvoice = () => {
  var currentTime = new Date();
  const time = `${currentTime.getDay()}-${currentTime.getDate()}-${currentTime.getFullYear()}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const { error } = useSelector((state) => state.invoices);

  const handleFormSubmit = (values) => {
    const newInvoice = {
      userId: user.id,
      // paid: false,
      email: values.email,
      to: values.clientname,
      dueDate: values.date,
      term: values.terms,
      description: values.project,
      price: values.price,
      createdDate: time,
    };

    // fetch(API_URL, {
    //   method: "POST",
    //   body: JSON.stringify(newInvoice),
    //   headers: {
    //     "Content-type": "Application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => {
    //     if (res.status === 201) {
    //       return res.json();
    //     }
    //     return Promise.reject(res);
    //   })
    //   .then((data) => {
    //     dispatch(invoicesActions.addInvoice(data));
    //     navigate("/")
    //   });

    axiosInstance
      .post("/invoices", newInvoice)
      .then((data) => {
        dispatch(invoicesActions.addInvoice(data.data));
      })
      .catch((err) => dispatch(invoicesActions.setError(err)))
      .finally(() => {
        if (!error) return navigate("/");
      });
  };

  return (
    <Container>
      <SideBar />
      <div className="add-invoice">
        <GoBack to={"/"} className="add-invoice__go-back" />
        <InvoiceContentWrapper className="add-invoice--content">
          <h1 className="add-invoice__title">New Invoice</h1>
          <InoviceForm
            onSubmit={handleFormSubmit}
            initialValues={{
              clientname: "React",
              email: "r@gmail.com",
              project: "invoice",
              price: "700",
              date: "2022-12-01",
              terms: "7",
            }}
          >
            <div className="add-invoice__btn-wrapper">
              <Button to={"/"} className="add-invoice__discard-btn">
                Discard
              </Button>
              <Button type="submit" className="add-invoice__add-btn">
                Save & Send
              </Button>
            </div>
          </InoviceForm>
          {error && <ErrorMessage />}
        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
