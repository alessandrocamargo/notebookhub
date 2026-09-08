import Navbar from './Navbar';
import Footer from './Footer';
function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow py-2'>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;