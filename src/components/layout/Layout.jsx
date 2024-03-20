import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"


const layout = ({children}) => {
  return (
    <div>
       <Navbar/>
       <div className="main-content min-h-screen">
        {children}
       </div>
       <Footer/>
    </div>
  )
}

export default layout