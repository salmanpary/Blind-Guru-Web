import Footer from "@components/Footer"
import Head from "next/head"
import Router from 'next/router';
import { getCookie } from 'cookies-next';

export async function getServerSideProps({ req, res }) {
  const user = getCookie('user', { req, res});
  console.log(user);
  return {
    props:{
      user: user
    }
  }
}

function home(props)
{
    // const user = getCookie('user');
    console.log(props);

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
            <div className="heading">Blind-Guru</div>
            <button className="login-btn" onClick={Login}><i className="fa fa-twitter"></i>  Login With Twitter</button>
            <div className="description">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </main>
      <Footer/>
    </div>
        
        
    )
}
export default home