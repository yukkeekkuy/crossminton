import Header from './header';
import Footer from './footer';

function Layout({ children }: {children: any}) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout
