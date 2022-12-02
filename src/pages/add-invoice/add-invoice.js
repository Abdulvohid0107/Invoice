import { useDispatch, useSelector } from "react-redux";
import {
  InoviceForm,
  InvoiceContentWrapper,
  Container,
  Button,
} from "../../components";
import { API_URL } from "../../consts";
import { invoicesActions } from "../../store/invoices";
import "./add-invoice.scss";

export const AddInvoice = () => {
  var currentTime = new Date();
  const time = `${currentTime.getDay()}-${currentTime.getDate()}-${currentTime.getFullYear()}`;

  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token)

  const handleFormSubmit = (values) => {
    console.log(values);
    const newInvoice = {
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
    console.log(newInvoice);

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newInvoice),
      headers: { "Content-type": "Application/json",
                  Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(invoicesActions.addInvoice(data));
      });
  };

  return (
    <Container>
      <div className="add-invoice">
        <InvoiceContentWrapper className="add-invoice--content">
          <h1 className="add-invoice__title">New Invoice</h1>
          <InoviceForm onSubmit={handleFormSubmit}>
            <div className="add-invoice__btn-wrapper">
              <Button to={"/"} className="add-invoice--discard-btn">
                Discard
              </Button>
              <Button type="submit" className="add-invoice--add-btn">
                Save & Send
              </Button>
            </div>
          </InoviceForm>
        </InvoiceContentWrapper>
      </div>
    </Container>
  );
};
