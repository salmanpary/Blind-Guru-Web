import Footer from "@components/Footer"
import Head from "next/head"
import Router from 'next/router';
import { getCookie } from 'cookies-next';
import Image from 'next/image'
import Logo from '../public/logo.svg'

function home(props)
{

    function Login(){
      Router.push('/api/auth/twitter/login');
    }
    return(
        <div className="container">
        <Head>
        <title>Blind Guru</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <main>
          < div className="landing">
            <Image
      alt="Logo"
      src={Logo}
    />
            <div className="heading">Blind-Guru</div>
            <button className="login-btn" onClick={Login}><i className="fa fa-twitter"></i>  Login With Twitter</button>
            <div className="description">Blind Guru is used to people worldwide as an accessible entry point into the world of Social Media. It enables speacially abled people to use twitter using voice commands making social media accessible for all. </div>
        </div>
      </main>
      <Footer/>
    </div>
        
        
    )
}
export default home