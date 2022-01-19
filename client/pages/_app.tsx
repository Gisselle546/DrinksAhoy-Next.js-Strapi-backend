import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';
import {Toaster} from 'react-hot-toast'


function MyApp({ Component, pageProps }: AppProps) {

  




  return( 
      <>
        
             <Sidebar />
             <Toaster position='top-center'/>
             <Component {...pageProps} />
             <Footer/>
      
      </>

  );

}

export default MyApp
