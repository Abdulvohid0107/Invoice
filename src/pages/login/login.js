import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import {
  Button,
  Container,
  Input,
  InvoiceContentWrapper,
} from "../../components";
import { userActions } from "../../store/user";
import "./login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("")

  const token = useSelector(state => state.user.token)

  const handleLoginSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    fetch("http://167.235.158.238:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    }).then(res => {
      if (res.status === 200) {
        return  res.json()
      }
      return Promise.reject(res)
    }).then(data => {
      console.log(data);
      dispatch(userActions.setUser(data));
      navigate("/");
    })
    .catch(err => {
      setError("Something went wrong :(")
    });

  };

  return (
    <Container>
      <InvoiceContentWrapper className="login login--container">
        <h1 className="login__title">Login</h1>
        <Formik
          initialValues={{
            email: "nurulloh23@gmail.com",
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
              <Button type="submit" className="login__button">
                Login
              </Button>
              {error && <span>{error}</span>}
            </Form>
          )}
        </Formik>
      </InvoiceContentWrapper>
    </Container>
  );
};
