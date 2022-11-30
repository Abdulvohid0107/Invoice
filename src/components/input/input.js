import { useField } from "formik";
import "./input.scss";

export const Input = ({ ...restProps }) => {
  const [field, meta] = useField(restProps);
  console.log(meta);
  return (
    <>
      <input {...field} {...restProps} />
      <p>{meta.error ? "" : null }</p>
    </>
  );
};
