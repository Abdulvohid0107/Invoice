import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  Button,
  Container,
  Input,
  InvoiceContentWrapper
} from "../../components";
import { axiosInstance } from "../../services";
import { userActions } from "../../store";
import "./login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error] = useState("");
  const location = useLocation();

  // const token = useSelector((state) => state.user.token);

  const handleLoginSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    // fetch("http://167.235.158.238:3001/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     Authorization: `Bearer ${token}`
    //   },
    //   body: JSON.stringify(user)
    // }).then(res => {
    //   if (res.status === 200) {
    //     return  res.json()
    //   }
    //   return Promise.reject(res)
    // }).then(data => {
    //   console.log(data);
    //   dispatch(userActions.setUser(data));
    //   axiosInstance.defaults.headers.Authorization = `Bearer ${data.accessToken}`
    // })
    // .catch(err => {
    //   setError("Something went wrong :(")
    // }).finally(() => {
    //   navigate(location.state?.redirect || "/");
    // });

    axiosInstance
      .post("/login", user)
      .then(
        (data) => dispatch(userActions.setUser(data.data)),
      ).finally(() => {
          navigate(location.state?.redirect || "/");
        });
  };

  return (
    <Container>
      <InvoiceContentWrapper className="login login--container">
        <h1 className="login__title">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email(),
            password: yup
              .string()
              .min(3, "at least 3 sybmols")
              .max(15, "no more than 15 symbols"),
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
