import { Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";
import { InvoiceSelect } from "../../invoice-select/invoice-select";
import { Input } from "../input";
import "./invoice-form.scss";

export const InoviceForm = ({children, onSubmit}) => {

  const nameRef = useRef()

  const handleFormSubmit = (values) => {
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        clientname: "React",
        email: "r@gmail.com",
        project: "invoice",
        price: "700",
        date: "2022-12-01",
        terms: "",
      }}
      validationSchema={yup.object().shape({
        clientname: yup
          .string()
          .required("Can't be empty")
          .min(4, "maximum 4 symbols")
          .max(50, "maximum 50 symbols"),

        email: yup.string().required("Can't be empty").email(),
        date: yup.date().required("Can't be empty"),
        // terms: yup.number().required(),
        project: yup.string(),
        price: yup
          .number("Must be a number")
          .required("Can't be empty")
          .min(100, "At least £ 100")
          .max(1000, "no more than £ 1000"),
      })}
      validateOnChange={false} // forma to'ldirilgan payit validatsiya qilinadigan bo'ladigan bo'lsa, lekin formalar juda ko'p bo'ladigan bo'lsa bu kompyuterni qotishiga olib keladi. validateonchange bilan inputga yozilgan payit tekshirmasligini bildirib qo'yamiz. Qisqa qilib aytganda, agar forma kotta bo'ladigan bo'lsa validateOnChange'ni fasle qilib qo'ygan yaxshi
      validateOnBlur={false} // qachonki input'dan focus qoshirilgan payut u tekshiradi
      onSubmit={handleFormSubmit}
      // validator={() => ({})}
    >
      {() => (
        <Form autoComplete="off" className="invoice-form">
          <Input
            label={"Client’s Name"}
            type="text"
            name="clientname"
            placeholder="Alex Grim"
            id="nameId"
            ref={nameRef}

          />
          <Input
            label={"Client’s Email"}
            type="email"
            name="email"
            placeholder="alexgrim@mail.com"
            id="emailId"
          />

          <div className="invoice-form__select-wrapper">
            <Input label={"Due Date"} type="date" name="date" id="dateId" />
            <InvoiceSelect name="terms" />
          </div>

          <Input
            label={"Project Description"}
            type="text"
            name="project"
            placeholder="Graphic Design"
            id="projectId"
          />
          <Input
            label={"Price"}
            type="number"
            name="price"
            placeholder="780"
            id="projectId"
          />
          {children}
          {/* <button type="submit">submit</button> */}
        </Form>
      )}
    </Formik>
  );
};
