import Navbar from '@/_components/Navbar/Navbar';
import Footer from '@/_components/Footer/Footer';

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