import Navbar from '@/pages/Navbar/Navbar';
import Footer from '@/pages/Footer/Footer';

const Layout = ({children}) => {

  // sm:rounded-[44px] sm:shadow-2xl

  return (
    <>
      <Navbar />
      <div className='App flex flex-col justify-center items-center min-h-screen p-0 sm:p-[30px]'>
        <div className="mobile-container grow w-full h-screen max-w-full rounded-none shadow-none sm:w-[675px] sm:h-[760px] sm:max-w-[675px] relative overflow-hidden">
          {children}
        </div>
      </div>
      <Footer />  
    </>
  )
}

export default Layout