import { Input } from "../../components";
import "./add-invoice.scss";
import { Formik, Form } from "formik";
import * as yup from "yup";

export const AddInvoice = () => {
  return (
    <>
      <Formik
        initialValues={{
          clientname: "",
          email: "",
          roject: "",
          price: "",
        }}
        validationSchema={yup.object().shape({
          clientname: yup
            .string()
            .required("Fill")
            .min(4, "min 4")
            .max(10, "max 10"),
        })}
      >
        {() => (
          <Form
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              width: 400,
              margin: "40px auto",
            }}
          >
            <Input type="text" name="clientname" placeholder="Name" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="date" />
            <select name="terms">
              <option value="">Net 1 Day</option>
              <option value="">Net 7 Days</option>
              <option value="">Net 14 Days</option>
              <option value="">Net 30 Days</option>
            </select>
            <Input type="text" name="project" placeholder="project" />
            <Input type="number" name="price" placeholder="price" />
            <button>submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
