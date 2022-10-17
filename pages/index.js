import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageContent from '../comps/ImageContent'
import About from '../comps/aboutService'
import Services from '../comps/services'
import Review from '../comps/review'
import Email from './email'
import Footer from '../comps/footer/footregister'

export default function Home() {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>FluffyClean</title>
        <meta name="description" content="A laundry Web App" />
        <link rel="icon" href="/favicon.ico" />
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
            rel="preload"
            href="/fonts/MuseoSans_300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          {/* <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" /> */}
          <link
            href="/fonts/font.css"
            type="text/css"
            rel="stylesheet"
            media="screen,print"
          /> 
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> */}
      </Head>
     <ImageContent/>
     <About/>
    <Services/>
    <Review/>
    <Email/>
    {/* <Login/> */}
    <Footer/>
    </div>
  )
}

