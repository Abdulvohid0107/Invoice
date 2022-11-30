import "./paid-status.scss";

export const PaidStatus = ({ children }) => {
  return (
    <p
      className={
        (children === "Paid"
          ? "paid-status"
          : "paid-status--pending")
      }
    >
      {children}
    </p>
  );
};
