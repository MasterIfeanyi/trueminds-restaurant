import Navbar from '@/pages/Navbar/Navbar';
import Footer from '@/pages/Footer/Footer';

const Layout = ({children}) => {

  // sm:rounded-[44px] sm:shadow-2xl

  return (
    <>
      <Navbar />
      <div className='App flex flex-col justify-center items-center min-h-screen'>
        {children}
      </div>
      <Footer />  
    </>
  )
}

export default Layout