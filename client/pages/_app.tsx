import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';



function MyApp({ Component, pageProps }: AppProps) {

  




  return( 
      <>
        
             <Sidebar />
             <Component {...pageProps} />
             <Footer/>
      
      </>

  );

}

export default MyApp
