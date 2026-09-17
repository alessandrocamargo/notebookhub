import Navbar from './Navbar';
import Footer from './Footer';
import ToastMessage from './ToastMessage';
function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <ToastMessage />
      <main className='flex grow py-2'>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;