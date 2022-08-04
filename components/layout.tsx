import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
