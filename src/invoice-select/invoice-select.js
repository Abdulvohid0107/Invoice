import "./invoice-select.scss";
import { useField } from "formik";

export const InvoiceSelect = ({name}) => {
  const [field] = useField(name)
  return (
    <div className="invoice-select invoice-select__container">
      <label className="invoice-select__label" htmlFor="termss">Payment Terms</label>
      <select {...field} name={name} className="invoice-select__select" id="termss">
        <option className="invoice-select__option" value="1">Net 1 Day</option>
        <option className="invoice-select__option" value="7">Net 7 Days</option>
        <option className="invoice-select__option" value="14">Net 14 Days</option>
        <option className="invoice-select__option" value="30">Net 30 Days</option>
      </select>
    </div>
  );
};
