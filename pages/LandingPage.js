function LandingPage()
{
    function Login(){

    }
    return(
        < div className="landing">
            <div className="heading">Blind-Guru</div>
            <button className="login-btn" onClick={Login}><a>Login With Twitter</a></button>
            <div className="description">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div className="footer">Made with ❤️ by Team Fin-eazy</div>
        </div>
    )
}
export default LandingPage