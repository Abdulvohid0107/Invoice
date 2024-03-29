import { useSelector } from "react-redux";
import invoices from "../../assets/images/invoices.svg";
import invoiceswebp from "../../assets/images/invoices.webp";
import { Button } from "../button";
import { Container } from "../container";
import "./site-header.scss";

export const SiteHeader = ({ onChange }) => {
  const { invoicesList } = useSelector((state) => state.invoices);
  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <div className="site-header">
        <div className="site-header__container">
          <div className="site-header__title-wrapper">
            <picture>
              <source type="image/webp" srcSet={invoiceswebp} />
              <img
                className="site-header__title-img"
                src={invoices}
                alt="Invoices"
              />
            </picture>
            <h1 className="visually-hidden">Invoices</h1>
            <p className="site-header__invoice-length">
            <span className="site-header__invoice-length-span">There are</span> {invoicesList?.length || 0} <span className="site-header__invoice-length-span">total</span> invoices
            </p>
          </div>

          <div className="sitess site-header__filter-btn-wrapper">
            <select
              onChange={onChange}
              name="filter"
              className="site-header__select"
            >
              <option className="site-header__option" value="">
                All
              </option>
              <option className="site-header__option" value="false">
                Pending
              </option>
              <option className="site-header__option" value="true">
                Paid
              </option>
            </select>
            <Button
              to={user ? "/add" : "/login"}
              state={{
                redirect: !user && "/add",
              }}
              className="site-header__button"
            >
              New <span className="site-header__button-span">Invoice</span>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
