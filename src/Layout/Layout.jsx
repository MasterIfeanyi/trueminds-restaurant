import Navbar from '@/pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const Layout = ({children}) => {


  return (
    <div className='App flex flex-col min-h-screen'>
      <Navbar />
      <div className="mobile-container grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout