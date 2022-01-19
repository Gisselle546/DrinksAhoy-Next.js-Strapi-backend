import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';



function MyApp({ Component, pageProps }: AppProps) {

  




  return( 
      <>
        <div style={{display:"flex", width:"100%"}}>
             <Sidebar/>
             <Component {...pageProps} />
        </div>  
       
      </>

  );

}

export default MyApp
