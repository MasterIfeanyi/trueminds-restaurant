import Navbar from '@/pages/Navbar/Navbar';

const Layout = ({children}) => {


  return (
    <div className='App'>
      <Navbar />
      <div className="mobile-container">
        {children}
      </div>
    </div>
  )
}

export default Layout