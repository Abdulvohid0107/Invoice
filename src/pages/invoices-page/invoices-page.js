import { Container, SideBar, SiteHeader } from "../../components";

export const InvoicesPage = () => {
  return (
    <>
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <SideBar />
        <Container></Container>
      </main>
    </>
  );
};
