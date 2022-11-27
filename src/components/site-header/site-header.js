import "./site-header.scss"
import { Container } from "../container"
import invoices from "../../assets/images/invoices.svg"
import invoiceswebp from "../../assets/images/invoices.webp"
import { Button } from "../button"

export const SiteHeader = () => {
  return (
    <Container>
      <div className="site-header">
        <div className="site-header__container">
          <div className="site-header__title-wrapper">
            <picture>
              <source type="image/webp" srcSet={invoiceswebp} />
              <img className="site-header__title-img" src={invoices} alt="Invoices" />
            </picture>
            <h1 className="visually-hidden">Invoices</h1>
            <p className="site-header__invoice-length">There are 6 total invoices</p>
          </div>

          <div className="site-header__filter-btn-wrapper">
            <select name="filter" className="site-header__select">
              <option className="site-header__option" value="1">All</option>
              <option className="site-header__option" value="2">Pending</option>
              <option className="site-header__option" value="3">Paid</option>
            </select>
            <Button children={"New Invoice"} className="button__add"/>
          </div>
        </div>
      </div>
    </Container>
  )
}