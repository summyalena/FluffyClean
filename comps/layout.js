import React from 'react'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer/footregister'
function layout({children}) {
  return (
      <div>
     <Navbar/>
     {children}
     {/* <Footer/> */}
    </div>
  )
}

export default layout