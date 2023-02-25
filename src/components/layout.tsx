import Footer from "./footer/footer";
import NavbarTop from "./nav/navbar-top";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <NavbarTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}
