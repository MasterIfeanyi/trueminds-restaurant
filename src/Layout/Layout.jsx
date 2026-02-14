import Navbar from '@/pages/Navbar/Navbar';
import Footer from '@/pages/Footer/Footer';

const Layout = ({children}) => {

  // sm:rounded-[44px] sm:shadow-2xl

  return (
    <>
      <div className='App flex flex-col min-h-screen'>
        <Navbar />
        {children}
        <Footer />  
      </div>
    </>
  )
}

export default Layout