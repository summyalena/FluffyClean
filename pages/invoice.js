import React from 'react';
import Head from 'next/head'
import Invoice from '../comps/invoice/invoice'

const invoice = () => {
  return (
      <> 
      <Head>
          <title>Set to make Payment|FluffyClean</title>
          <meta name='keywords' content='project'/>
      </Head>
     
       <div className=""> 
         <Invoice/>
       </div>
       </>
  )
}

export default invoice;
