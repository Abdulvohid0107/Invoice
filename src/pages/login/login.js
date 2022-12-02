import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button, Container, Input, InvoiceContentWrapper } from "../../components";
import { userActions } from "../../store/user";
import "./login.scss";


export const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password
    }

    dispatch(userActions.setUser(user))
    navigate("/")
  }

  return (
    <Container>
      <InvoiceContentWrapper className="login login--container">
        <h1 className="login__title">Login</h1>
        <Formik
          initialValues={{
            email: "sayfulloh123@gmail.com",
            password: "nurulloh23",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email(),
            password: yup.string(),
          })}
          onSubmit={handleLoginSubmit}
        >
          {() => (
            <Form autoComplete="off">
              <Input
                name="email"
                placeholder="developer@gmail.com"
                label="Email"
                id="emailId"
                type="email"
              />
              <Input
                name="password"
                type="text"
                label="Password"
                id="passwordId"
              />
        <Button type="submit" className="login__button">Login</Button>
            </Form>
          )}
        </Formik>
      </InvoiceContentWrapper>
    </Container>
  );
};
