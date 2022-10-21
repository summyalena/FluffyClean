import React from 'react'
// import Flo from '../comps/flow/flowNew';
import Table from '../comps/flow/flowOdd';
import Navbar from '../comps/sidenavbar/sidenavbar'
function Flow() {
  return (
    <div className='mt-0'>
        <Navbar/>
        <Table/>
      {/* <Flo/> */}
    </div>
  )
}

export default Flow