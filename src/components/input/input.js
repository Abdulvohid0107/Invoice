import { useField } from "formik";
import { forwardRef } from "react";
import "./input.scss";

export const Input = forwardRef(({name, id, label, ...restProps}, ref) => {
  const [field, meta] = useField(name);
  return (
    <div className="input">
      <div className="input__label-wrapper">
        <label className="input__label" htmlFor={id}>{label}</label>
        <p className="input__warning">{meta.error}</p>
      </div>
      <input ref={ref} id={id} className={"input__input " + (meta.error? "input__input--error" : "")} name={name} {...field} {...restProps} />
    </div>
  );
});
