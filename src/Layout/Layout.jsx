import Navbar from '@/pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const Layout = ({children}) => {


  return (
    <div className='App'>
      <Navbar />
      <div className="mobile-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout